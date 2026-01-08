import { motion } from 'framer-motion';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const UPCOMING_EVENTS = [
    {
      title: 'Greater Works 2024',
      date: 'July 22 - 26',
      time: '5:00 PM Daily',
      desc: 'Join us for our annual spiritual convocation of power and grace.',
      image:
        'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Youth Camp: Elevate',
      date: 'August 15 - 18',
      time: 'Residential',
      desc: 'Empowering the next generation for impactful Christian living.',
      image:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Choir Concert',
      date: 'Sept 10',
      time: '4:00 PM',
      desc: 'A night of soul-lifting melodies and deep worship.',
      image:
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    },
  ];
  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-[#FFD700]/5 to-transparent" />

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
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD700]/20 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4">
              Events
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What's Happening</h2>
            <p className="text-slate-600 text-lg">
              Join our upcoming activities and special events
            </p>
          </div>
          <motion.a
            whileHover={{
              x: 5,
            }}
            href="#"
            className="mt-4 md:mt-0 text-[#006B3F] font-bold flex items-center group"
          >
            View All Events
            <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
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
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-slate-100 hover:border-[#FFD700]/50"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                  <p className="text-xs font-bold text-[#006B3F] uppercase tracking-wider">
                    {event.date}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#FFD700] rounded-full px-3 py-1.5">
                  <p className="text-xs font-bold text-[#006B3F] flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#006B3F] transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>

                <button className="text-[#006B3F] text-sm font-bold flex items-center group-hover:text-[#FFD700] transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
