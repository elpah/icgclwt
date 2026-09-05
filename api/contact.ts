import { createRequire } from 'node:module';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Transporter } from 'nodemailer';

export const config = {
  runtime: 'nodejs',
  maxDuration: 10,
};

const require = createRequire(resolve(process.cwd(), 'package.json'));

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

  if (!fullName || !message) {
    return { ok: false, error: 'Name and message are required.' };
  }

  if (!email && !phone) {
    return { ok: false, error: 'Please enter an email or phone number.' };
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  return { ok: true, data: { fullName, email, phone, subject, message } };
}

const GREEN = '#006B3F';
const GOLD = '#FFD700';
const SLATE = '#334155';
const MUTED = '#64748b';
const PAGE = '#eef2f0';
const CARD = '#ffffff';
const SOFT = '#f4f7f5';
const BORDER = '#e2e8f0';
const SITE_URL = 'https://icgclivingwordtemple.com';
const PHONE_DISPLAY = '024 595 3629';
const PHONE_TEL = '+233245953629';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isSalvation(subject: string) {
  return subject.toLowerCase().includes('salvation');
}

function formatReceivedAt() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Accra',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

function renderMessageHtml(message: string) {
  const lines = message.replace(/\r\n/g, '\n').split('\n');
  const parts: string[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    parts.push(
      `<ul style="margin:8px 0 12px 18px;padding:0;color:${SLATE};font-size:15px;line-height:1.6;">${listItems.join('')}</ul>`
    );
    listItems = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith('- ')) {
      listItems.push(`<li style="margin:0 0 4px;">${escapeHtml(line.slice(2))}</li>`);
      continue;
    }
    flushList();
    parts.push(
      `<p style="margin:0 0 10px;color:${SLATE};font-size:15px;line-height:1.65;">${escapeHtml(line)}</p>`
    );
  }
  flushList();

  return (
    parts.join('') ||
    `<p style="margin:0;color:${SLATE};font-size:15px;">No message provided.</p>`
  );
}

function emailChrome(options: {
  title: string;
  eyebrow: string;
  heading: string;
  intro: string;
  bodyHtml: string;
  introMuted?: boolean;
  actionHref?: string;
  actionLabel?: string;
}) {
  const action =
    options.actionHref && options.actionLabel
      ? `<tr>
              <td style="padding:24px 32px 8px;" align="center">
                <a href="${escapeHtml(options.actionHref)}" style="display:inline-block;background:${GREEN};color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:13px 28px;border-radius:999px;">
                  ${escapeHtml(options.actionLabel)}
                </a>
              </td>
            </tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(options.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${PAGE};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE};padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${CARD};border-radius:18px;overflow:hidden;border:1px solid #d9e2dc;">
            <tr>
              <td style="background:${GREEN};padding:0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="height:6px;background:${GOLD};font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding:28px 32px 26px;text-align:center;">
                      <p style="margin:0 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:${GOLD};">ICGC</p>
                      <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:#ffffff;font-weight:700;">Living Word Temple</p>
                      <p style="margin:0 auto 16px;width:56px;height:2px;background:${GOLD};font-size:0;line-height:0;">&nbsp;</p>
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#d7efe4;">${escapeHtml(options.eyebrow)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <p style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.35;color:${GREEN};">${escapeHtml(options.heading)}</p>
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:${options.introMuted ? '13px' : '15px'};line-height:1.65;color:${options.introMuted ? MUTED : SLATE};">${escapeHtml(options.intro)}</p>
              </td>
            </tr>
            ${options.bodyHtml}
            ${action}
            <tr>
              <td style="padding:28px 32px 32px;text-align:center;">
                <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:${GREEN};">ICGC Living Word Temple</p>
                <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">Winneba, Off water works road<br />Digital address: CE-030-9626<br /><a href="tel:${PHONE_TEL}" style="color:${GREEN};text-decoration:none;">${PHONE_DISPLAY}</a></p>
                <p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#94a3b8;">Sent from <a href="${SITE_URL}" style="color:${MUTED};text-decoration:none;">icgclivingwordtemple.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function detailRow(label: string, value: string, href?: string) {
  if (!value) {
    return '';
  }

  const content = href
    ? `<a href="${escapeHtml(href)}" style="color:${GREEN};text-decoration:none;font-weight:600;">${escapeHtml(value)}</a>`
    : `<span style="color:${SLATE};font-weight:600;">${escapeHtml(value)}</span>`;

  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BORDER};width:92px;vertical-align:top;font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:15px;">
        ${content}
      </td>
    </tr>
  `;
}

