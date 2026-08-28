import { Heart, BookOpen, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import CoreValues from '@/components/CoreValues';
import MeetThePastor from '@/components/MeetThePastor';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition, viewportOnce } from '@/lib/motion';

const VALUES = [
  {
    icon: BookOpen,
    title: 'Practical Christianity',
    desc: 'Applying God’s Word to everyday life',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Human Dignity',
    desc: 'Valuing and empowering every person',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Leadership',
    desc: 'Developing leaders who transform society',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Pursuing the highest standards for God’s glory',
    color: 'from-green-500 to-emerald-500',
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
                <SectionEyebrow align="left">About Us</SectionEyebrow>
              </motion.div>

              <motion.h2
                {...fadeUp}
                transition={staggerTransition(1, 0.1, 0)}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 leading-tight tracking-tight"
              >
                Raising Leaders,
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#006B3F] to-emerald-600">
                  Shaping Vision
                </span>
              </motion.h2>

              <motion.p
                {...fadeUp}
                transition={staggerTransition(2, 0.1, 0)}
                className="text-slate-600 mb-4 leading-relaxed text-base md:text-lg"
              >
                International Central Gospel Church (ICGC) is a Christian organization,
                multi-cultural in nature, but primarily for the empowerment of the African person.
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={staggerTransition(3, 0.1, 0)}
                className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg"
              >
                Living Word Temple is a vibrant branch of the ICGC family, dedicated to building
                people of integrity and excellence.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                {VALUES.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={staggerTransition(index, 0.08, 0.12)}
                    className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
                  >
                    <div
                      className={`mb-3 w-10 h-10 bg-linear-to-br ${item.color} rounded-lg flex items-center justify-center`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-bold text-base text-slate-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1781938363/icgc_banner_kfyfxr.avif"
                  alt="Our Church Family"
                  className="w-full aspect-[4/5] max-h-[28rem] md:max-h-[32rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#006B3F]/20 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-md z-20"
                {...fadeUp}
                transition={staggerTransition(2, 0.1, 0.2)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-linear-to-br from-[#006B3F] to-emerald-600 rounded-lg p-2.5">
                    <Heart className="w-5 h-5 text-[#FFD700]" />
                  </div>

                  <div>
                    <div className="text-xl font-bold text-slate-900">20+</div>
                    <div className="text-sm text-slate-600 font-medium">Years of Ministry</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <CoreValues />
      <MeetThePastor />
    </>
  );
};

export default About;
