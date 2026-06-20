import { useEffect, lazy, Suspense, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Home, Video } from "lucide-react";
import { motion } from "framer-motion";

const About = lazy(() => import("./About"));
const QuoteSection = lazy(() => import("@/components/QuoteSection"));
const UpcomingEvents = lazy(() => import("@/components/UpcomingEvents"));
const GivingSection = lazy(() => import("@/components/GivingSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const JoinMinistriesSection = lazy(() =>
  import("@/components/MinistrySection/JoinMinistriesSection"),
);

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const SERVICE_TIMES = [
  {
    id: "sunday",
    day: "Sundays",
    time: "7:30 AM - 10:00 AM",
    title: "Sunday Service",
  },
  {
    id: "wednesday",
    day: "Wednesday",
    time: "6:00 PM - 8:00 PM",
    title: "Teaching Service",
  },
  {
    id: "friday",
    day: "Friday",
    time: "6:00 PM - 8:00 PM",
    title: "Prayer Service",
  },
];

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;
    scrollToId(targetId);
  }, [location.state?.scrollTo, scrollToId]);

  const goToLiveService = useCallback(() => {
    navigate("/live-service");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-900 via-[#006B3F] to-emerald-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="images/church_cover_image.webp"
            alt="Church Hero"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30"
              >
                <Home className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#FFD700] text-sm font-bold tracking-wider">
                  WELCOME HOME
                </span>
              </motion.div>

              <motion.div
                initial={{ y: 25 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
                >
                  Experience
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                    God's Power
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-slate-300 max-w-xl mb-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
              >
                A message-centered, mission-oriented community where lives are
                transformed and leaders are raised.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => scrollToId("contact")}
                  className="cursor-pointer bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: easeOutExpo }}
                >
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={goToLiveService}
                  className="cursor-pointer bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: easeOutExpo }}
                >
                  <Video className="mr-2 w-5 h-5" />
                  Watch Services
                </motion.button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:block relative">
              <motion.img
                src="images/church_cover_smaller.webp"
                alt="Church Worship"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-125 object-cover rounded-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: easeOutExpo }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent rounded-3xl" />

              <motion.div
                className="absolute -top-6 -right-6 bg-linear-to-br from-[#FFD700] to-[#FDB813] rounded-2xl p-6 shadow-xl w-64"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: easeOutExpo }}
              >
                <p className="text-sm text-[#006B3F] font-bold">
                  Raising leaders, shaping vision, influencing society through
                  Christ
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl w-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#006B3F]/10 p-2 rounded-xl">
                    <Calendar className="w-5 h-5 text-[#006B3F]" />
                  </div>
                  <div className="text-2xl font-bold text-[#006B3F]">3x</div>
                </div>
                <div className="text-sm text-slate-600 font-bold">
                  Weekly Services
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WORSHIP WITH US — ANIMATED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Worship With Us
            </h2>
            <p className="text-slate-600 mt-4">
              Experience vibrant worship, powerful teaching, and genuine
              community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_TIMES.map((service, index) => (
              <motion.div
                key={service.id}
                className="p-8 rounded-3xl border bg-white hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: easeOutExpo,
                }}
              >
                <div className="w-14 h-14 bg-[#006B3F] rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#FFD700]" />
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-sm text-[#006B3F] font-semibold mb-2">
                  {service.day}
                </div>
                <div className="text-slate-600 font-medium">{service.time}</div>

                <button
                  onClick={() => scrollToId("map")}
                  className="mt-6 text-[#006B3F] font-bold flex items-center"
                >
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <About />
      </Suspense>

      <Suspense fallback={null}>
        <UpcomingEvents />
      </Suspense>

      <Suspense fallback={null}>
        <QuoteSection />
      </Suspense>

      <Suspense fallback={null}>
        <JoinMinistriesSection />
      </Suspense>

      <Suspense fallback={null}>
        <GivingSection />
      </Suspense>

      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
