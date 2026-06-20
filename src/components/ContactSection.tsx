import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-6"
            >
              Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="text-slate-600 mb-10 text-md lg:text-lg leading-relaxed"
            >
              We'd love to hear from you! Whether you have questions, need
              prayer, or want to know more about our church, we're here to help.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Living Word Temple, Winneba, Ghana",
                  color: "from-red-500 to-pink-500",
                  link: "https://maps.google.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+233 (0) 24 595 3629",
                  color: "from-green-500 to-emerald-500",
                  link: "tel:+233245953629",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@icgclivingwordtemple.com",
                  color: "from-blue-500 to-cyan-500",
                  link: "mailto:info@icgclivingwordtemple.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: easeOutExpo,
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div
                    className={`bg-linear-to-br ${item.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
              className="mt-12"
            >
              <h3 className="font-bold text-slate-900 mb-6 text-lg">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Facebook,
                    color: "hover:bg-blue-500",
                    link: "https://facebook.com/icgc",
                    name: "facebook",
                  },
                  {
                    Icon: Twitter,
                    color: "hover:bg-sky-500",
                    link: "https://twitter.com/icgc",
                    name: "twitter",
                  },
                  {
                    Icon: Instagram,
                    color: "hover:bg-pink-500",
                    link: "https://instagram.com/icgc",
                    name: "instagram",
                  },
                  {
                    Icon: Youtube,
                    color: "hover:bg-red-500",
                    link: "https://youtube.com/@icgc",
                    name: "youtube",
                  },
                ].map(({ Icon, color, link, name }, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: easeOutExpo,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-slate-100 text-slate-400 ${color} hover:text-white hover:border-transparent transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
              className="mt-12 bg-linear-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-100"
            >
              <p className="font-bold text-slate-900 mb-4">Office Hours</p>
              <div className="space-y-2 text-slate-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">
                    Closed (Worship Services)
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="bg-white py-10 px-5 md:p-10 rounded-2xl shadow-2xl border-2 border-slate-100"
          >
            <p className="text-2xl font-bold mb-8 text-slate-900">
              Send us a Message
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-bold text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    type="text"
                    className="w-full px-5 py-3 md:py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors mt-1"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    className="w-full px-5 py-3 md:py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors mt-1"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  type="tel"
                  className="w-full px-5 py-3 md:py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors mt-1"
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-5 py-3 md:py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors mt-1"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-5 py-3 md:py-4 rounded-2xl border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-colors resize-none mt-1"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer w-full bg-linear-to-r from-[#006B3F] to-emerald-600 text-white py-5 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow shadow-lg"
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <div id="map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8059385883547!2d-0.1618419!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNCJOIDDCsDA5JzQyLjYiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICGC Living Word Temple Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
