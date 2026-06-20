import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const QuoteSection = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#006B3F] via-emerald-700 to-[#006B3F] text-white relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full -mr-48 -mt-48"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="bg-[#FFD700]/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <BookOpen className="w-10 h-10 text-[#FFD700]" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
            className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight"
          >
            "But the path of the just is as the shining light, that shineth more
            and more unto the perfect day."
          </motion.blockquote>

          <motion.cite
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
            className="text-[#FFD700] font-bold text-xl block not-italic"
          >
            Proverbs 4:18 (KJV)
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
