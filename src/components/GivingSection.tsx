import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const GivingSection = () => {
  return (
      <section id="giving" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="bg-gradient-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 text-white">
                <div className="bg-[#FFD700]/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-[#FFD700]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Partner With Us
                </h2>
                <p className="text-slate-200 mb-10 leading-relaxed text-lg">
                  Your generosity helps us reach people locally and globally with the transforming
                  message of Christ. Thank you for your faithful support.
                </p>

                <div className="space-y-4 mb-8">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="w-full bg-gradient-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center shadow-lg group"
                  >
                    Give Online
                    <Heart className="ml-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                  </motion.button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-[#006B3F] text-slate-300 font-bold">OR</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-slate-300 text-sm mb-2 font-medium">Mobile Money</div>
                  <div className="text-white text-2xl font-bold mb-1">0244 000 000</div>
                  <div className="text-[#FFD700] text-sm font-bold">ICGC Living Word Temple</div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=800"
                  alt="Giving"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#006B3F] via-[#006B3F]/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 space-y-4">
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
      </section>  )
}

export default GivingSection