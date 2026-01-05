import { motion } from 'framer-motion';
import { MINISTRIES_DATA } from '../data/MinistriesData';

const Ministries = () => {
  return (
    <section id="ministries" className="py-24 bg-gradient-to-br from-slate-50 to-white">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Ministries</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover a place where you can grow and serve
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MINISTRIES_DATA.map((min, idx) => (
            <motion.div
              key={idx}
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
              transition={{
                delay: idx * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              // onClick={() => handleMinistryClick(min.id)}
              className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center border-2 border-slate-100 hover:border-[#FFD700]/50 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${min.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}
              >
                <min.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-slate-800 text-center text-sm leading-tight">
                {min.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
