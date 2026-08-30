import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import {
  CHURCH_ADDRESS,
  CHURCH_DIGITAL_ADDRESS,
  CHURCH_MAPS_EMBED_URL,
  CHURCH_MAPS_URL,
} from '@/data/churchInfo';

const ContactSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-x-8 md:gap-y-4">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  content: CHURCH_ADDRESS,
                  detail: `Digital address: ${CHURCH_DIGITAL_ADDRESS}`,
                  color: 'from-red-500 to-pink-500',
                  link: CHURCH_MAPS_URL,
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+233 (0) 24 595 3629',
                  color: 'from-green-500 to-emerald-500',
                  link: 'tel:+233245953629',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@icgclivingwordtemple.com',
                  color: 'from-blue-500 to-cyan-500',
                  link: 'mailto:info@icgclivingwordtemple.com',
                },
              ].map(item => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group cursor-pointer min-w-0 md:min-w-[14rem] md:flex-1"
                >
                  <div className={`bg-linear-to-br ${item.color} p-2.5 rounded-md shrink-0`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-slate-600 text-sm break-words">{item.content}</p>
                    {item.detail ? (
                      <p className="text-slate-500 text-sm mt-0.5">{item.detail}</p>
                    ) : null}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-slate-900 mb-4 text-base">Connect With Us</h2>
              <div className="flex space-x-3">
                {[
                  {
                    Icon: Facebook,
                    color: 'hover:bg-blue-500',
                    link: 'https://facebook.com/icgc',
                    name: 'facebook',
                  },
                  {
                    Icon: Twitter,
                    color: 'hover:bg-sky-500',
                    link: 'https://twitter.com/icgc',
                    name: 'twitter',
                  },
                  {
                    Icon: Instagram,
                    color: 'hover:bg-pink-500',
                    link: 'https://instagram.com/icgc',
                    name: 'instagram',
                  },
                  {
                    Icon: Youtube,
                    color: 'hover:bg-red-500',
                    link: 'https://youtube.com/@icgc',
                    name: 'youtube',
                  },
                ].map(({ Icon, color, link, name }) => (
                  <a
                    key={name}
                    aria-label={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm border border-slate-100 text-slate-400 ${color} hover:text-white hover:border-transparent transition-colors duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="font-semibold text-slate-900 mb-3 text-sm">Office Hours</p>
              <div className="space-y-1.5 text-slate-600 text-sm">
                <p className="flex justify-between gap-4">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Sunday:</span>
                  <span className="font-medium text-right">Closed (Worship Services)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-6 px-5 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xl font-bold mb-5 text-slate-900">Send us a Message</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                    Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="button"
                className="cursor-pointer w-full bg-linear-to-r from-[#006B3F] to-emerald-600 text-white py-3 rounded-full font-semibold text-base min-h-12 hover:shadow-md transition-shadow duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <div id="map" className="scroll-mt-24 mt-12 md:mt-14">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <iframe
              src={CHURCH_MAPS_EMBED_URL}
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICGC Living Word Temple Location"
              className="w-full h-64 md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
