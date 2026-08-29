import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventCard from '@/components/EventCard';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition, viewportOnce } from '@/lib/motion';

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
          <div>
            <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
              <SectionEyebrow align="left">Events</SectionEyebrow>
            </motion.div>

            <motion.h2
              {...fadeUp}
              transition={staggerTransition(1, 0.1, 0)}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 tracking-tight"
            >
              What's Happening
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={staggerTransition(2, 0.1, 0)}
              className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed"
            >
              Join our upcoming activities and special events
            </motion.p>
          </div>

          <motion.button
            {...fadeUp}
            transition={staggerTransition(3, 0.1, 0)}
            onClick={() => navigate('/events')}
            className="text-[#006B3F] font-semibold flex items-center text-sm min-h-10"
          >
            View All Events
            <ChevronRight className="ml-1 w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {UPCOMING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={staggerTransition(index, 0.08, 0.05)}
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
