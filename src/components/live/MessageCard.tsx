import { ExternalLink, Play } from 'lucide-react';
import type { PastMessage } from '@/data/liveStreamConfig';
import { getYouTubeThumbnailUrl, getYouTubeWatchUrl } from '@/data/liveStreamConfig';

interface MessageCardProps {
  message: PastMessage;
  onSelect?: (message: PastMessage) => void;
}

const MessageCard = ({ message, onSelect }: MessageCardProps) => {
  const href =
    message.platform === 'youtube' ? getYouTubeWatchUrl(message.videoId) : message.videoUrl;
  const thumbnail = message.platform === 'youtube' ? getYouTubeThumbnailUrl(message.videoId) : '';
  const platformLabel = message.platform === 'youtube' ? 'YouTube' : 'Facebook';
  const playOnSite = Boolean(onSelect) && message.platform === 'youtube';

  const body = (
    <>
      <div className="relative aspect-video bg-slate-900">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#006B3F] to-emerald-800" />
        )}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase text-white">
          {platformLabel}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD700] text-[#006B3F]">
            <Play className="w-5 h-5 fill-current" />
          </span>
        </span>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-semibold tracking-wide uppercase text-[#006B3F] mb-1">
          {message.date}
        </p>
        <h3 className="font-semibold text-slate-900 text-sm md:text-base leading-snug mb-3">
          {message.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006B3F]">
          {playOnSite ? 'Play' : 'Watch'}
          {playOnSite ? null : <ExternalLink className="w-3.5 h-3.5" />}
        </span>
      </div>
    </>
  );

  const className =
    'group block w-full text-left bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer';

  if (playOnSite) {
    return (
      <button type="button" onClick={() => onSelect?.(message)} className={className}>
        {body}
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  );
};

export default MessageCard;
