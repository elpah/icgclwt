import { lazy, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Video } from "lucide-react";
import { motion } from "framer-motion";
import SectionEyebrow from "@/components/SectionEyebrow";
import HeroSlideshow from "@/components/HeroSlideshow";
import MinistryCoverCard from "@/components/MinistrySection/MinistryCoverCard";
import MeetThePastor from "@/components/MeetThePastor";
import { MINISTRIES_DATA } from "@/data/MinistriesData";
import { fadeUp, heroTransition, staggerTransition, viewportOnce } from "@/lib/motion";

const HOME_PHOTOS = [
  {
    src: "/images/church_cover_image.webp",
    alt: "ICGC Living Word Temple sanctuary",
  },
  {
    src: "/images/cover_images_smaller/cover_image_5.webp",
    alt: "Congregation gathered in worship",
  },
  {
    src: "https://res.cloudinary.com/dvwpuenzk/image/upload/v1787967714/sunday_service_lwt_ld62po.jpg",
    alt: "Sunday service at Living Word Temple",
  },
  {
    src: "/images/cover_images_smaller/cover_image_2.webp",
    alt: "A moment from Living Word Temple",
  },
];

const HOME_MINISTRIES = ["men", "women", "youth"]
  .map(id => MINISTRIES_DATA.find(ministry => ministry.id === id))
  .filter((ministry): ministry is (typeof MINISTRIES_DATA)[number] => Boolean(ministry));

const QuoteSection = lazy(() => import("@/components/QuoteSection"));
const GivingSection = lazy(() => import("@/components/GivingSection"));

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
  const navigate = useNavigate();

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
            src="/images/church_cover_image.webp"
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
                transition={heroTransition(0.08)}
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
                transition={heroTransition(0.16)}
              >
                A message-centered, mission-oriented community where lives are
                transformed and leaders are raised.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer bg-linear-to-r from-[#FFD700] to-[#FDB813] text-[#006B3F] px-6 py-3 rounded-full font-semibold text-base flex items-center justify-center min-h-12 transition-shadow duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.24)}
                >
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={goToLiveService}
                  className="cursor-pointer bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center justify-center min-h-12 transition-colors duration-300 hover:bg-white/15"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.32)}
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
                transition={heroTransition(0.12)}
              >
                <HeroSlideshow />

                <motion.div
                  className="absolute top-0 right-6 z-20 -translate-y-1/2 bg-linear-to-br from-[#FFD700] to-[#FDB813] rounded-xl p-4 shadow-md w-56"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={heroTransition(0.36)}
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-start">
            <motion.div {...fadeUp} transition={staggerTransition(0)}>
              <SectionEyebrow align="left">Service Times</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Worship With Us
              </h2>
              <p className="text-slate-600 mt-4 text-sm md:text-[0.95rem] leading-relaxed max-w-md">
                Experience vibrant worship, powerful teaching, and genuine
                community
              </p>
              <button
                onClick={() => navigate("/contact#map")}
                className="cursor-pointer mt-6 text-[#006B3F] font-semibold text-sm inline-flex items-center min-h-10"
              >
                Get Directions
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>

            <div>
              <motion.div
                {...fadeUp}
                transition={staggerTransition(1)}
                className="bg-[#006B3F] text-white px-6 py-7 md:px-8 md:py-8"
              >
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#FFD700] mb-3">
                  {SERVICE_TIMES[0].day}
                </p>
                <p className="text-2xl md:text-4xl font-bold tracking-tight leading-none mb-3">
                  {SERVICE_TIMES[0].time}
                </p>
                <p className="text-slate-100 text-sm md:text-base">
                  {SERVICE_TIMES[0].title}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-7">
                {SERVICE_TIMES.slice(1).map((service, index) => (
                  <motion.div
                    key={service.id}
                    {...fadeUp}
                    transition={staggerTransition(index + 2)}
                  >
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#006B3F] mb-2">
                      {service.day}
                    </p>
                    <p className="text-xl font-semibold text-slate-900 mb-1">
                      {service.time}
                    </p>
                    <p className="text-slate-600 text-sm">{service.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div {...fadeUp} transition={staggerTransition(0)}>
              <SectionEyebrow align="left">Our Story</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 leading-tight tracking-tight">
                A house in the
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#006B3F] to-emerald-600">
                  ICGC family
                </span>
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-[0.95rem]">
                International Central Gospel Church (ICGC) is a Christian
                organization, multi-cultural in nature, but primarily for the
                empowerment of the African person.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-[0.95rem]">
                Living Word Temple is a vibrant branch of the ICGC family,
                dedicated to building people of integrity and excellence.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="cursor-pointer mt-6 text-[#006B3F] font-semibold text-sm inline-flex items-center min-h-10"
              >
                About the church
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1781938363/icgc_banner_kfyfxr.avif"
                alt="ICGC Living Word Temple church family"
                className="w-full aspect-[4/5] max-h-[26rem] md:max-h-[30rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#006B3F]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <MeetThePastor />

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <motion.div {...fadeUp} transition={staggerTransition(0)}>
              <SectionEyebrow align="left">Moments</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Church Gallery
              </h2>
            </motion.div>
            <button
              onClick={() => navigate("/gallery")}
              className="cursor-pointer text-[#006B3F] font-semibold text-sm inline-flex items-center min-h-10 shrink-0"
            >
              See the gallery
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {HOME_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="group relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/5]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <motion.div {...fadeUp} transition={staggerTransition(0)}>
              <SectionEyebrow align="left">Get Involved</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Our Ministries
              </h2>
            </motion.div>
            <button
              onClick={() => navigate("/ministries")}
              className="cursor-pointer text-[#006B3F] font-semibold text-sm inline-flex items-center min-h-10 shrink-0"
            >
              See all ministries
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {HOME_MINISTRIES.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={staggerTransition(index)}
              >
                <MinistryCoverCard ministry={ministry} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <QuoteSection />
      </Suspense>

      <Suspense fallback={null}>
        <GivingSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
