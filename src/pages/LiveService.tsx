import { useEffect, useState } from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import SectionEyebrow from '@/components/SectionEyebrow';
import PlatformSelector from '@/components/live/PlatformSelector';
import YouTubePlayer from '@/components/live/YouTubePlayer';
import FacebookPlayer from '@/components/live/FacebookPlayer';
import MessageArchive from '@/components/live/MessageArchive';
import {
  LIVE_STREAM_CONFIG,
  type LivePlatform,
  type PastMessage,
  type YoutubeFeedResponse,
} from '@/data/liveStreamConfig';

const SERVICE_TIMES = [
  {
    day: 'Sundays',
    time: '8:00 AM - 10:30 AM',
    title: 'Sunday Service',
    description: 'Worship with powerful preaching and prayer',
  },
  {
    day: 'Thursdays',
    time: '6:00 PM',
    title: 'Teaching Service',
    description: 'Bible study, prayer, and fellowship',
  },
];

const EMPTY_YOUTUBE_FEED: YoutubeFeedResponse = {
  configured: false,
  liveStatus: 'unknown',
  liveVideoId: null,
  latestVideoId: null,
  channelId: null,
  pastMessages: [],
};

const LiveService = () => {
  const [platform, setPlatform] = useState<LivePlatform>(LIVE_STREAM_CONFIG.defaultPlatform);
  const [youtubeFeed, setYoutubeFeed] = useState<YoutubeFeedResponse>(EMPTY_YOUTUBE_FEED);
  const [youtubeLoading, setYoutubeLoading] = useState(true);
  const [selectedVideoId, setSelectedVideoId] = useState('');
  const youtube = LIVE_STREAM_CONFIG.youtube;
  const facebook = LIVE_STREAM_CONFIG.facebook;

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      fetch('/api/youtube')
        .then(async response => {
          if (!response.ok) {
            throw new Error('YouTube feed failed');
          }
          return (await response.json()) as YoutubeFeedResponse;
        })
        .then(feed => {
          if (!cancelled) setYoutubeFeed(feed);
        })
        .catch(() => {
          if (!cancelled) setYoutubeFeed(EMPTY_YOUTUBE_FEED);
        })
        .finally(() => {
          if (!cancelled) setYoutubeLoading(false);
        });
    };

    load();
    const timer = window.setInterval(load, 120_000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  const liveVideoId = youtubeFeed.liveVideoId?.trim() || youtube.liveVideoId.trim();
  const youtubeIsLive = youtubeFeed.liveStatus === 'live' && Boolean(liveVideoId);
  const youtubeVideoId = selectedVideoId || (youtubeIsLive ? liveVideoId : '');
  const youtubeMessages: PastMessage[] = youtubeFeed.pastMessages.length
    ? youtubeFeed.pastMessages
    : LIVE_STREAM_CONFIG.pastMessages.filter(message => message.platform === 'youtube');
  const facebookMessages = LIVE_STREAM_CONFIG.pastMessages.filter(
    message => message.platform === 'facebook'
  );
  const archiveMessages = platform === 'youtube' ? youtubeMessages : facebookMessages;

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <SectionEyebrow>Watch Live</SectionEyebrow>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Watch Our Services
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-[0.95rem] leading-relaxed">
              Join us online for powerful worship, biblical teaching, and life-transforming
              messages.
            </p>
          </div>

          <PlatformSelector value={platform} onChange={setPlatform} />

          {platform === 'youtube' && !youtubeLoading ? (
            <p
              className={`mt-5 flex items-center justify-center gap-2 text-sm font-semibold ${
                youtubeIsLive ? 'text-[#006B3F]' : 'text-red-600'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${youtubeIsLive ? 'bg-[#006B3F]' : 'bg-red-600'}`}
                aria-hidden="true"
              />
              {youtubeIsLive
                ? 'Currently streaming'
                : 'ICGC Living Word Temple is currently not streaming'}
            </p>
          ) : null}

          {platform === 'youtube' && (youtubeLoading || youtubeIsLive || selectedVideoId) ? (
            <div
              id="watch-player"
              className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-900 mt-5 mb-6"
            >
              <YouTubePlayer videoId={youtubeVideoId} loading={youtubeLoading} />
            </div>
          ) : null}

          {platform === 'facebook' ? (
            <>
              <div
                id="watch-player"
                className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-900 mt-6 mb-5"
              >
                <FacebookPlayer
                  videoUrl={facebook.liveVideoUrl.trim()}
                  pageUrl={facebook.pageUrl}
                />
              </div>
              <div className="mb-10 flex justify-center">
                <a
                  href={facebook.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 text-[#006B3F] hover:text-emerald-800 font-semibold text-sm min-h-10"
                >
                  Watch on Facebook
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </>
          ) : null}
        </div>
      </section>

      <MessageArchive
        platform={platform}
        messages={archiveMessages}
        loading={platform === 'youtube' && youtubeLoading}
        onSelectMessage={message => {
          if (message.platform !== 'youtube') return;
          setSelectedVideoId(message.videoId);
          document.getElementById('watch-player')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <section id="service-times" className="scroll-mt-24 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl py-7 px-4 md:p-8 border border-slate-100">
            <SectionEyebrow>Gatherings</SectionEyebrow>
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-tight">
              Service Times
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICE_TIMES.map(service => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-emerald-600 rounded-md p-2">
                      <Clock className="w-4 h-4 text-[#FFD700]" />
                    </div>
                    <h3 className="font-semibold text-sm">{service.title}</h3>
                  </div>
                  <p className="text-emerald-700 font-semibold text-sm">{service.day}</p>
                  <p className="text-slate-600 mb-1.5 text-sm">{service.time}</p>
                  <p className="text-sm text-slate-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveService;