function buildContactEmail(data: ContactPayload) {
  const topic = data.subject || 'Website contact';
  const salvation = isSalvation(topic);
  const receivedAt = formatReceivedAt();
  const eyebrow = salvation ? 'Salvation response' : 'Website message';
  const heading = salvation
    ? 'A visitor shared a faith decision'
    : 'You have a new message';
  const inboxSubject = salvation
    ? `Salvation decision from ${data.fullName}`
    : `New message from ${data.fullName}`;

  const replyHref = data.email
    ? `mailto:${data.email}?subject=${encodeURIComponent(`Re: ${topic}`)}`
    : data.phone
      ? `tel:${PHONE_TEL}`
      : '';
  const actionLabel = data.email
    ? `Reply to ${data.fullName}`
    : data.phone
      ? `Call ${data.fullName}`
      : '';

  const text = [
    'ICGC Living Word Temple',
    eyebrow,
    '',
    heading,
    `Received: ${receivedAt}`,
    '',
    `Name: ${data.fullName}`,
    data.email ? `Email: ${data.email}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    `Subject: ${topic}`,
    '',
    data.message,
    '',
    'Winneba, Off water works road',
    'Digital address: CE-030-9626',
    PHONE_DISPLAY,
  ]
    .filter(value => value !== null)
    .join('\n');

  const html = emailChrome({
    title: inboxSubject,
    eyebrow,
    heading,
    intro: `Received ${receivedAt}`,
    introMuted: true,
    actionHref: replyHref || undefined,
    actionLabel: actionLabel || undefined,
    bodyHtml: `
            <tr>
              <td style="padding:12px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};border:1px solid ${BORDER};border-radius:14px;">
                  <tr>
                    <td style="padding:18px 20px 8px;">
                      <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">From</p>
                      <p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#0f172a;">${escapeHtml(data.fullName)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 20px 8px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        ${detailRow('Email', data.email, data.email ? `mailto:${data.email}` : undefined)}
                        ${detailRow('Phone', data.phone, data.phone ? `tel:${data.phone.replace(/\s+/g, '')}` : undefined)}
                        ${detailRow('Subject', topic)}
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 8px;">
                <p style="margin:12px 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CARD};border:1px solid ${BORDER};border-left:4px solid ${GOLD};border-radius:12px;">
                  <tr>
                    <td style="padding:18px 20px 8px;font-family:Arial,Helvetica,sans-serif;">
                      ${renderMessageHtml(data.message)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`,
  });

  return {
    subject: inboxSubject,
    text,
    html,
    fromName: 'ICGC Living Word Temple',
  };
}

function buildConfirmationEmail(data: ContactPayload) {
  const topic = data.subject || 'Website contact';
  const salvation = isSalvation(topic);
  const firstName = data.fullName.split(/\s+/)[0] || data.fullName;
  const heading = `Thank you, ${firstName}`;
  const intro = salvation
    ? 'We have received your response. Someone from ICGC Living Word Temple will get back to you as soon as we can.'
    : 'We have received your message and will get back to you as soon as we can.';
  const inboxSubject = salvation
    ? 'We received your message to ICGC Living Word Temple'
    : 'We received your message';

  const text = [
    'ICGC Living Word Temple',
    heading,
    '',
    intro,
    '',
    topic ? `Subject: ${topic}` : null,
    data.message ? `Your message:\n${data.message}` : null,
    '',
    'Sunday Service: 8:00 AM - 10:30 AM',
    'Thursday Teaching Service: 6:00 PM',
    '',
    'Winneba, Off water works road',
    'Digital address: CE-030-9626',
    PHONE_DISPLAY,
  ]
    .filter(value => value !== null)
    .join('\n');

  const html = emailChrome({
    title: inboxSubject,
    eyebrow: 'Message received',
    heading,
    intro,
    actionHref: SITE_URL,
    actionLabel: 'Visit our website',
    bodyHtml: `
            <tr>
              <td style="padding:12px 32px 8px;">
                <p style="margin:8px 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">Your message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};border:1px solid ${BORDER};border-left:4px solid ${GOLD};border-radius:12px;">
                  <tr>
                    <td style="padding:18px 20px 8px;font-family:Arial,Helvetica,sans-serif;">
                      ${topic ? `<p style="margin:0 0 10px;color:${MUTED};font-size:13px;"><strong style="color:${SLATE};">Subject:</strong> ${escapeHtml(topic)}</p>` : ''}
                      ${renderMessageHtml(data.message)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CARD};border:1px solid ${BORDER};border-radius:14px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">Join us</p>
                      <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${SLATE};">Sunday Service: 8:00 AM - 10:30 AM</p>
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${SLATE};">Thursday Teaching Service: 6:00 PM</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`,
  });

  return {
    subject: inboxSubject,
    text,
    html,
    fromName: 'ICGC Living Word Temple',
  };
}

