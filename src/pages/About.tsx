import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MeetThePastor from '@/components/MeetThePastor';
import SectionEyebrow from '@/components/SectionEyebrow';
import {
  CORE_VALUES,
  ICGC_MISSION,
  ICGC_VISION,
  LOGO_MEANING,
  STATEMENT_OF_FAITH,
} from '@/data/aboutData';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = hash.replace('#', '');
    const scrollToHash = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    requestAnimationFrame(scrollToHash);
    const retries = [150, 450, 900].map(ms => window.setTimeout(scrollToHash, ms));
    return () => retries.forEach(timeout => window.clearTimeout(timeout));
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <SectionEyebrow tone="light">Who We Are</SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              About
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                Living Word Temple
              </span>
            </h1>

            <p className="text-sm md:text-[0.95rem] text-slate-200 max-w-2xl mx-auto leading-relaxed">
              A branch of International Central Gospel Church, committed to raising leaders,
              shaping vision, and influencing society through Christ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <SectionEyebrow align="left">Our Story</SectionEyebrow>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 leading-tight tracking-tight">
                A house in the
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-[#006B3F] to-emerald-600">
                  ICGC family
                </span>
              </h2>

              <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-[0.95rem]">
                International Central Gospel Church (ICGC) is a Christian organization,
                multi-cultural in nature, but primarily for the empowerment of the African person.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm md:text-[0.95rem]">
                Living Word Temple is a vibrant branch of the ICGC family, dedicated to building
                people of integrity and excellence.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://res.cloudinary.com/dvwpuenzk/image/upload/v1781938363/icgc_banner_kfyfxr.avif"
                alt="ICGC Living Word Temple church family"
                className="w-full aspect-[4/5] max-h-[28rem] md:max-h-[32rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#006B3F]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="scroll-mt-24 relative overflow-hidden bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] py-20 md:py-28"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#FFD700] mb-5">
                The Vision
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15] tracking-tight mb-6">
                <span className="text-[#FFD700]">Establish the</span>
                <br />
                <span className="text-white italic font-semibold">house of God</span>
              </h2>
              <p className="text-slate-200 text-sm md:text-[0.95rem] leading-relaxed max-w-md">
                {ICGC_VISION}
              </p>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FFD700]">
                Acts 2:42
              </p>
            </div>

            <div className="md:border-l md:border-[#FFD700]/25 md:pl-10 lg:pl-16 xl:pl-20">
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#FFD700] mb-5">
                The Mission
              </p>
              <p className="text-white text-xl md:text-2xl lg:text-[1.7rem] font-medium leading-snug max-w-lg">
                {ICGC_MISSION}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="core-values" className="scroll-mt-24 py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <SectionEyebrow>Our Values</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {CORE_VALUES.map(value => (
              <article
                key={value.title}
                className="rounded-2xl p-5 md:p-6 border border-slate-100 bg-slate-50"
              >
                <div className="w-11 h-11 bg-[#006B3F] rounded-md flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="scroll-mt-24 py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>How We Live</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Philosophy
          </h2>
          <div className="space-y-4 text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">
            <p>
              We believe Christianity is not a myth. God&apos;s word preached must bring truths
              that can produce results when applied to one&apos;s life.
            </p>
            <p>
              Every human being is created in the image and likeness of God and must be treated
              with respect and honour. Also, everything the Christian or the human being will do
              must be in excellent shape to the glory of God. (Daniel 5:12)
            </p>
          </div>
        </div>
      </section>

      <section id="logo" className="scroll-mt-24 py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 md:p-10 w-full flex items-center justify-center">
              <img
                src="/images/icgc_logo.webp"
                alt="ICGC logo: a globe highlighting Africa, four pillars, and an oval ring"
                className="w-44 md:w-52 h-auto object-contain"
                width="840"
                height="770"
              />
            </div>

            <div>
              <SectionEyebrow align="left">Our Emblem</SectionEyebrow>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                The ICGC Logo
              </h2>
              <p className="text-sm md:text-[0.95rem] text-slate-600 leading-relaxed mb-6">
                The emblem is a globe with the African continent highlighted. It has four pillars
                and an oval ring around it holding them together.
              </p>
              <div className="space-y-4">
                {LOGO_MEANING.map(item => (
                  <div key={item.title}>
                    <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="statement-of-faith" className="scroll-mt-24 py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>What We Believe</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            Statement of Faith
          </h2>

          <ol className="space-y-4">
            {STATEMENT_OF_FAITH.map(item => (
              <li
                key={item}
                className="flex gap-3 text-sm md:text-[0.95rem] text-slate-600 leading-relaxed"
              >
                <span className="mt-2 h-px w-3 shrink-0 bg-[#FFD700]" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-slate-900">We believe </span>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MeetThePastor />
    </div>
  );
};

export default About;
