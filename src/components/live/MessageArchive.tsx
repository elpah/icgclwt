import { ExternalLink } from 'lucide-react';
import SectionEyebrow from '@/components/SectionEyebrow';
import MessageCard from '@/components/live/MessageCard';
import {
  LIVE_STREAM_CONFIG,
  getYouTubePlaylistUrl,
  type LivePlatform,
  type PastMessage,
} from '@/data/liveStreamConfig';

interface MessageArchiveProps {
  platform: LivePlatform;
  messages: PastMessage[];
  loading?: boolean;
  onSelectMessage?: (message: PastMessage) => void;
}

const MessageArchive = ({
  platform,
  messages,
  loading = false,
  onSelectMessage,
}: MessageArchiveProps) => {
  const playlistId = LIVE_STREAM_CONFIG.youtube.archivePlaylistId.trim();
  const youtubeHref = playlistId
    ? getYouTubePlaylistUrl(playlistId)
    : LIVE_STREAM_CONFIG.youtube.channelUrl;
  const archiveHref = platform === 'youtube' ? youtubeHref : LIVE_STREAM_CONFIG.facebook.pageUrl;
  const archiveLabel = platform === 'youtube' ? 'Watch on YouTube' : 'Watch on Facebook';

  return (
    <section id="past-messages" className="scroll-mt-24 pt-6 md:pt-8 pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <SectionEyebrow>Archive</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
            Past Messages
          </h2>
          <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
            Catch up on previous services and teachings.
          </p>
        </div>

        {loading ? (
          <div className="max-w-2xl mx-auto text-center bg-slate-50 rounded-2xl border border-slate-100 px-6 py-10">
            <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
              Loading past messages.
            </p>
          </div>
        ) : messages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {messages.map(message => (
              <MessageCard
                key={message.id}
                message={message}
                onSelect={platform === 'youtube' ? onSelectMessage : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center bg-slate-50 rounded-2xl border border-slate-100 px-6 py-10">
            <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed mb-6">
              Past messages will be listed here. Until then, you can watch previous services on{' '}
              {platform === 'youtube' ? 'our YouTube channel.' : 'our Facebook page.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={archiveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 bg-[#006B3F] hover:bg-emerald-800 text-white px-5 py-2.5 rounded-full font-semibold text-sm min-h-11"
              >
                {archiveLabel}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessageArchive;
