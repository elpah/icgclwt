export type YoutubePastMessage = {
  id: string;
  platform: 'youtube';
  title: string;
  date: string;
  videoId: string;
};

export type YoutubeFeed = {
  configured: boolean;
  liveStatus: 'unknown' | 'live' | 'offline';
  liveVideoId: string | null;
  latestVideoId: string | null;
  channelId: string | null;
  pastMessages: YoutubePastMessage[];
  error?: string;
};

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3';
const DEFAULT_HANDLE = 'icgclwt';
const CACHE_MS = 90_000;
const PAST_MESSAGE_COUNT = 6;

type CacheEntry = {
  expiresAt: number;
  payload: YoutubeFeed;
};

let cache: CacheEntry | null = null;

function env(name: string) {
  return process.env[name]?.trim() ?? '';
}

export function isYoutubeApiConfigured() {
  return Boolean(env('YOUTUBE_API_KEY'));
}

function emptyFeed(partial: Partial<YoutubeFeed> = {}): YoutubeFeed {
  return {
    configured: false,
    liveStatus: 'unknown',
    liveVideoId: null,
    latestVideoId: null,
    channelId: null,
    pastMessages: [],
    ...partial,
  };
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

async function youtubeGet<T>(path: string, params: Record<string, string>): Promise<T> {
  const url = new URL(`${YOUTUBE_API}/${path}`);
  url.searchParams.set('key', env('YOUTUBE_API_KEY'));
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url);
  const data = (await response.json()) as T & { error?: { message?: string } };

  if (!response.ok) {
    throw new Error(data.error?.message || 'YouTube request failed.');
  }

  return data;
}

type ChannelsResponse = {
  items?: Array<{
    id?: string;
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type SearchResponse = {
  items?: Array<{
    id?: { videoId?: string };
  }>;
};

type PlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      publishedAt?: string;
      resourceId?: { videoId?: string };
    };
  }>;
};

async function resolveChannel() {
  const channelId = env('YOUTUBE_CHANNEL_ID');
  const handle = env('YOUTUBE_CHANNEL_HANDLE').replace(/^@/, '') || DEFAULT_HANDLE;

  const params: Record<string, string> = channelId
    ? { part: 'id,contentDetails', id: channelId }
    : { part: 'id,contentDetails', forHandle: handle };

  const data = await youtubeGet<ChannelsResponse>('channels', params);
  const channel = data.items?.[0];
  const id = channel?.id?.trim() ?? '';
  const uploadsPlaylistId = channel?.contentDetails?.relatedPlaylists?.uploads?.trim() ?? '';

  if (!id) {
    throw new Error('YouTube channel was not found.');
  }

  return { id, uploadsPlaylistId };
}

async function findLiveVideoId(channelId: string) {
  const data = await youtubeGet<SearchResponse>('search', {
    part: 'id',
    channelId,
    eventType: 'live',
    type: 'video',
    maxResults: '1',
  });

  return data.items?.[0]?.id?.videoId?.trim() || null;
}

async function listPastMessages(playlistId: string, liveVideoId: string | null) {
  const data = await youtubeGet<PlaylistItemsResponse>('playlistItems', {
    part: 'snippet',
    playlistId,
    maxResults: String(PAST_MESSAGE_COUNT + 2),
  });

  const messages: YoutubePastMessage[] = [];

  for (const item of data.items ?? []) {
    const videoId = item.snippet?.resourceId?.videoId?.trim() ?? '';
    const title = item.snippet?.title?.trim() ?? '';
    if (!videoId || !title) continue;
    if (title === 'Private video' || title === 'Deleted video') continue;
    if (liveVideoId && videoId === liveVideoId) continue;

    messages.push({
      id: `yt-${videoId}`,
      platform: 'youtube',
      title,
      date: formatDate(item.snippet?.publishedAt ?? ''),
      videoId,
    });

    if (messages.length >= PAST_MESSAGE_COUNT) break;
  }

  return messages;
}

export async function getYoutubeFeed(): Promise<YoutubeFeed> {
  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    return cache.payload;
  }

  if (!isYoutubeApiConfigured()) {
    return emptyFeed();
  }

  try {
    const channel = await resolveChannel();
    const playlistId = env('YOUTUBE_PLAYLIST_ID') || channel.uploadsPlaylistId;
    const liveVideoId = await findLiveVideoId(channel.id);
    const pastMessages = playlistId ? await listPastMessages(playlistId, liveVideoId) : [];
    const latestVideoId = pastMessages[0]?.videoId ?? null;

    const payload: YoutubeFeed = {
      configured: true,
      liveStatus: liveVideoId ? 'live' : 'offline',
      liveVideoId,
      latestVideoId,
      channelId: channel.id,
      pastMessages,
    };

    cache = { expiresAt: now + CACHE_MS, payload };
    return payload;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'YouTube is unavailable right now.';
    const payload = emptyFeed({
      configured: true,
      error: message,
    });
    cache = { expiresAt: now + 60_000, payload };
    return payload;
  }
}

type YoutubeRequest = {
  method?: string;
};

type YoutubeResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

export default async function handler(req: YoutubeRequest, res: YoutubeResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const feed = await getYoutubeFeed();
    res.status(200).json(feed);
  } catch {
    res.status(500).json(
      emptyFeed({
        configured: isYoutubeApiConfigured(),
        error: 'YouTube is unavailable right now.',
      })
    );
  }
}
