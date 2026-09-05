import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionEyebrow from '@/components/SectionEyebrow';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
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
            <SectionEyebrow tone="light">Visit Us</SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              Get
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                in Touch
              </span>
            </h1>

            <p className="text-sm md:text-[0.95rem] text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Whether you have questions, need prayer, or want to
              know more about our church, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ContactPage;
