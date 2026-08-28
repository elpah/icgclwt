import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition, viewportOnce } from '@/lib/motion';

const MONEY_NUMBER = '024 595 3629';

const GivingSection = () => {
  return (
    <section id="giving" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
              <SectionEyebrow align="left">Giving</SectionEyebrow>
            </motion.div>

            <motion.h2
              {...fadeUp}
              transition={staggerTransition(1, 0.1, 0)}
              className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-slate-900 tracking-tight leading-tight mb-4"
            >
              Partner With Us
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={staggerTransition(2, 0.1, 0)}
              className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed max-w-xl mb-7"
            >
              Your generosity helps us reach people locally and globally with the transforming
              message of Christ. Thank you for your faithful support.
            </motion.p>

            <motion.button
              {...fadeUp}
              transition={staggerTransition(3, 0.1, 0)}
              className="cursor-pointer w-full sm:w-auto bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-8 py-3 rounded-full font-semibold text-sm md:text-base min-h-12 inline-flex items-center justify-center transition-colors duration-300"
            >
              Give Online
            </motion.button>

            <motion.div
              {...fadeUp}
              transition={staggerTransition(4, 0.1, 0)}
              className="mt-8 pt-6 border-t border-slate-200 max-w-xl"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#006B3F] mb-2">
                Mobile Money
              </p>
              <p className="text-2xl md:text-[1.65rem] font-semibold text-slate-900 tracking-wide tabular-nums">
                {MONEY_NUMBER}
              </p>
              <p className="text-sm text-slate-500 mt-1">ICGC Living Word Temple</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              <div
                className="hidden lg:block absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#FFD700]"
                aria-hidden="true"
              />
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=800"
                alt="Giving"
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-72 lg:h-[22rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GivingSection;
