import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition } from '@/lib/motion';

const SalvationCta = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
          <SectionEyebrow>A New Beginning</SectionEyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={staggerTransition(1, 0.1, 0)}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4"
        >
          Have You Decided to Follow Jesus?
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={staggerTransition(2, 0.1, 0)}
          className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed mb-7"
        >
          You don&apos;t have to take this journey alone. If you&apos;re ready to accept Jesus
          Christ as your Lord and Saviour, we&apos;d love to pray with you and help you take your
          next step in faith.
        </motion.p>

        <motion.button
          {...fadeUp}
          transition={staggerTransition(3, 0.1, 0)}
          type="button"
          onClick={() => navigate('/give-your-life-to-christ')}
          className="cursor-pointer bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-7 py-3 rounded-full font-semibold text-sm md:text-base min-h-12 inline-flex items-center justify-center transition-colors duration-300"
        >
          I Want to Follow Jesus
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default SalvationCta;
