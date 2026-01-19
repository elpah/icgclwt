import { Clock, Calendar, MapPin, ArrowRight, Users, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import EventCard from '@/components/EventCard';

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const event = UPCOMING_EVENTS.find(e => e.id === id);

  if (!event) {
    return <div className="p-8">Event not found</div>;
  }

  const relatedEvents = UPCOMING_EVENTS.filter(e => e.id !== id);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-125 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700] mb-4">
                <span className="text-[#006B3F] text-sm font-bold uppercase tracking-wider">
                  {event.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{event.title}</h1>

              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#FFD700]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                  <span>ICGC Living Word Temple</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">About This Event</h2>
              <p className="text-slate-600 text-lg mb-6">{event.desc}</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <Users className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-bold">Capacity</h4>
                  <p>Unlimited seating available</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <Heart className="w-6 h-6 text-green-500 mb-2" />
                  <h4 className="font-bold">Registration</h4>
                  <p>Free entry, no registration required</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div className="bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-3xl p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FFD700] text-[#006B3F] py-4 rounded-2xl font-bold text-center"
              >
                Register Now
              </a>

              <button className="w-full mt-4 bg-white/10 py-4 rounded-2xl flex justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Event
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-br from-[#006B3F] to-emerald-700 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/events')}
          className="bg-[#FFD700] text-[#006B3F] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
        >
          Explore All Events
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>
    </div>
  );
};

export default EventDetailsPage;
