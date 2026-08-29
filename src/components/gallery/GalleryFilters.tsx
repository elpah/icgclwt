import { cn } from '@/lib/utils';
import type { GalleryFilter } from '@/data/galleryData';

interface GalleryFiltersProps {
  filters: GalleryFilter[];
  active: GalleryFilter;
  onChange: (filter: GalleryFilter) => void;
}

const GalleryFilters = ({ filters, active, onChange }: GalleryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
      {filters.map(filter => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={cn(
              'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold min-h-10 transition-colors duration-300',
              isActive
                ? 'bg-[#006B3F] text-[#FFD700]'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-[#FFD700] hover:text-[#006B3F]'
            )}
            aria-pressed={isActive}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryFilters;
