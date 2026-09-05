import { CHURCH_FACEBOOK_URL, CHURCH_YOUTUBE_URL } from '@/data/churchInfo';

export type LivePlatform = 'youtube' | 'facebook';

/**
 * unknown: the site does not know if a service is live.
 * live / offline: set by /api/youtube when a YouTube API key is configured.
 */
export type LiveStatus = 'unknown' | 'live' | 'offline';

export type PastMessage =
  | {
      id: string;
      platform: 'youtube';
      title: string;
      date: string;
      videoId: string;
    }
  | {
      id: string;
      platform: 'facebook';
      title: string;
      date: string;
      videoUrl: string;
    };

export type YoutubeFeedResponse = {
  configured: boolean;
  liveStatus: LiveStatus;
  liveVideoId: string | null;
  latestVideoId: string | null;
  channelId: string | null;
  pastMessages: Extract<PastMessage, { platform: 'youtube' }>[];
  error?: string;
};

export const LIVE_STREAM_CONFIG = {
  liveStatus: 'unknown' as LiveStatus,
  defaultPlatform: 'youtube' as LivePlatform,
  youtube: {
    channelUrl: CHURCH_YOUTUBE_URL,
    // Optional fallback if the YouTube API is not configured yet.
    // YouTube Studio -> Settings -> Channel -> Advanced settings -> Channel ID (starts with UC)
    channelId: '',
    // Optional fallback. Video ID from a YouTube URL: youtube.com/watch?v=THIS_PART
    liveVideoId: '',
    // Optional. Playlist ID from a playlist URL: youtube.com/playlist?list=THIS_PART
    archivePlaylistId: '',
  },
  facebook: {
    pageUrl: CHURCH_FACEBOOK_URL,
    // Full Facebook live or video URL, e.g. https://www.facebook.com/ICGCLivingWordTemple/videos/123456
    liveVideoUrl: '',
  },
  // Optional Facebook archive items, or YouTube fallback if the API is not configured. Example:
  // {
  //   id: 'yt-1',
  //   platform: 'youtube',
  //   title: 'Sunday Service',
  //   date: '1 Mar 2026',
  //   videoId: 'YOUR_VIDEO_ID',
  // },
  pastMessages: [] as PastMessage[],
};

export function getLiveStatus(): LiveStatus {
  return LIVE_STREAM_CONFIG.liveStatus;
}

export function isYouTubeLiveConfigured() {
  return Boolean(
    LIVE_STREAM_CONFIG.youtube.liveVideoId.trim() || LIVE_STREAM_CONFIG.youtube.channelId.trim()
  );
}

export function isFacebookLiveConfigured() {
  return Boolean(LIVE_STREAM_CONFIG.facebook.liveVideoUrl.trim());
}

export function getYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;
}

export function getYouTubeLiveChannelEmbedUrl(channelId: string) {
  return `https://www.youtube.com/embed/live_stream?channel=${encodeURIComponent(channelId)}`;
}

export function getYouTubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

export function getYouTubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}

export function getYouTubePlaylistUrl(playlistId: string) {
  return `https://www.youtube.com/playlist?list=${encodeURIComponent(playlistId)}`;
}

export function getFacebookEmbedUrl(videoUrl: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false`;
}
