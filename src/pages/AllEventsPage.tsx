import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import EventCard from '@/components/EventCard';
import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';

const AllEventsPage = () => {
  const events = UPCOMING_EVENTS;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full -mr-48 -mt-48"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 backdrop-blur-sm border border-[#FFD700]/30 text-[#FFD700] text-sm font-bold uppercase tracking-wider mb-6">
              Upcoming Events
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Join Us for
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                Amazing Events
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Experience powerful worship, transformative teaching, and life-changing encounters
              with God at our upcoming events and conferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg mb-16 border-2 border-slate-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#006B3F] mb-2">{events.length}</div>
                <div className="text-slate-600 font-semibold">Upcoming Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#006B3F] mb-2">
                  {new Set(events.map(e => e.category)).size}
                </div>
                <div className="text-slate-600 font-semibold">Event Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#006B3F] mb-2">Free</div>
                <div className="text-slate-600 font-semibold">All Events Open to All</div>
              </div>
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* No Events Message */}
          {events.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="bg-white rounded-3xl p-12 shadow-lg max-w-2xl mx-auto">
                <Calendar className="w-20 h-20 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No Events Scheduled</h3>
                <p className="text-slate-600 mb-8">
                  Check back soon for upcoming events and conferences.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-[3rem] p-12 md:p-16 text-center text-white overflow-hidden relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full -mr-32 -mt-32"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Miss Out!</h2>
              <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive updates about upcoming events, special
                services, and important church announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" border border-gray-300 w-full px-6 py-4 rounded-full text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer w-full sm:w-auto bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AllEventsPage;
