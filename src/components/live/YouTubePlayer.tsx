import { getYouTubeEmbedUrl } from '@/data/liveStreamConfig';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  loading?: boolean;
}

const YouTubePlayer = ({
  videoId,
  title = 'Church service on YouTube',
  loading = false,
}: YouTubePlayerProps) => {
  const embedSrc = videoId ? getYouTubeEmbedUrl(videoId) : '';

  if (loading && !embedSrc) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white text-lg font-semibold mb-2">Checking YouTube</p>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed">
          Looking for a live stream from ICGC Living Word Temple.
        </p>
      </div>
    );
  }

  if (!embedSrc) {
    return null;
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
