import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionEyebrow from '@/components/SectionEyebrow';
import SalvationResponseForm from '@/components/SalvationResponseForm';
import { useDocumentMeta } from '@/lib/useDocumentMeta';

const GOSPEL_STEPS = [
  {
    heading: 'God Loves You',
    body: 'God created you and loves you deeply. His desire is for you to know Him, experience His love, and have a relationship with Him.',
    reference: 'John 3:16',
  },
  {
    heading: 'We All Need a Saviour',
    body: 'Sin separates us from God, and none of us can make ourselves right with Him through our own efforts. We all need God\'s grace and forgiveness.',
    reference: 'Romans 3:23',
  },
  {
    heading: 'Jesus Made the Way',
    body: 'Jesus Christ came into the world, died for our sins, and rose again. Through Him, God has made a way for us to be reconciled to Him and receive new life.',
    reference: 'Romans 5:8; John 14:6',
  },
];

const PRAYER_LINES = [
  'Lord Jesus,',
  'I acknowledge that I am a sinner and that I need You.',
  'I believe that You died for my sins and that You rose again.',
  'Today, I turn away from my sins and put my faith in You.',
  'I invite You into my life and receive You as my Lord and Saviour.',
  'Help me to follow You, grow in Your Word, and live for You each day.',
  'Amen.',
];

const GiveYourLifeToChrist = () => {
  useDocumentMeta(
    'Give Your Life to Christ | ICGC Living Word Temple',
    'Discover the hope and new life found in Jesus Christ and take your next step of faith with ICGC Living Word Temple.'
  );

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const scrollToHash = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    requestAnimationFrame(scrollToHash);
    const retry = window.setTimeout(scrollToHash, 200);
    return () => window.clearTimeout(retry);
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <SectionEyebrow tone="light">A New Beginning</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
              Give Your Life
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-yellow-400 to-[#FFD700]">
                to Christ
              </span>
            </h1>
            <p className="text-[#FFD700] font-medium text-base md:text-lg mb-4">
              A new life begins with Jesus.
            </p>
            <p className="text-sm md:text-[0.95rem] text-slate-200 leading-relaxed">
              God loves you and desires a relationship with you. Through Jesus Christ, you can
              receive forgiveness, hope, and a new beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {GOSPEL_STEPS.map((step, index) => (
              <li key={step.heading}>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B8860B] mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <span className="block h-px w-8 bg-[#FFD700] mb-5" aria-hidden="true" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                  {step.heading}
                </h2>
                <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed mb-5">
                  {step.body}
                </p>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#006B3F]">
                  {step.reference}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionEyebrow>Respond</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            You Can Respond Today
          </h2>
          <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
            Salvation is God&apos;s gift. We receive it by putting our faith in Jesus Christ,
            turning from our sins, and trusting Him as Lord and Saviour. You don&apos;t need to
            have everything figured out before coming to Jesus.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-[#FFD700] mb-3">
              Pray
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              A Prayer of Salvation
            </h2>
            <p className="text-slate-200 text-sm md:text-[0.95rem] leading-relaxed">
              If you are ready to place your faith in Jesus, you can pray sincerely in your own
              words. The following prayer can help you express your decision:
            </p>
          </div>

          <blockquote className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="space-y-4 text-slate-800 text-base md:text-lg leading-relaxed font-serif">
              {PRAYER_LINES.map(line => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </blockquote>

          <p className="mt-6 text-center text-slate-200 text-sm leading-relaxed">
            This prayer is not a formula. What matters is a sincere heart that trusts Jesus and
            begins a relationship with Him.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionEyebrow>A New Life</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Made a Decision to Follow Jesus?
          </h2>
          <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed mb-7">
            If you&apos;ve made a decision to follow Jesus today, we celebrate with you! We would
            love to pray with you, connect with you, and help you take your next step in your walk
            with Christ.
          </p>
          <a
            href="#decision-form"
            className="cursor-pointer inline-flex items-center justify-center bg-[#FFD700] hover:bg-[#FDB813] text-[#006B3F] px-7 py-3 rounded-full font-semibold text-sm min-h-12"
          >
            Tell Us About Your Decision
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <section id="decision-form" className="scroll-mt-24 py-16 md:py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionEyebrow>Connect</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
              If you&apos;ve made a decision to follow Jesus, recommitted your life to Christ, or
              simply have questions about faith, we&apos;d love to hear from you.
            </p>
          </div>
          <SalvationResponseForm />
        </div>
      </section>
    </div>
  );
};

export default GiveYourLifeToChrist;
