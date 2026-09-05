import type { LivePlatform } from '@/data/liveStreamConfig';
import { cn } from '@/lib/utils';

const PLATFORMS: { id: LivePlatform; label: string }[] = [
  { id: 'youtube', label: 'YouTube' },
  { id: 'facebook', label: 'Facebook' },
];

interface PlatformSelectorProps {
  value: LivePlatform;
  onChange: (platform: LivePlatform) => void;
}

const PlatformSelector = ({ value, onChange }: PlatformSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#006B3F]">
        Watch on
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PLATFORMS.map(({ id, label }) => {
          const selected = value === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              aria-pressed={selected}
              className={cn(
                'cursor-pointer inline-flex items-center rounded-full px-5 py-2.5 min-h-11 text-sm font-semibold transition-colors duration-300',
                selected
                  ? 'bg-[#FFD700] text-[#006B3F] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformSelector;
