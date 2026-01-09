import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  desc: string;
  image: string;
  category: string;
  link: string;
}

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => navigate(`/event-details/${event.id}`)}
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

        <div className="absolute top-4 right-4 bg-[#006B3F] rounded-full px-3 py-1.5">
          <p className="text-xs font-bold text-white">{event.category}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#006B3F] transition-colors">
          {event.title}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {event.desc}
        </p>

        <span className="text-[#006B3F] text-sm font-bold flex items-center group-hover:text-[#FFD700] transition-colors">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;
