import { useMemo } from 'react';
import { Calendar } from 'lucide-react';

import EventCard from '@/components/EventCard';
import SectionEyebrow from '@/components/SectionEyebrow';
import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';

const AllEventsPage = () => {
  const events = UPCOMING_EVENTS;

  const categoryCount = useMemo(() => {
    return new Set(events.map(e => e.category)).size;
  }, [events]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <SectionEyebrow tone="light">Upcoming Events</SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              Join Us for
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                Amazing Events
              </span>
            </h1>

            <p className="text-sm md:text-[0.95rem] text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Experience powerful worship, transformative teaching, and life-changing encounters
              with God at our upcoming events and conferences.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm mb-10 border border-slate-100">
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#006B3F] mb-1">{events.length}</div>
                <div className="text-slate-600 text-[11px] md:text-sm font-medium leading-snug">Upcoming Events</div>
              </div>

              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#006B3F] mb-1">{categoryCount}</div>
                <div className="text-slate-600 text-[11px] md:text-sm font-medium leading-snug">Event Categories</div>
              </div>

              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#006B3F] mb-1">Free</div>
                <div className="text-slate-600 text-[11px] md:text-sm font-medium leading-snug">Open to All</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {events.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm max-w-xl mx-auto border border-slate-100">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Events Scheduled</h3>
                <p className="text-slate-600 text-sm">
                  Check back soon for upcoming events and conferences.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllEventsPage;
