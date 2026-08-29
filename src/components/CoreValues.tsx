import { CORE_VALUES } from '@/data/coreValuesData';
import { motion } from 'framer-motion';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition, viewportOnce } from '@/lib/motion';

const CoreValues = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
            <SectionEyebrow>Our Values</SectionEyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={staggerTransition(1, 0.1, 0)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight"
          >
            What We Stand For
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={staggerTransition(2, 0.1, 0)}
            className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed max-w-2xl mx-auto"
          >
            Our core values guide everything we do as a church family
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={staggerTransition(index, 0.08, 0.05)}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div
                className={`w-11 h-11 bg-linear-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <value.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
