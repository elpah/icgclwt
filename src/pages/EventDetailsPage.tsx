import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Users, Heart, Share2, Clock } from 'lucide-react';

import { UPCOMING_EVENTS } from '@/data/upcomingEventsData';
import { CHURCH_ADDRESS, CHURCH_DIGITAL_ADDRESS } from '@/data/churchInfo';
import EventCard from '@/components/EventCard';
import SectionEyebrow from '@/components/SectionEyebrow';
import NotFound from '@/pages/NotFound';

async function copyPageUrl(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = url;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(field);
    return ok;
  }
}

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = useMemo(() => UPCOMING_EVENTS.find(e => e.id === id), [id]);
  const relatedEvents = useMemo(() => UPCOMING_EVENTS.filter(e => e.id !== id), [id]);
  const [shareLabel, setShareLabel] = useState('Share Event');

  const handleShare = useCallback(async () => {
    if (!event) return;

    const url = window.location.href;
    const shareData = {
      title: event.title,
      text: `${event.title}, ${event.date} at ICGC Living Word Temple`,
      url,
    };

    try {
      if (typeof navigator.share === 'function') {
        await navigator.share(shareData);
        return;
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
    }

    const copied = await copyPageUrl(url);
    setShareLabel(copied ? 'Link copied' : 'Unable to share');
    window.setTimeout(() => setShareLabel('Share Event'), 2000);
  }, [event]);

  if (!event) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div>
              <SectionEyebrow align="left" tone="light">
                {event.category}
              </SectionEyebrow>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FFD700]" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFD700]" />
                  <span>{CHURCH_ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">About This Event</h2>
              <p className="text-slate-600 text-sm md:text-[0.95rem] mb-6 leading-relaxed">{event.desc}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-5">
                  <Users className="w-5 h-5 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-sm">Capacity</h4>
                  <p className="text-slate-600 text-sm">Unlimited seating available</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <Heart className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-semibold text-sm">Registration</h4>
                  <p className="text-slate-600 text-sm">Free entry, no registration required</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-5">Event Details</h3>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 mt-0.5 text-[#FFD700] shrink-0" />
                  <span>{event.date}</span>
                </li>
                {event.time && (
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 mt-0.5 text-[#FFD700] shrink-0" />
                    <span>{event.time}</span>
                  </li>
                )}
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#FFD700] shrink-0" />
                  <span>
                    {CHURCH_ADDRESS}
                    <br />
                    Digital address: {CHURCH_DIGITAL_ADDRESS}
                  </span>
                </li>
              </ul>

              <button
                type="button"
                onClick={handleShare}
                className="cursor-pointer w-full bg-[#FFD700] text-[#006B3F] py-3 rounded-full font-semibold text-sm min-h-12 inline-flex items-center justify-center gap-2 hover:shadow-md transition-shadow duration-300"
              >
                <Share2 className="w-4 h-4" />
                {shareLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
      {relatedEvents.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionEyebrow align="left">More to Explore</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Related Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedEvents.map(related => (
                <EventCard key={related.id} event={related} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-12 md:py-14 bg-linear-to-br from-[#006B3F] to-emerald-700 text-center">
        <button
          onClick={() => navigate('/events')}
          className="bg-[#FFD700] text-[#006B3F] px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 min-h-12 text-sm"
        >
          Explore All Events
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

export default EventDetailsPage;
