import { PlayCircle, ArrowRight, Video, Mic2, Clock, Users, Music, BookOpen, Heart } from 'lucide-react';
import SectionEyebrow from '@/components/SectionEyebrow';

const SERVICE_TIMES = [
  {
    day: 'Sundays',
    time: '8:00 AM - 10:30 AM',
    title: 'Sunday Service',
    description: 'Worship with powerful preaching and prayer',
  },
  {
    day: 'Wednesdays',
    time: '6:00 PM - 8:00 PM',
    title: 'Mid-week Service',
    description: 'Bible study, prayer, and fellowship',
  },
];

const WHAT_TO_EXPECT = [
  {
    icon: Users,
    title: 'Warm Welcome',
    description: 'Our hospitality team will greet you and help you feel at home',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Music,
    title: 'Uplifting Worship',
    description: 'Experience powerful praise and worship led by our talented team',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: BookOpen,
    title: 'Biblical Teaching',
    description: "Receive practical, life-changing messages from God's Word",
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Genuine Community',
    description: 'Connect with friendly people who care about your spiritual journey',
    color: 'from-red-500 to-pink-500',
  },
];

const LiveService = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <div className="flex flex-col items-center gap-2.5 mb-3">
              <span className="flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-red-600">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Live Streaming
              </span>
              <span className="h-px w-8 bg-[#FFD700]" aria-hidden="true" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Watch Our Services
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Join us online for powerful worship, biblical teaching, and life-transforming messages
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-slate-900 mb-8">
              <iframe
                src="https://www.youtube.com/embed/CVCBKZRJf_8"
                title="Live Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: PlayCircle,
                  title: 'Join Live Service',
                  desc: 'Experience real-time worship and receive fresh word from God',
                  btn: 'Watch Now',
                  featured: true,
                },
                {
                  icon: Video,
                  title: 'Past Messages',
                  desc: 'Catch up on previous services and teachings',
                  btn: 'View Archive',
                  featured: false,
                },
                {
                  icon: Mic2,
                  title: 'Podcast',
                  desc: 'Listen to sermons on the go',
                  btn: 'Subscribe',
                  featured: false,
                },
              ].map(card => (
                <div
                  key={card.title}
                  className={`rounded-2xl p-5 md:p-6 cursor-pointer group transition-shadow duration-300 ${
                    card.featured
                      ? 'text-white bg-linear-to-br from-[#006B3F] to-emerald-700 shadow-sm'
                      : 'bg-white border border-slate-100 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between mb-3">
                    <div className={`${card.featured ? 'bg-white/20' : 'bg-slate-100'} rounded-lg p-2.5`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-1.5">{card.title}</h3>
                  <p className="mb-3 text-sm opacity-80">{card.desc}</p>

                  <div className="flex items-center font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    {card.btn}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl py-7 px-4 md:p-8 border border-slate-100">
              <SectionEyebrow>Gatherings</SectionEyebrow>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 tracking-tight">
                Service Times
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICE_TIMES.map(service => (
                  <div
                    key={service.title}
                    className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-600 rounded-lg p-2">
                        <Clock className="w-4 h-4 text-[#FFD700]" />
                      </div>
                      <h4 className="font-semibold text-sm">{service.title}</h4>
                    </div>

                    <p className="text-emerald-700 font-semibold text-sm">{service.day}</p>
                    <p className="text-slate-600 mb-1.5 text-sm">{service.time}</p>
                    <p className="text-sm text-slate-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <SectionEyebrow>First Visit</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
              What to Expect
            </h2>
            <p className="text-slate-600 text-base md:text-lg">Your first visit with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_TO_EXPECT.map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 shadow-sm text-center border border-slate-100"
              >
                <div
                  className={`w-11 h-11 mx-auto mb-4 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveService;
