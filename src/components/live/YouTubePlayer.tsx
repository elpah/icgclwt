import { ExternalLink, Youtube } from 'lucide-react';
import { getYouTubeEmbedUrl, getYouTubeLiveChannelEmbedUrl } from '@/data/liveStreamConfig';

interface YouTubePlayerProps {
  videoId: string;
  channelId?: string;
  channelUrl: string;
  title?: string;
  loading?: boolean;
}

const YouTubePlayer = ({
  videoId,
  channelId = '',
  channelUrl,
  title = 'Church service on YouTube',
  loading = false,
}: YouTubePlayerProps) => {
  const embedSrc = videoId
    ? getYouTubeEmbedUrl(videoId)
    : channelId
      ? getYouTubeLiveChannelEmbedUrl(channelId)
      : '';

  if (loading && !embedSrc) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white text-lg font-semibold mb-2">Loading service</p>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed">
          Checking YouTube for the latest stream.
        </p>
      </div>
    );
  }

  if (!embedSrc) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <Youtube className="w-10 h-10 text-[#FFD700] mb-4" />
        <p className="text-white text-lg font-semibold mb-2">Watch us on YouTube</p>
        <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
          A YouTube livestream will appear here once a service video is configured.
        </p>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-5 py-2.5 rounded-full font-semibold text-sm min-h-11"
        >
          Open YouTube
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={embedSrc}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default YouTubePlayer;
