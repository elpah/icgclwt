import { cn } from '@/lib/utils';

type Tone = 'green' | 'gold' | 'light';
type Align = 'left' | 'center';

interface SectionEyebrowProps {
  children: React.ReactNode;
  align?: Align;
  tone?: Tone;
  className?: string;
}

const textTone: Record<Tone, string> = {
  green: 'text-[#006B3F]',
  gold: 'text-[#B8860B]',
  light: 'text-[#FFD700]',
};

const SectionEyebrow = ({
  children,
  align = 'center',
  tone = 'green',
  className,
}: SectionEyebrowProps) => {
  const labelClass = cn(
    'text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase',
    textTone[tone]
  );
  const ruleClass = 'h-px w-8 bg-[#FFD700]';

  if (align === 'left') {
    return (
      <div className={cn('flex items-center gap-3 mb-3', className)}>
        <span className={ruleClass} aria-hidden="true" />
        <span className={labelClass}>{children}</span>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center gap-2.5 mb-3', className)}>
      <span className={labelClass}>{children}</span>
      <span className={ruleClass} aria-hidden="true" />
    </div>
  );
};

export default SectionEyebrow;
