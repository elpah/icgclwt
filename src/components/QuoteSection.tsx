import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { fadeUp, staggerTransition } from '@/lib/motion';

const QuoteSection = () => {
  return (
    <section className="py-14 md:py-16 bg-linear-to-r from-[#006B3F] via-emerald-700 to-[#006B3F] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          {...fadeUp}
          transition={staggerTransition(0, 0.1, 0)}
          className="bg-[#FFD700]/20 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <BookOpen className="w-7 h-7 text-[#FFD700]" />
        </motion.div>

        <motion.blockquote
          {...fadeUp}
          transition={staggerTransition(1, 0.1, 0)}
          className="text-2xl md:text-4xl font-serif italic mb-5 leading-snug"
        >
          "But the path of the just is as the shining light, that shineth more and more unto the
          perfect day."
        </motion.blockquote>

        <motion.cite
          {...fadeUp}
          transition={staggerTransition(2, 0.1, 0)}
          className="text-[#FFD700] font-semibold text-base md:text-lg block not-italic"
        >
          Proverbs 4:18 (KJV)
        </motion.cite>
      </div>
    </section>
  );
};

export default QuoteSection;
