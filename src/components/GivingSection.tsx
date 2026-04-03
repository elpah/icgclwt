import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const transition = {
  duration: 1.05,
  ease: 'easeInOut' as const,
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GivingSection = () => {
  const moneyNumber = useMemo(() => '0244 000 000', []);

  return (
    <section id="giving" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeScale}
          transition={transition}
          className="bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-10 px-5 md:p-10  text-white">
              <div className="bg-[#FFD700]/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#FFD700]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Partner With Us</h2>
              <p className="text-slate-200 mb-10 leading-relaxed text-lg">
                Your generosity helps us reach people locally and globally with the transforming
                message of Christ. Thank you for your faithful support.
              </p>
              <div className="space-y-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="cursor-pointer w-full bg-linear-to-r from-[#FFD700] to-[#feb200] text-[#006B3F] py-5 rounded-2xl font-bold text-lg hover:shadow-2xl flex items-center justify-center shadow-lg group"
                >
                  Give Online
                  <Heart className="ml-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </motion.button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#006B3F] text-slate-300 font-bold">OR</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-slate-300 text-sm mb-2 font-medium">Mobile Money</div>
                <div className="text-white text-2xl font-bold mb-1">{moneyNumber}</div>
                <div className="text-[#FFD700] text-sm font-bold">ICGC Living Word Temple</div>
              </div>
            </div>
            <div className="relative min-h-125">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=800"
                alt="Giving"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#006B3F] via-[#006B3F]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  transition={{ ...transition, delay: 0.2 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-3xl font-bold text-[#006B3F] mb-1">100+</div>
                  <div className="text-sm text-slate-600 font-medium">Lives Impacted Monthly</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GivingSection;
