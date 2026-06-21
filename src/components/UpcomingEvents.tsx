import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventCard from '@/components/EventCard';

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-[#FFD700]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#FFD700]/20 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4"
            >
              Events
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            >
              What's Happening
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="text-slate-600 text-lg"
            >
              Join our upcoming activities and special events
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
            whileHover={{ x: 5 }}
            onClick={() => navigate('/events')}
            className="mt-4 md:mt-0 text-[#006B3F] font-bold flex items-center"
          >
            View All Events
            <ChevronRight className="ml-1 w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: easeOutExpo,
              }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
