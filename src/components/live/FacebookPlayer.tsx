import { ExternalLink, Facebook } from 'lucide-react';
import { getFacebookEmbedUrl } from '@/data/liveStreamConfig';

interface FacebookPlayerProps {
  videoUrl: string;
  pageUrl: string;
  title?: string;
}

const FacebookPlayer = ({
  videoUrl,
  pageUrl,
  title = 'Church service on Facebook',
}: FacebookPlayerProps) => {
  if (!videoUrl) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <Facebook className="w-10 h-10 text-[#FFD700] mb-4" />
        <p className="text-white text-lg font-semibold mb-2">Watch us live on Facebook</p>
        <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
          A Facebook livestream will appear here once a service video is configured.
        </p>
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-5 py-2.5 rounded-full font-semibold text-sm min-h-11"
        >
          Watch on Facebook
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={getFacebookEmbedUrl(videoUrl)}
      title={title}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full border-0"
    />
  );
};

export default FacebookPlayer;
