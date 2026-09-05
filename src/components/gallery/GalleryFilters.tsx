import { cn } from '@/lib/utils';
import type { GalleryFilter } from '@/data/galleryData';

interface GalleryFiltersProps {
  filters: GalleryFilter[];
  active: GalleryFilter;
  counts: Partial<Record<GalleryFilter, number>>;
  onChange: (filter: GalleryFilter) => void;
}

const GalleryFilters = ({ filters, active, counts, onChange }: GalleryFiltersProps) => {
  return (
    <div className="mb-8 md:mb-10">
      <div className="flex justify-center overflow-x-auto pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          role="tablist"
          aria-label="Gallery collections"
          className="flex items-center gap-1 sm:gap-2 border-b border-slate-200"
        >
          {filters.map(filter => {
            const isActive = filter === active;
            const count = counts[filter];

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(filter)}
                className={cn(
                  'cursor-pointer relative shrink-0 px-3.5 sm:px-4 py-2.5 text-sm font-semibold min-h-10 transition-colors duration-300',
                  isActive ? 'text-[#006B3F]' : 'text-slate-500 hover:text-[#006B3F]'
                )}
              >
                {filter}
                {typeof count === 'number' && (
                  <span
                    className={cn(
                      'ml-1.5 text-xs font-medium',
                      isActive ? 'text-[#B8860B]' : 'text-slate-400'
                    )}
                  >
                    {count}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-2 right-2 -bottom-px h-0.5 rounded-full transition-colors duration-300',
                    isActive ? 'bg-[#FFD700]' : 'bg-transparent'
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
