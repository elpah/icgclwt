import { motion } from 'framer-motion';
import { MINISTRIES_DATA } from '../../data/MinistriesData';
import { useNavigate } from 'react-router-dom';
import { staggerTransition, viewportOnce } from '@/lib/motion';

const MinistryCardsContainer = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/ministries/${id}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
      {MINISTRIES_DATA.map((min, idx) => (
        <motion.div
          key={min.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={staggerTransition(idx, 0.05, 0.02)}
          className="bg-white p-4 md:p-5 rounded-xl flex flex-col items-center justify-center
                     border border-slate-100 hover:border-[#FFD700]/40
                     hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          onClick={() => handleClick(min.id)}
        >
          <div
            className={`w-10 h-10 md:w-11 md:h-11 bg-linear-to-br ${min.color} rounded-lg
                        flex items-center justify-center mb-3
                        group-hover:scale-105
                        transition-transform duration-300`}
          >
            <min.icon className="w-5 h-5 text-white" />
          </div>

          <p className="font-semibold text-slate-800 text-center text-xs md:text-sm leading-tight">
            {min.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default MinistryCardsContainer;
