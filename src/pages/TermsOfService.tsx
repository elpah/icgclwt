import LegalDocument from '@/components/LegalDocument';
import { CHURCH_ADDRESS, CHURCH_DIGITAL_ADDRESS } from '@/data/churchInfo';

const TermsOfService = () => {
  return (
    <LegalDocument eyebrow="Legal" title="Terms of Service" updated="28 August 2026">
      <p>
        Welcome to the website of ICGC Living Word Temple in Winneba, Ghana. By accessing or using
        this website, you agree to these Terms of Service. If you do not agree, please do not use
        the site.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Using this website</h2>
        <p>
          This website is provided to share information about our church, gatherings, ministries,
          and related activities. You may browse the site for personal, non-commercial use.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use the site in a way that is unlawful, harmful, or disruptive.</li>
          <li>Attempt to interfere with the operation or security of the site.</li>
          <li>Copy, scrape, or reuse site content for commercial purposes without our permission.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Content and information</h2>
        <p>
          Sermons, teachings, event details, service times, and other materials on this site are
          shared for spiritual encouragement and general information. They are not a substitute for
          personal pastoral care, professional advice, or in-person fellowship.
        </p>
        <p>
          We try to keep information accurate, but details such as service times, events, and
          contact information may change. Please confirm important details with the church if needed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Intellectual property</h2>
        <p>
          The ICGC Living Word Temple name, logo, photographs, text, and other content on this
          website are owned by the Church or used with permission. You may not use our name or logo
          in a way that suggests sponsorship or endorsement without our prior written consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Third-party links and media</h2>
        <p>
          This website may include links to social media pages, maps, YouTube, or other external
          sites. Those services are not controlled by us, and we are not responsible for their
          content, availability, or practices. Your use of those services is subject to their own
          terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Messages you send us</h2>
        <p>
          If you submit a message through the contact form or otherwise reach out to us, you agree
          that we may use that information to respond to you and to carry out ordinary church
          ministry. Please do not send confidential or sensitive information through the website
          unless you are comfortable doing so.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Disclaimer</h2>
        <p>
          This website is provided “as is.” To the fullest extent permitted by law, we make no
          warranties that the site will be uninterrupted, error-free, or free of harmful components.
          We are not liable for any loss or damage arising from your use of, or inability to use,
          this website, except where liability cannot be excluded under applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Changes</h2>
        <p>
          We may update these Terms of Service from time to time. The “Last updated” date at the top
          of this page will reflect the latest version. Continued use of the website after changes
          are posted means you accept the revised terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Governing law</h2>
        <p>
          These terms are governed by the laws of Ghana. Any dispute arising from the use of this
          website will be subject to the courts of Ghana, unless applicable law requires otherwise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Contact us</h2>
        <p>
          If you have questions about these Terms of Service, please contact ICGC Living Word
          Temple:
        </p>
        <p>
          {CHURCH_ADDRESS}
          <br />
          Digital address: {CHURCH_DIGITAL_ADDRESS}
          <br />
          Email:{' '}
          <a
            href="mailto:info@icgclivingwordtemple.com"
            className="text-[#006B3F] font-medium hover:underline"
          >
            info@icgclivingwordtemple.com
          </a>
          <br />
          Phone:{' '}
          <a href="tel:+233245953629" className="text-[#006B3F] font-medium hover:underline">
            +233 (0) 24 595 3629
          </a>
        </p>
      </section>
    </LegalDocument>
  );
};

export default TermsOfService;
