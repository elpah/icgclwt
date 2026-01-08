import { CORE_VALUES } from '@/data/coreValuesData';
import { motion } from 'framer-motion';

const CoreValues = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What We Stand For</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our core values guide everything we do as a church family
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
