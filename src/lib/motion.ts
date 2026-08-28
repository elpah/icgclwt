import type { Transition } from 'framer-motion';

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -8% 0px',
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
} as const;

export const transitionBase: Transition = {
  duration: 0.75,
  ease: easeOutExpo,
};

export const heroTransition = (delay = 0): Transition => ({
  duration: 0.85,
  delay,
  ease: easeOutExpo,
});

export const staggerTransition = (index: number, step = 0.1, base = 0.08): Transition => ({
  duration: 0.7,
  delay: base + index * step,
  ease: easeOutExpo,
});
