import { motion } from 'framer-motion';
import { useRouter } from '@/pages/Router';
import { Target, Users, Zap } from 'lucide-react';
import MinistryCardsContainer from './MinistryCardsContainer';

const JoinMinistriesSection = () => {
  return (
    <section id="ministries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-4">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Ministries</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover a place where you can grow, serve, and make a difference
          </p>
        </motion.div>
        <MinistryCardsContainer />

        {/* Why Join Section */}
        <div className="bg-linear-to-br from-[#006B3F] to-emerald-700 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Join a Ministry?</h3>
            <p className="text-slate-200 text-lg mb-10 leading-relaxed">
              Ministries are the heartbeat of our church. When you join a ministry, you're not just
              volunteering—you're discovering your purpose, using your gifts, and impacting lives
              for eternity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              ].map((item, idx) => (
                <motion.div
                  key={idx}
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
                  transition={{
                    delay: idx * 0.1,
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-200 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMinistriesSection;
