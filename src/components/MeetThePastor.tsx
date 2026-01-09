import { motion } from 'framer-motion';
import { GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeetThePastor = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-linear-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#006B3F]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Head Pastor
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/492254476_23900126772914905_8930891602656982219_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=teZ5HAoYpLgQ7kNvwHheyMS&_nc_oc=Adlps3g7HreJqOSuJHzAfNRO2SvHx39DgVZU6NxSSJctaHn-u1a5tZO29OTYZ6AT8Rg&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=RfWPpkUvYkNJ8fURi5nrOA&oh=00_AfrXMuwK3o3ciPI4eoDSMFwEGhs2xEKFUsU-A0lPHiht0A&oe=696093A0"
                  alt="Head Pastor"
                  className="w-full h-150 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#006B3F]/40 to-transparent" />
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-[#FFD700] to-[#FDB813] rounded-3xl z-0 blur-xl opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-linear-to-br from-[#006B3F] to-emerald-600 rounded-3xl z-0 blur-xl opacity-30" />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Rev. Reuben K Obeng
            </h3>
            <p className="text-[#006B3F] font-bold text-xl mb-6">DSM & Head Pastor</p>

            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Rev. Obeng has been serving as the Head Pastor of ICGC Living Word Temple for over 15
              years. His passion for teaching God's Word and raising up leaders has transformed
              countless lives.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              With a heart for the local community and a vision for global impact, Rev. Obeng leads
              our congregation with wisdom, compassion, and unwavering faith in God's promises.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Qualifications & Education</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-2 mt-0.5 text-[#006B3F]" />
                  <span>Master of Art - Peace and Development Studies</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-2 mt-0.5 text-[#006B3F]" />
                  <span>Master of Art - Human Right and Human Resource Development</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-2 mt-0.5 text-[#006B3F]" />
                  <span>Bachelor of Art -Theology</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-2 mt-0.5 text-[#006B3F]" />
                  <span>Certificate in Counselling from Central University, Accra</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 mr-2 mt-0.5 text-[#006B3F]" />
                  <span>15+ Years of Pastoral Ministry</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="cursor-pointer bg-linear-to-r from-[#006B3F] to-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center"
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
            >
              Schedule a Meeting
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetThePastor;
