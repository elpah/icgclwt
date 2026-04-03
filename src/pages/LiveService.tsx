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

const WHAT_TO_EXPECT = [
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
];

const LiveService = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-600 text-sm font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live Streaming
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Watch Our Services</h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Join us online for powerful worship, biblical teaching, and life-transforming messages
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900 mb-10">
              <iframe
                src="https://www.youtube.com/embed/CVCBKZRJf_8"
                title="Live Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: PlayCircle,
                  title: 'Join Live Service',
                  desc: 'Experience real-time worship and receive fresh word from God',
                  btn: 'Watch Now',
                  style: 'from-[#006B3F] to-emerald-700 text-[#FFD700]',
                },
                {
                  icon: Video,
                  title: 'Past Messages',
                  desc: 'Catch up on previous services and teachings',
                  btn: 'View Archive',
                  style: 'bg-white text-slate-900',
                },
                {
                  icon: Mic2,
                  title: 'Podcast',
                  desc: 'Listen to sermons on the go',
                  btn: 'Subscribe',
                  style: 'bg-white text-slate-900',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl p-8 shadow-lg cursor-pointer group ${
                    card.style.includes('from')
                      ? 'text-white bg-linear-to-br from-[#006B3F] to-emerald-700'
                      : 'bg-white border border-slate-100'
                  }`}
                >
                  <div className="flex justify-between mb-4">
                    <div className="bg-white/20 rounded-xl p-3">
                      <card.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>

                  <p className="mb-4 opacity-80">{card.desc}</p>

                  <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform">
                    {card.btn}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-linear-to-br from-slate-50 to-white rounded-3xl py-8 px-4 md:px-4 md:py-16 border border-slate-100">
              <h3 className="text-3xl font-bold text-center mb-10">Service Times</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SERVICE_TIMES.map(service => (
                  <div
                    key={service.title}
                    className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-600 rounded-xl p-2">
                        <Clock className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <h4 className="font-bold">{service.title}</h4>
                    </div>

                    <p className="text-emerald-700 font-semibold">{service.day}</p>

                    <p className="text-slate-600 mb-2">{service.time}</p>

                    <p className="text-sm text-slate-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">What to Expect</h2>

            <p className="text-slate-600 text-lg">Your first visit with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHAT_TO_EXPECT.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveService;
