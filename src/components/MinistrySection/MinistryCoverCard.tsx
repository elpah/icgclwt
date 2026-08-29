import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { MINISTRIES_DATA } from '@/data/MinistriesData';

type Ministry = (typeof MINISTRIES_DATA)[number];

interface MinistryCoverCardProps {
  ministry: Ministry;
}

const MinistryCoverCard = ({ ministry }: MinistryCoverCardProps) => {
  return (
    <Link
      to={`/ministries/${ministry.id}`}
      className="group relative block cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 aspect-[4/5] bg-slate-200"
      aria-label={`${ministry.name}, learn more`}
    >
      <img
        src={ministry.headerImage}
        alt=""
        width={800}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h2 className="text-white text-lg md:text-xl font-bold tracking-tight leading-tight">
          {ministry.name}
        </h2>
        <span className="mt-2 inline-flex items-center text-[#FFD700] text-sm font-semibold">
          Learn more
          <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default MinistryCoverCard;
