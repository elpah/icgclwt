import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-6">
              Contact
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Living Word Temple, Adenta - Accra, Ghana',
                  color: 'from-red-500 to-pink-500',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+233 (0) 30 123 4567',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@icgclwt.org',
                  color: 'from-blue-500 to-cyan-500',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-slate-900 mb-6 text-lg">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Facebook,
                    color: 'hover:bg-blue-500',
                  },
                  {
                    Icon: Twitter,
                    color: 'hover:bg-sky-500',
                  },
                  {
                    Icon: Instagram,
                    color: 'hover:bg-pink-500',
                  },
                  {
                    Icon: Youtube,
                    color: 'hover:bg-red-500',
                  },
                ].map(({ Icon, color }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    href="#"
                    className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-slate-100 text-slate-400 ${color} hover:text-white hover:border-transparent transition-all`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Send us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full bg-gradient-to-r from-[#006B3F] to-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-lg"
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
