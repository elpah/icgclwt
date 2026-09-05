import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  desc: string;
  image: string;
  category: string;
  link: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/event-details/${event.id}`)}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-slate-100"
    >
      <div className="h-44 relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <p className="text-[11px] font-semibold text-white tracking-wide">{event.date}</p>
        </div>

        {event.time && (
          <div className="absolute bottom-3 right-3 flex items-center text-[#FFD700]">
            <Clock className="w-3 h-3 mr-1" />
            <p className="text-[11px] font-semibold">{event.time}</p>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFD700]">
            {event.category}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-[#006B3F] transition-colors duration-300">
          {event.title}
        </h3>

        <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">{event.desc}</p>

        <span className="text-[#006B3F] text-sm font-semibold flex items-center">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </div>
    </div>
  );
};

export default EventCard;
