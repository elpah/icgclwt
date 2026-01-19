import { motion } from 'framer-motion';
import { MINISTRIES_DATA } from '../../data/MinistriesData';
import { useNavigate } from 'react-router-dom';

const MinistryCardsContainer = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/ministries/${id}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {MINISTRIES_DATA.map((min, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center
                     border-2 border-slate-100 hover:border-[#FFD700]/50
                     hover:shadow-xl transition-all cursor-pointer group"
          onClick={() => handleClick(min.id)}
        >
          <div
            className={`w-14 h-14 bg-linear-to-br ${min.color} rounded-2xl
                        flex items-center justify-center mb-4
                        group-hover:scale-110 group-hover:rotate-6
                        transition-all shadow-lg`}
          >
            <min.icon className="w-7 h-7 text-white" />
          </div>

          <p className="font-bold text-slate-800 text-center text-sm leading-tight">{min.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MinistryCardsContainer;
