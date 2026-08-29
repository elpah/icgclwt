import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import GalleryFilters from './GalleryFilters';
import GalleryImageCard from './GalleryImage';
import ImageLightbox from './ImageLightbox';
import {
  GALLERY_FILTERS,
  imageMatchesFilter,
  type GalleryFilter,
  type GalleryImage,
} from '@/data/galleryData';
import { cn } from '@/lib/utils';
import { staggerTransition, viewportOnce } from '@/lib/motion';

interface ImageGalleryProps {
  images: GalleryImage[];
  showFilters?: boolean;
  layout?: 'masonry' | 'grid';
  className?: string;
}

const ImageGallery = ({
  images,
  showFilters = false,
  layout = 'masonry',
  className,
}: ImageGalleryProps) => {
  const [filter, setFilter] = useState<GalleryFilter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const availableFilters = useMemo(() => {
    return GALLERY_FILTERS.filter(
      item => item === 'All' || images.some(image => imageMatchesFilter(image, item))
    );
  }, [images]);

  const visibleImages = useMemo(
    () => images.filter(image => imageMatchesFilter(image, filter)),
    [filter, images]
  );

  const handleFilterChange = (next: GalleryFilter) => {
    setFilter(next);
    setActiveIndex(null);
  };

  return (
    <div className={className}>
      {showFilters && availableFilters.length > 1 && (
        <GalleryFilters filters={availableFilters} active={filter} onChange={handleFilterChange} />
      )}

      {visibleImages.length === 0 ? (
        <p className="text-center text-slate-500 text-sm py-12">No photos in this category yet.</p>
      ) : (
        <div
          className={cn(
            layout === 'masonry'
              ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3'
              : 'grid grid-cols-2 md:grid-cols-3 gap-3'
          )}
        >
          {visibleImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={staggerTransition(index % 8, 0.05, 0.02)}
              className={layout === 'masonry' ? 'mb-3 break-inside-avoid' : 'relative'}
            >
              <GalleryImageCard
                image={image}
                layout={layout}
                onSelect={() => setActiveIndex(index)}
              />
            </motion.div>
          ))}
        </div>
      )}

      <ImageLightbox
        images={visibleImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
};

export default ImageGallery;
