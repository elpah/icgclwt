import nodemailer from 'nodemailer';

export type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function parseContactPayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Please fill in the form and try again.' };
  }

  const fields = body as Record<string, unknown>;
  const fullName = asString(fields.fullName).slice(0, 100);
  const email = asString(fields.email).slice(0, 200);
  const phone = asString(fields.phone).slice(0, 40);
  const subject = asString(fields.subject).slice(0, 150);
  const message = asString(fields.message).slice(0, 4000);

  if (!fullName || !email || !message) {
    return { ok: false, error: 'Name, email, and message are required.' };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  return { ok: true, data: { fullName, email, phone, subject, message } };
}

function getMailConfig() {
  const user = process.env.ZOHO_SMTP_USER?.trim() ?? '';
  const pass = process.env.ZOHO_SMTP_PASS?.trim() ?? '';
  const host = process.env.ZOHO_SMTP_HOST?.trim() || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const secure = (process.env.ZOHO_SMTP_SECURE ?? 'true').toLowerCase() !== 'false';
  const from = process.env.ZOHO_MAIL_FROM?.trim() || user;
  const to = process.env.CONTACT_MAIL_TO?.trim() || user;

  return { user, pass, host, port, secure, from, to };
}

export function isMailConfigured() {
  const { user, pass, from, to } = getMailConfig();
  return Boolean(user && pass && from && to);
}

export async function sendContactEmail(data: ContactPayload) {
  if (!isMailConfigured()) {
    throw new Error('Email is not configured yet.');
  }

  const { user, pass, host, port, secure, from, to } = getMailConfig();
  const topic = data.subject || 'Website contact';

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const text = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Subject: ${topic}`,
    '',
    data.message,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
    <p><strong>Subject:</strong> ${escapeHtml(topic)}</p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: `Contact form: ${topic}`,
    text,
    html,
  });
}
