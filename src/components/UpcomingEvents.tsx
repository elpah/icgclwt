import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventCard from '@/components/EventCard';
import SectionEyebrow from '@/components/SectionEyebrow';

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
          <div>
            <SectionEyebrow align="left">Events</SectionEyebrow>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              What&apos;s Happening
            </h2>

            <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
              Join our upcoming activities and special events
            </p>
          </div>

          <button
            onClick={() => navigate('/events')}
            className="text-[#006B3F] font-semibold flex items-center text-sm min-h-10"
          >
            View All Events
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {UPCOMING_EVENTS.map(event => (
            <div key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
