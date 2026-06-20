import { CORE_VALUES } from "@/data/coreValuesData";
import { motion } from "framer-motion";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const CoreValues = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="inline-block px-4 py-2 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4"
          >
            Our Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            What We Stand For
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
            className="text-slate-600 text-md md:text-lg max-w-2xl mx-auto"
          >
            Our core values guide everything we do as a church family
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: easeOutExpo,
              }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border-2 border-slate-100"
            >
              <div
                className={`w-14 h-14 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-md md:text-lg text-slate-600 leading-relaxed">
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
