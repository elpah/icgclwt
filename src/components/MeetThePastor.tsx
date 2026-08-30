import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionEyebrow from '@/components/SectionEyebrow';

const QUALIFICATIONS = [
  'Master of Art - Peace and Development Studies',
  'Master of Art - Human Right and Human Resource Development',
  'Bachelor of Art -Theology',
  'Certificate in Counselling from Central University, Accra',
  '15+ Years of Pastoral Ministry',
];

const MeetThePastor = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <figure className="relative w-[90%]">
            <div className="relative lg:pr-4 lg:pb-4">
              <div
                className="hidden lg:block absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#FFD700]"
                aria-hidden="true"
              />
              <img
                src="/images/rev_obeng.webp"
                alt="Rev. Reuben K Obeng, Head Pastor"
                className="w-full h-[24rem] sm:h-[28rem] lg:h-[34rem] object-cover object-[center_12%] -scale-x-100"
              />
            </div>
          </figure>

          <div>
            <SectionEyebrow align="left">Leadership</SectionEyebrow>

            <p className="text-sm text-slate-500 mb-2">Meet Our Head Pastor</p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-1.5">
              Rev. Reuben K Obeng
            </h2>

            <p className="text-[#006B3F] font-medium text-sm md:text-base tracking-wide mb-5">
              DSM & Head Pastor
            </p>

            <div className="space-y-3 text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
              <p>
                Rev. Obeng has been serving as a pastor with ICGC for over 15 years and currently
                serves as the Head Pastor of ICGC Living Word Temple. His passion for teaching
                God&apos;s Word and raising up leaders has transformed countless lives.
              </p>
              <p>
                With a heart for the local community and a vision for global impact, Rev. Obeng
                leads our congregation with wisdom, compassion, and unwavering faith in God&apos;s
                promises.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#006B3F] mb-3">
                Qualifications & Education
              </p>
              <ul className="space-y-2">
                {QUALIFICATIONS.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-[0.55rem] h-px w-3 shrink-0 bg-[#FFD700]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="cursor-pointer mt-7 bg-[#006B3F] hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 inline-flex items-center min-h-12"
              onClick={() => navigate('/contact')}
            >
              Schedule a Meeting
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetThePastor;
