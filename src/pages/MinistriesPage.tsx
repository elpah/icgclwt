import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/SectionEyebrow';
import MinistryCoverCard from '@/components/MinistrySection/MinistryCoverCard';
import { MINISTRIES_DATA } from '@/data/MinistriesData';

const MinistriesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <SectionEyebrow tone="light">Get Involved</SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              Our
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                Ministries
              </span>
            </h1>

            <p className="text-sm md:text-[0.95rem] text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Discover a place where you can grow, serve, and make a difference
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {MINISTRIES_DATA.map(ministry => (
              <div key={ministry.id}>
                <MinistryCoverCard ministry={ministry} />
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-2xl py-8 px-5 md:p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                Why Join a Ministry?
              </h2>
              <p className="text-slate-200 text-sm md:text-[0.95rem] mb-8 leading-relaxed">
                Ministries are the heartbeat of our church. When you join a ministry, you're not
                just volunteering. You're discovering your purpose, using your gifts, and impacting
                lives for eternity.
              </p>
              <Link
                to="/contact"
                className="cursor-pointer inline-flex items-center justify-center bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-7 py-3 rounded-full font-semibold text-sm min-h-12"
              >
                Join a Ministry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
