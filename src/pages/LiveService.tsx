import { motion } from 'framer-motion';
import {
  PlayCircle,
  ArrowRight,
  Video,
  Mic2,
  Clock,
  Users,
  Music,
  BookOpen,
  Heart,
} from 'lucide-react';

const LiveServices = () => {
  const SERVICE_TIMES = [
    {
      day: 'Sundays',
      time: '7:30 AM - 10:00 AM',
      title: 'First Service',
      description: 'Early morning worship with powerful preaching and prayer',
    },
    {
      day: 'Sundays',
      time: '10:30 AM - 1:00 PM',
      title: 'Second Service',
      description: 'Main celebration service with full choir and orchestra',
    },
    {
      day: 'Wednesdays',
      time: '6:00 PM - 8:00 PM',
      title: 'Mid-week Service',
      description: 'Bible study, prayer, and fellowship',
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <section className="py-24 bg-white">
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
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 text-sm font-bold uppercase tracking-wider mb-4 flex items-center justify-center space-x-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>Live Streaming</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Watch Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Join us online for powerful worship, biblical teaching, and life-transforming messages
            </p>
          </motion.div>

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
            className="max-w-6xl mx-auto"
          >
            {/* Video Player */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-slate-900 to-slate-800 mb-8">
              <iframe
                width="100%"
                height="100%"

                
                src="https://www.youtube.com/embed/CVCBKZRJf_8"
                title="Live Service"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Call-to-Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-gradient-to-br from-[#006B3F] to-emerald-700 rounded-2xl p-8 text-white shadow-lg cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">LIVE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Join Live Service</h3>
                <p className="text-white/80 mb-4">
                  Experience real-time worship and receive fresh word from God
                </p>
                <div className="flex items-center text-[#FFD700] font-semibold group-hover:translate-x-2 transition-transform">
                  Watch Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-3">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Past Messages</h3>
                <p className="text-slate-600 mb-4">Catch up on previous services and teachings</p>
                <div className="flex items-center text-[#006B3F] font-semibold group-hover:translate-x-2 transition-transform">
                  View Archive <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-3">
                    <Mic2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Podcast</h3>
                <p className="text-slate-600 mb-4">Listen to sermons on the go</p>
                <div className="flex items-center text-[#006B3F] font-semibold group-hover:translate-x-2 transition-transform">
                  Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            </div>

            {/* Service Times */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border-2 border-slate-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Service Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SERVICE_TIMES.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-br from-[#006B3F] to-emerald-600 rounded-xl p-2">
                        <Clock className="w-6 h-6 text-[#FFD700]" />
                      </div>
                      <h4 className="font-bold text-lg text-slate-900">{service.title}</h4>
                    </div>
                    <p className="text-[#006B3F] font-semibold mb-1">{service.day}</p>
                    <p className="text-slate-600 mb-3">{service.time}</p>
                    <p className="text-sm text-slate-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What to Expect</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Your first visit with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Warm Welcome',
                description: 'Our hospitality team will greet you and help you feel at home',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Music,
                title: 'Uplifting Worship',
                description: 'Experience powerful praise and worship led by our talented team',
                color: 'from-purple-500 to-indigo-500',
              },
              {
                icon: BookOpen,
                title: 'Biblical Teaching',
                description: "Receive practical, life-changing messages from God's Word",
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Heart,
                title: 'Genuine Community',
                description: 'Connect with friendly people who care about your spiritual journey',
                color: 'from-red-500 to-pink-500',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
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
                transition={{
                  delay: idx * 0.1,
                }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveServices;
