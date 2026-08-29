import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import MinistryCardsContainer from './MinistryCardsContainer';
import SectionEyebrow from '@/components/SectionEyebrow';
import { fadeUp, staggerTransition, viewportOnce } from '@/lib/motion';

const JoinMinistriesSection = () => {
  return (
    <section id="ministries" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <motion.div {...fadeUp} transition={staggerTransition(0, 0.1, 0)}>
            <SectionEyebrow>Get Involved</SectionEyebrow>
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={staggerTransition(1, 0.1, 0)}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-slate-900 tracking-tight"
          >
            Our Ministries
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={staggerTransition(2, 0.1, 0)}
            className="text-slate-600 max-w-2xl mx-auto text-sm md:text-[0.95rem] leading-relaxed"
          >
            Discover a place where you can grow, serve, and make a difference
          </motion.p>
        </div>

        <MinistryCardsContainer />

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-2xl py-8 px-5 md:p-10 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Why Join a Ministry?</h3>

            <p className="text-slate-200 text-sm md:text-[0.95rem] mb-8 leading-relaxed">
              Ministries are the heartbeat of our church. When you join a ministry, you're not just
              volunteering—you're discovering your purpose, using your gifts, and impacting lives
              for eternity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Target,
                  title: 'Find Your Purpose',
                  description: 'Discover how God has uniquely gifted you',
                },
                {
                  icon: Users,
                  title: 'Build Community',
                  description: 'Form meaningful relationships with others',
                },
                {
                  icon: Zap,
                  title: 'Make an Impact',
                  description: 'Use your talents to change lives',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={staggerTransition(index, 0.08, 0.05)}
                  className="bg-white/10 rounded-xl p-5 border border-white/15"
                >
                  <div className="bg-white/15 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-slate-200 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinMinistriesSection;
