import { Clock, Calendar, ArrowRight, Sparkles, Video } from 'lucide-react';
import { motion } from 'framer-motion';

import MeetThePastor from '@/components/MeetThePastor';
import About from './About';
import QuoteSection from '@/components/QuoteSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import GivingSection from '@/components/GivingSection';
import ContactSection from '@/components/ContactSection';
import { useNavigate } from 'react-router-dom';
import JoinMinistriesSection from '@/components/MinistrySection/JoinMinistriesSection';

// const PRIMARY_GREEN = '#006B3F';
// const ACCENT_GOLD = '#FFD700';
// const SECONDARY_GOLD = '#FDB813';

const SERVICE_TIMES = [
  {
    day: 'Sundays',
    time: '7:30 AM - 10:00 AM',
    title: 'First Service',
  },
  {
    day: 'Sundays',
    time: '10:30 AM - 1:00 PM',
    title: 'Second Service',
  },
  {
    day: 'Wednesdays',
    time: '6:00 PM - 8:00 PM',
    title: 'Mid-week Service',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-900 via-[#006B3F] to-emerald-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1920"
            alt="Church Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-white"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-[#FFD700]/20 backdrop-blur-sm border border-[#FFD700]/30"
              >
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#FFD700] text-sm font-bold tracking-wider">
                  WELCOME HOME
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95]"
              >
                Experience
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700] animate-pulse">
                  God's Power
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
              >
                A message-centered, mission-oriented community where lives are transformed and
                leaders are raised.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#FFD700]/50 transition-all flex items-center justify-center"
                >
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => {
                    navigate('/live-service');
                  }}
                  className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  <Video className="mr-2 w-5 h-5" />
                  Watch Services
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800"
                    alt="Worship"
                    className="w-full h-125 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-8 -right-8 bg-linear-to-br from-[#FFD700] to-[#FDB813] rounded-2xl p-6 shadow-2xl z-20 w-64"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-[#006B3F] font-bold leading-relaxed">
                    Raising leaders, shaping vision, influencing society through Christ
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl z-20 w-48"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-[#006B3F]/10 rounded-xl p-2">
                      <Calendar className="w-5 h-5 text-[#006B3F]" />
                    </div>
                    <div className="text-2xl font-bold text-[#006B3F]">3x</div>
                  </div>
                  <div className="text-sm text-slate-600 font-bold">Weekly Services</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1.5 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* <LiveServices /> */}

      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #006B3F 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Worship With Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Experience vibrant worship, powerful teaching, and genuine community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_TIMES.map((service, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative bg-linear-to-br from-white to-slate-50 p-8 rounded-3xl border-2 border-slate-100 hover:border-[#006B3F]/30 hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#006B3F]/0 to-[#FFD700]/0 group-hover:from-[#006B3F]/5 group-hover:to-[#FFD700]/5 transition-all" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-linear-to-br from-[#006B3F] to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <Clock className="w-8 h-8 text-[#FFD700]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                  <div className="inline-block px-3 py-1 bg-[#006B3F]/10 rounded-full mb-4">
                    <p className="text-[#006B3F] font-bold text-sm">{service.day}</p>
                  </div>
                  <p className="text-slate-600 text-lg font-semibold">{service.time}</p>

                  <div className="mt-6 pt-6 border-t border-slate-200 group-hover:border-[#FFD700]/50 transition-all">
                    <button className="text-[#006B3F] font-bold text-sm flex items-center group-hover:text-[#FFD700] transition-colors">
                      Get Directions
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <UpcomingEvents />
      <QuoteSection />
      <JoinMinistriesSection />
      <GivingSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