function applyLocalEnvFile() {
  if (process.env.VERCEL) {
    return;
  }

  const filePath = resolve(process.cwd(), '.env');
  if (!existsSync(filePath)) {
    return;
  }

  for (const raw of readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || !line.includes('=')) {
      continue;
    }

    const separator = line.indexOf('=');
    const key = line.slice(0, separator).trim();
    if (!key) {
      continue;
    }

    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

type SmtpTarget = {
  host: string;
  port: number;
  secure: boolean;
};

const ZOHO_SMTP_HOSTS = [
  'smtp.zoho.com',
  'smtppro.zoho.com',
  'smtp.zoho.eu',
  'smtppro.zoho.eu',
  'smtp.zoho.in',
  'smtppro.zoho.in',
];

function siblingZohoHost(host: string) {
  if (host.startsWith('smtppro.')) {
    return host.replace('smtppro.', 'smtp.');
  }
  if (host.startsWith('smtp.')) {
    return host.replace('smtp.', 'smtppro.');
  }
  return '';
}

function smtpTargets(preferred: SmtpTarget): SmtpTarget[] {
  const hosts = [preferred.host, siblingZohoHost(preferred.host), ...ZOHO_SMTP_HOSTS].filter(Boolean);
  const uniqueHosts = [...new Set(hosts)];
  const ports: Array<Pick<SmtpTarget, 'port' | 'secure'>> = [
    { port: preferred.port, secure: preferred.port === 465 || preferred.secure },
    { port: 465, secure: true },
    { port: 587, secure: false },
  ];
  const seen = new Set<string>();
  const targets: SmtpTarget[] = [];

  for (const host of uniqueHosts) {
    for (const option of ports) {
      const key = `${host}:${option.port}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      targets.push({ host, port: option.port, secure: option.port === 465 });
    }
  }

  return targets;
}

function getMailConfig() {
  applyLocalEnvFile();
  const user = process.env.ZOHO_SMTP_USER?.trim() ?? '';
  const pass = (process.env.ZOHO_SMTP_PASS ?? '').trim().replace(/\s+/g, '');
  const host = process.env.ZOHO_SMTP_HOST?.trim() || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const secure = (process.env.ZOHO_SMTP_SECURE ?? 'true').toLowerCase() !== 'false';
  const from = process.env.ZOHO_MAIL_FROM?.trim() || user;
  const toList = parseAddressList(
    [process.env.CONTACT_MAIL_TO, process.env.CONTACT_MAIL_CC].filter(Boolean).join(',')
  );
  const to = toList.length ? toList.join(', ') : user;

  return { user, pass, host, port, secure, from, to };
}

function parseAddressList(value: string) {
  return [
    ...new Set(
      value
        .split(/[,;]/)
        .map(address => address.trim())
        .filter(address => EMAIL_PATTERN.test(address))
    ),
  ];
}

export function isMailConfigured() {
  const { user, pass, from, to } = getMailConfig();
  return Boolean(user && pass && from && to);
}

export function logMailError(error: unknown, target?: SmtpTarget) {
  const config = getMailConfig();
  const code =
    error && typeof error === 'object' && 'code' in error ? String(error.code) : '';
  const responseCode =
    error && typeof error === 'object' && 'responseCode' in error
      ? String(error.responseCode)
      : '';
  const message = error instanceof Error ? error.message : 'Unknown mail error';
  console.error(
    `[contact-mail] send failed host=${target?.host ?? config.host} port=${target?.port ?? config.port} code=${code} smtp=${responseCode} message=${message.slice(0, 180)}`
  );
}

function loadNodemailer() {
  const nodemailer = require('nodemailer') as {
    createTransport: (options: Record<string, unknown>) => Transporter;
    default?: { createTransport: (options: Record<string, unknown>) => Transporter };
  };
  const createTransport = nodemailer.createTransport ?? nodemailer.default?.createTransport;
  if (!createTransport) {
    throw new Error('Nodemailer is unavailable.');
  }
  return createTransport;
}

function createTransporter(
  mailConfig: ReturnType<typeof getMailConfig>,
  target: SmtpTarget
) {
  return loadNodemailer()({
    host: target.host,
    port: target.port,
    secure: target.secure,
    requireTLS: target.port === 587,
    family: 4,
    auth: { user: mailConfig.user, pass: mailConfig.pass },
    connectionTimeout: 8_000,
    greetingTimeout: 8_000,
    socketTimeout: 12_000,
  });
}

let cachedSmtpTarget: SmtpTarget | null = null;

function vercelSmtpTargets(preferred: SmtpTarget): SmtpTarget[] {
  const hosts = [preferred.host, siblingZohoHost(preferred.host)].filter(Boolean);
  const seen = new Set<string>();
  const targets: SmtpTarget[] = [];

  for (const host of hosts) {
    for (const option of [
      { port: preferred.port || 465, secure: (preferred.port || 465) === 465 },
      { port: 465, secure: true },
      { port: 587, secure: false },
    ]) {
      const key = `${host}:${option.port}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      targets.push({ host, port: option.port, secure: option.port === 465 });
    }
  }

  return targets;
}

async function sendWithFallback(
  mailConfig: ReturnType<typeof getMailConfig>,
  message: Parameters<Transporter['sendMail']>[0]
) {
  const preferred = {
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
  };
  const targets = process.env.VERCEL
    ? vercelSmtpTargets(preferred)
    : cachedSmtpTarget
      ? [cachedSmtpTarget]
      : smtpTargets(preferred);

  let lastError: unknown;
  let lastTarget: SmtpTarget | undefined;

  for (const target of targets) {
    try {
      const transporter = createTransporter(mailConfig, target);
      await transporter.sendMail(message);
      cachedSmtpTarget = target;
      return;
    } catch (error) {
      lastError = error;
      lastTarget = target;
      const messageText = error instanceof Error ? error.message : '';
      const wrongServer = messageText.includes('Access Restricted');
      const authFailed =
        error && typeof error === 'object' && 'code' in error && error.code === 'EAUTH';
      if (authFailed && !wrongServer) {
        break;
      }
    }
  }

  logMailError(lastError, lastTarget);
  throw lastError instanceof Error ? lastError : new Error('SMTP connection failed.');
}

export async function sendContactEmail(data: ContactPayload) {
  if (!isMailConfigured()) {
    throw new Error('Email is not configured yet.');
  }

  const mailConfig = getMailConfig();
  const { from, to } = mailConfig;
  const email = buildContactEmail(data);

  await sendWithFallback(mailConfig, {
    from: {
      name: email.fromName,
      address: from,
    },
    to,
    replyTo: data.email || from,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (!data.email) {
    return;
  }

  try {
    const confirmation = buildConfirmationEmail(data);
    await sendWithFallback(mailConfig, {
      from: {
        name: confirmation.fromName,
        address: from,
      },
      to: data.email,
      replyTo: from,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch (error) {
    logMailError(error);
  }
}

type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

function readRequestBody(body: unknown) {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as unknown;
    } catch {
      return body;
    }
  }

  return body;
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const parsed = parseContactPayload(readRequestBody(req.body));
    if (!parsed.ok) {
      res.status(400).json({ error: parsed.error });
      return;
    }

    if (!isMailConfigured()) {
      res.status(503).json({ error: 'Email is not configured yet.' });
      return;
    }

    await sendContactEmail(parsed.data);
    res.status(200).json({ ok: true });
  } catch (error) {
    logMailError(error);
    res.status(500).json({ error: 'We could not send your message. Please try again.' });
  }
}
