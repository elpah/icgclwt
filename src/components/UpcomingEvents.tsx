import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventCard from '@/components/EventCard';

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-[#FFD700]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => navigate('/events')}
            className="mt-4 md:mt-0 text-[#006B3F] font-bold flex items-center group"
          >
            View All Events
            <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
