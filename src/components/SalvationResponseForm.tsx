import { FormEvent, useState } from 'react';

const INTERESTS = [
  'I have given my life to Christ',
  'I have recommitted my life to Christ',
  'I have questions about faith',
  'I would like someone to pray with me',
  'I would like someone to contact me',
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SalvationResponseForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get('fullName') ?? '').trim();
    const contact = String(formData.get('contact') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const interests = formData.getAll('interest').map(value => String(value));
    const wantsContact = formData.get('requestContact') === 'on';

    if (!fullName) {
      setStatus('error');
      setFeedback('Please enter your name.');
      return;
    }

    if (!contact) {
      setStatus('error');
      setFeedback('Please enter your email or phone number.');
      return;
    }

    const isEmail = EMAIL_PATTERN.test(contact);
    const email = isEmail ? contact : '';
    const phone = isEmail ? '' : contact;

    const composedMessage = [
      interests.length ? `I would like to:\n${interests.map(item => `- ${item}`).join('\n')}` : null,
      wantsContact ? 'Please have someone from ICGC Living Word Temple contact me.' : null,
      message ? `Message:\n${message}` : null,
    ]
      .filter(Boolean)
      .join('\n\n');

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          subject: 'Salvation decision',
          message: composedMessage || 'A visitor shared a decision or question about faith.',
        }),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setStatus('error');
        setFeedback(result?.error || 'We could not send your message. Please try again.');
        return;
      }

      form.reset();
      setStatus('success');
      setFeedback('');
    } catch {
      setStatus('error');
      setFeedback('We could not send your message. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Thank You for Reaching Out
        </h3>
        <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
          We are grateful you shared this decision with us. Someone from ICGC Living Word Temple
          will be happy to connect with you and help you take your next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="salvation-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Name <span className="text-[#006B3F]">*</span>
          </label>
          <input
            id="salvation-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/30 focus:border-[#006B3F]"
          />
        </div>

        <div>
          <label htmlFor="salvation-contact" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Email or Phone <span className="text-[#006B3F]">*</span>
          </label>
          <input
            id="salvation-contact"
            name="contact"
            type="text"
            autoComplete="tel"
            required
            placeholder="Your email or phone number"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/30 focus:border-[#006B3F]"
          />
        </div>

        <fieldset>
          <legend className="block text-sm font-semibold text-slate-900 mb-2.5">
            I would like to:
          </legend>
          <div className="space-y-2.5">
            {INTERESTS.map(option => (
              <label key={option} className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="interest"
                  value={option}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#006B3F] focus:ring-[#006B3F]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="salvation-message" className="block text-sm font-semibold text-slate-900 mb-1.5">
            Message
          </label>
          <textarea
            id="salvation-message"
            name="message"
            rows={4}
            placeholder="Tell us anything you'd like us to know or how we can pray for you."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/30 focus:border-[#006B3F] resize-y"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            name="requestContact"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#006B3F] focus:ring-[#006B3F]"
          />
          <span>I would like someone from ICGC Living Word Temple to contact me.</span>
        </label>

        {status === 'error' && feedback ? (
          <p className="text-sm text-red-600" role="alert">
            {feedback}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="cursor-pointer w-full sm:w-auto bg-[#006B3F] hover:bg-emerald-800 disabled:opacity-70 text-white px-7 py-3 rounded-full font-semibold text-sm min-h-12 inline-flex items-center justify-center transition-colors duration-300"
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default SalvationResponseForm;
