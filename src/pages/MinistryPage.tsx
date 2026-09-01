import { useMemo } from 'react';
import { ArrowLeft, Clock, MapPin, Calendar } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { MINISTRIES_DATA, MINISTRY_ID_ALIASES } from '../data/MinistriesData';
import { toGalleryImages } from '@/data/galleryData';
import ImageGallery from '@/components/gallery/ImageGallery';
import NotFound from '@/pages/NotFound';

function whatsappLink(phone: string) {
  const digits = phone.replace(/\D/g, '');
  const international = digits.startsWith('233') ? digits : digits.replace(/^0/, '233');
  return `https://wa.me/${international}`;
}

const MinistryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const canonicalId = id ? (MINISTRY_ID_ALIASES[id] ?? id) : id;

  const ministry = useMemo(
    () => MINISTRIES_DATA.find(min => min.id === canonicalId),
    [canonicalId]
  );
  const galleryImages = useMemo(
    () =>
      ministry
        ? toGalleryImages(ministry.gallery, {
            idPrefix: ministry.id,
            alt: ministry.name,
            title: ministry.name,
            category: 'Ministries',
            ministry: ministry.id,
          })
        : [],
    [ministry]
  );

  if (id && MINISTRY_ID_ALIASES[id]) {
    return <Navigate to={`/ministries/${MINISTRY_ID_ALIASES[id]}`} replace />;
  }

  if (!ministry) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        {ministry.headerImage ? (
          <img
            src={ministry.headerImage}
            alt={ministry.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`absolute inset-0 bg-linear-to-br ${ministry.color}`} />
        )}

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-slate-50" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
            <button
              onClick={() => navigate('/ministries')}
              className="cursor-pointer flex items-center space-x-2 text-white mb-5 hover:text-[#FFD700] transition-colors duration-300 min-h-10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold text-sm">Back to Ministries</span>
            </button>

            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 bg-linear-to-br ${ministry.color} rounded-md flex items-center justify-center shrink-0`}
              >
                <ministry.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                  {ministry.name}
                </h1>
                <p className="text-slate-200 text-sm md:text-[0.95rem]">{ministry.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                About this ministry
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-[0.95rem]">
                {ministry.about}
              </p>
            </div>

            {galleryImages.length > 0 ? (
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Gallery
                </h2>
                <ImageGallery images={galleryImages} layout="grid" />
              </div>
            ) : null}
          </div>

          <div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 lg:sticky lg:top-24">
              {ministry.meetings.length > 0 ? (
                <>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#006B3F]" />
                    Meeting Times
                  </h3>

                  <div className="space-y-3">
                    {ministry.meetings.map(meeting => (
                      <div
                        key={`${meeting.day}-${meeting.time}`}
                        className="pb-3 border-b border-slate-100 last:border-0"
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                          <span className="font-semibold text-slate-900 text-sm">{meeting.day}</span>
                        </div>

                        <div className="text-sm text-slate-600 ml-5">
                          <p>{meeting.time}</p>
                          <p className="flex items-center mt-0.5">
                            <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                            {meeting.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              <div className={ministry.meetings.length > 0 ? 'mt-5 pt-5 border-t border-slate-200' : ''}>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm">Ministry Leader</h4>
                <p className="text-slate-600 text-sm">{ministry.leader}</p>
              </div>

              <a
                href={whatsappLink(ministry.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-5 bg-linear-to-r from-[#006B3F] to-emerald-600 text-white py-3 rounded-full font-semibold text-sm min-h-12 hover:shadow-md transition-shadow duration-300 inline-flex items-center justify-center"
              >
                Contact Ministry Leader
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryPage;
