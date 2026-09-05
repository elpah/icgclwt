import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#006B3F] mb-3">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Page not found</h1>
        <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed mb-8">
          That page is not on this site. You can go back home or send us a message.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="cursor-pointer inline-flex items-center justify-center bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-6 py-3 rounded-full font-semibold text-sm min-h-12"
          >
            Back home
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer inline-flex items-center justify-center bg-white border border-slate-200 hover:border-[#006B3F] text-slate-800 px-6 py-3 rounded-full font-semibold text-sm min-h-12"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
