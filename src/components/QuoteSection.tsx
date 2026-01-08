import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#006B3F] via-emerald-700 to-[#006B3F] text-white relative overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full -mr-48 -mt-48"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="bg-[#FFD700]/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-[#FFD700]" />
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
            "But the path of the just is as the shining light, that shineth more and more unto the
            perfect day."
          </blockquote>
          <cite className="text-[#FFD700] font-bold text-xl block mb-4 not-italic">
            Proverbs 4:18 (KJV)
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
