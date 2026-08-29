import { cn } from '@/lib/utils';
import type { GalleryImage } from '@/data/galleryData';

interface GalleryImageCardProps {
  image: GalleryImage;
  layout: 'masonry' | 'grid';
  onSelect: () => void;
}

const GalleryImageCard = ({ image, layout, onSelect }: GalleryImageCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 text-left w-full',
        layout === 'masonry' ? 'break-inside-avoid' : 'h-36 md:h-40'
      )}
      aria-label={`View ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          'w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]',
          layout === 'masonry' ? 'h-auto' : 'h-full'
        )}
      />
      <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
    </button>
  );
};

export default GalleryImageCard;
