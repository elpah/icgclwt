import SectionEyebrow from '@/components/SectionEyebrow';

interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}

const LegalDocument = ({ eyebrow, title, updated, children }: LegalDocumentProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 bg-linear-to-br from-[#006B3F] via-emerald-700 to-[#006B3F] overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-slate-200 text-sm md:text-base">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-8 sm:px-8 md:px-10 md:py-10 space-y-8 text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalDocument;
