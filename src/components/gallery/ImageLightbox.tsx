import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/data/galleryData';
import { easeOutExpo } from '@/lib/motion';

interface ImageLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const ImageLightbox = ({ images, index, onClose, onIndexChange }: ImageLightboxProps) => {
  const isOpen = index !== null && images.length > 0;
  const currentIndex = index ?? 0;
  const current = isOpen ? images[currentIndex] : null;
  const hasMany = images.length > 1;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (!hasMany) return;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onIndexChange((currentIndex + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [currentIndex, hasMany, images.length, isOpen, onClose, onIndexChange]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title || current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeOutExpo }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-3 sm:p-6"
          onClick={event => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="cursor-pointer absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-md bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {hasMany && (
            <>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation();
                  onIndexChange((currentIndex - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                className="cursor-pointer absolute left-2 sm:left-5 z-30 w-11 h-11 rounded-md bg-[#006B3F] text-[#FFD700] hover:bg-emerald-800 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation();
                  onIndexChange((currentIndex + 1) % images.length);
                }}
                aria-label="Next image"
                className="cursor-pointer absolute right-2 sm:right-5 z-30 w-11 h-11 rounded-md bg-[#006B3F] text-[#FFD700] hover:bg-emerald-800 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <figure
            className="relative z-10 max-w-5xl w-full max-h-[82vh] flex flex-col items-center"
            onClick={event => event.stopPropagation()}
          >
            <motion.img
              key={current.id}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.28, ease: easeOutExpo }}
              className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-lg"
            />
            {(current.title || current.date) && (
              <figcaption className="mt-4 text-center text-white px-4">
                {current.title && (
                  <p className="font-semibold text-sm md:text-base">{current.title}</p>
                )}
                {current.date && (
                  <p className="text-slate-300 text-xs md:text-sm mt-0.5">{current.date}</p>
                )}
              </figcaption>
            )}
          </figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ImageLightbox;
