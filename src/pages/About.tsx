import { Heart, BookOpen, Music, Users } from "lucide-react";
import { motion } from "framer-motion";
import CoreValues from "@/components/CoreValues";
import MeetThePastor from "@/components/MeetThePastor";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const VALUES = [
  {
    icon: Heart,
    title: "Family",
    desc: "A community where you belong",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "The Word",
    desc: "Sound biblical teaching",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Music,
    title: "Worship",
    desc: "Engaging praise & worship",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Users,
    title: "Impact",
    desc: "Reaching out to our city",
    color: "from-green-500 to-emerald-500",
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                className="inline-block px-4 py-2 rounded-full bg-[#006B3F]/10 text-[#006B3F] text-sm font-bold uppercase tracking-wider mb-6"
              >
                About Us
              </motion.span>

              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                  Raising Leaders,
                  <br />
                  <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#006B3F] to-emerald-600">
                    Shaping Vision
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                className="text-slate-600 mb-6 leading-relaxed text-md md:text-lg"
              >
                International Central Gospel Church (ICGC) is a Christian
                organization, multi-cultural in nature, but primarily for the
                empowerment of the African person.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
                className="text-slate-600 mb-8 leading-relaxed text-md md:text-lg"
              >
                Living Word Temple is a vibrant branch of the ICGC family,
                dedicated to building people of integrity and excellence.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {VALUES.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: easeOutExpo,
                    }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100"
                  >
                    <div
                      className={`mb-6 w-14 h-14 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-lg md:text-xl text-slate-900 mb-2">
                      {item.title}
                    </p>
                    <p className="text-md md:text-lg text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <img
                  src="https://images.unsplash.com/photo-1543165365-07232ed12abd?auto=format&fit=crop&q=80&w=800"
                  alt="Our Church Family"
                  className="w-full aspect-4/5 object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#006B3F]/40 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br from-[#006B3F] to-emerald-600 rounded-xl p-3">
                    <Heart className="w-6 h-6 text-[#FFD700]" />
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-slate-900">20+</div>
                    <div className="text-sm text-slate-600 font-medium">
                      Years of Ministry
                    </div>
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
