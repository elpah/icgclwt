import { useEffect, lazy, Suspense, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Clock, ArrowRight, Video } from "lucide-react";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  fadeUp,
  heroTransition,
  staggerTransition,
  viewportOnce,
} from "@/lib/motion";

const About = lazy(() => import("./About"));
const QuoteSection = lazy(() => import("@/components/QuoteSection"));
const GivingSection = lazy(() => import("@/components/GivingSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SERVICE_TIMES = [
  {
    id: "sunday",
    day: "Sundays",
    time: "8:00 AM - 10:30 AM",
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
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-linear-to-br from-slate-900 via-[#006B3F] to-emerald-900"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/church_cover_image.jpg"
            alt="Church Hero"
            width={2040}
            height={1360}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 lg:gap-10 items-center">
            <div className="text-white">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.15)}
              >
                Experience
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                  God's Power
                </span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-base text-slate-300 max-w-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition(0.32)}
              >
                A message-centered, mission-oriented community where lives are
                transformed and leaders are raised.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => scrollToId("contact")}
                  className="cursor-pointer bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-6 py-3 rounded-full font-semibold text-base flex items-center justify-center min-h-12 transition-shadow duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.45)}
                >
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={goToLiveService}
                  className="cursor-pointer bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center justify-center min-h-12 transition-colors duration-300 hover:bg-white/15"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.55)}
                >
                  <Video className="mr-2 w-4 h-4" />
                  Watch Services
                </motion.button>
              </div>
            </div>

            <div className="hidden md:block relative mt-4 lg:mt-0 pt-10">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={heroTransition(0.25)}
              >
                <HeroSlideshow />

                <motion.div
                  className="absolute top-0 right-6 z-20 -translate-y-1/2 bg-linear-to-br from-[#FFD700] to-[#FDB813] rounded-xl p-4 shadow-md w-56"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.7)}
                >
                  <p className="text-sm text-[#006B3F] font-semibold leading-snug">
                    Raising leaders, shaping vision, influencing society through
                    Christ
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 md:mb-12"
            {...fadeUp}
            transition={staggerTransition(0)}
          >
            <SectionEyebrow>Service Times</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Worship With Us
            </h2>
            <p className="text-slate-600 mt-3 text-sm md:text-[0.95rem] leading-relaxed">
              Experience vibrant worship, powerful teaching, and genuine
              community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {SERVICE_TIMES.map((service, index) => (
              <motion.div
                key={service.id}
                className="p-5 md:p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={staggerTransition(index)}
              >
                <div className="w-11 h-11 bg-[#006B3F] rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                </div>

                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <div className="text-sm text-[#006B3F] font-semibold mb-1">
                  {service.day}
                </div>
                <div className="text-slate-600 text-sm font-medium">
                  {service.time}
                </div>

                <button
                  onClick={() => scrollToId("map")}
                  className="cursor-pointer mt-4 text-[#006B3F] font-semibold text-sm flex items-center min-h-10"
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
        <QuoteSection />
      </Suspense>

      <Suspense fallback={null}>
        <GivingSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="p-10 text-center text-slate-500">Loading...</div>
        }
      >
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
