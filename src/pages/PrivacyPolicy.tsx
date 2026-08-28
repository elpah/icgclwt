import LegalDocument from '@/components/LegalDocument';

const PrivacyPolicy = () => {
  return (
    <LegalDocument eyebrow="Legal" title="Privacy Policy" updated="28 August 2026">
      <p>
        This Privacy Policy is for ICGC Living Word Temple (“the Church”, “we”, “us”), a branch of
        International Central Gospel Church (ICGC) based in Winneba, Ghana. It explains how we
        handle information when you visit{' '}
        <span className="text-slate-900">icgclivingwordtemple.com</span> or contact us through this
        website.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Information we collect</h2>
        <p>We may receive the following information:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Details you choose to send us through the contact form, such as your name, email address,
            and message.
          </li>
          <li>
            Basic technical information that is typically collected when you browse a website, such
            as browser type, device type, and pages visited.
          </li>
          <li>
            Information you share if you contact us by phone, email, or in person after using this
            site.
          </li>
        </ul>
        <p>
          This website does not require an account and does not ask you to create a login. We do not
          knowingly collect payment card details through this site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">How we use information</h2>
        <p>We use the information we receive to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to questions, prayer requests, and other messages you send us.</li>
          <li>Share information about church gatherings and ministries when you have asked us to.</li>
          <li>Operate, maintain, and improve this website.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Cookies and third-party services</h2>
        <p>
          This website may use cookies or similar technologies that help the site function. Some
          pages include content from other services, such as YouTube for live or recorded services
          and map or social media links. Those services have their own privacy practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">How long we keep information</h2>
        <p>
          We keep messages and contact details only for as long as needed to respond to you and to
          carry out ordinary church administration, unless a longer period is required by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Your choices</h2>
        <p>
          You may ask us to review, update, or delete personal information you have sent us, subject
          to any legal obligations we may have. To make a request, contact us using the details
          below.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Children</h2>
        <p>
          This website is intended for a general audience. If you believe we have received personal
          information from a child without appropriate consent, please contact us and we will take
          reasonable steps to address it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top of
          this page will reflect the latest version.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle information, please
          contact ICGC Living Word Temple, a branch of International Central Gospel Church:
        </p>
        <p>
          ICGC Living Word Temple
          <br />
          Winneba, Ghana
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

export default PrivacyPolicy;
