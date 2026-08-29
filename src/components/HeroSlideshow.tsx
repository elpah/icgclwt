import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { easeOutExpo } from '@/lib/motion';

const slideModules = import.meta.glob<{ default: string }>(
  '../../public/images/cover_images_smaller/*.{jpg,jpeg,png,webp}',
  { eager: true, query: '?url', import: 'default' }
);

const SLIDES = Object.entries(slideModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `A moment from Living Word Temple, photo ${index + 1}`,
  }));

const INTERVAL_MS = 2450;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: { x: 0 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
  }),
};

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState<string[]>([]);
  const reduceMotion = useReducedMotion();

  const slides = useMemo(
    () => SLIDES.filter(slide => !failed.includes(slide.src)),
    [failed]
  );

  const goTo = useCallback(
    (next: number) => {
      if (slides.length === 0) return;
      const target = (next + slides.length) % slides.length;
      const forwardDist = (target - index + slides.length) % slides.length;
      const backwardDist = (index - target + slides.length) % slides.length;
      setDirection(forwardDist <= backwardDist ? 1 : -1);
      setIndex(target);
    },
    [index, slides.length]
  );

  useEffect(() => {
    if (index >= slides.length) setIndex(0);
  }, [index, slides.length]);

  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setDirection(1);
      setIndex(current => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  useEffect(() => {
    if (slides.length < 2) return;
    const next = new Image();
    next.src = slides[(index + 1) % slides.length].src;
  }, [index, slides]);

  if (slides.length === 0) return null;

  const current = slides[index] ?? slides[0];

  return (
    <div
      className="relative z-0 overflow-hidden rounded-2xl shadow-lg w-full aspect-[3/2]"
      aria-roledescription="carousel"
      aria-label="Moments from Living Word Temple"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={2040}
          height={1360}
          loading="eager"
          decoding="async"
          custom={direction}
          variants={reduceMotion ? undefined : slideVariants}
          initial={reduceMotion ? false : 'enter'}
          animate={reduceMotion ? undefined : 'center'}
          exit={reduceMotion ? undefined : 'exit'}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          onError={() =>
            setFailed(failedSrc =>
              failedSrc.includes(current.src) ? failedSrc : [...failedSrc, current.src]
            )
          }
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 z-[2] rounded-2xl bg-black/10" />

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-1.5">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show photo ${slideIndex + 1} of ${slides.length}`}
              aria-current={slideIndex === index ? true : undefined}
              onClick={() => goTo(slideIndex)}
              className={cn(
                'cursor-pointer h-2 rounded-full transition-all duration-300',
                slideIndex === index
                  ? 'w-5 bg-[#FFD700]'
                  : 'w-2 bg-white/70 hover:bg-white'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlideshow;
