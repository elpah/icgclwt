import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Users, Calendar, Image as ImageIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { MINISTRIES_DATA } from '../data/MinistriesData';
import MinistryCardsContainer from '@/components/MinistrySection/MinistryCardsContainer';

const MinistryPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const ministry = MINISTRIES_DATA.find(min => min.id === id);

  if (!ministry) {
    return <p className="text-center py-20 text-xl text-red-500">Ministry not found</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-150 overflow-hidden">
        <img
          src={ministry.headerImage}
          alt={ministry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-slate-50" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/', { state: { scrollTo: 'ministries' } })}
              className="flex items-center space-x-2 text-white mb-6 hover:text-[#FFD700] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Ministries</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-6"
            >
              <div
                className={`w-20 h-20 bg-linear-to-br ${ministry.color} rounded-2xl flex items-center justify-center shadow-2xl`}
              >
                <ministry.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{ministry.name}</h1>
                <p className="text-slate-200 text-lg">{ministry.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{ministry.vision}</p>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ministry.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-48 rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-slate-100 sticky top-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-[#006B3F]" /> Meeting Times
              </h3>
              <div className="space-y-4">
                {ministry.meetings.map((meeting, index) => (
                  <div key={index} className="pb-4 border-b border-slate-100 last:border-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#FFD700]" />
                      <span className="font-bold text-slate-900">{meeting.day}</span>
                    </div>
                    <div className="text-sm text-slate-600 ml-6">
                      <p>{meeting.time}</p>
                      <p className="flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                        {meeting.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Ministry Leader</h4>
                <p className="text-slate-600 mb-1">{ministry.leader}</p>
                <p className="text-sm text-[#006B3F] font-semibold">{ministry.contact}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-linear-to-r from-[#006B3F] to-emerald-600 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all"
              >
                Join This Ministry
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryPage;
