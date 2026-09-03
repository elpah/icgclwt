import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import nodemailer from 'nodemailer';
import { buildConfirmationEmail, buildContactEmail } from './contactEmail';

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

function createTransporter(
  config: ReturnType<typeof getMailConfig>,
  target: SmtpTarget
) {
  return nodemailer.createTransport({
    host: target.host,
    port: target.port,
    secure: target.secure,
    requireTLS: target.port === 587,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 8_000,
    greetingTimeout: 8_000,
    socketTimeout: 12_000,
  });
}

let cachedSmtpTarget: SmtpTarget | null = null;

async function getWorkingTransporter(config: ReturnType<typeof getMailConfig>) {
  if (cachedSmtpTarget) {
    return {
      transporter: createTransporter(config, cachedSmtpTarget),
      target: cachedSmtpTarget,
    };
  }

  let lastError: unknown;
  let lastTarget: SmtpTarget | undefined;

  for (const target of smtpTargets({
    host: config.host,
    port: config.port,
    secure: config.secure,
  })) {
    const transporter = createTransporter(config, target);
    try {
      await transporter.verify();
      cachedSmtpTarget = target;
      console.info(`[contact-mail] connected ${target.host}:${target.port}`);
      return { transporter, target };
    } catch (error) {
      lastError = error;
      lastTarget = target;
      const message = error instanceof Error ? error.message : '';
      const wrongServer = message.includes('Access Restricted');
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

  const config = getMailConfig();
  const { from, to } = config;
  const email = buildContactEmail(data);
  const { transporter } = await getWorkingTransporter(config);

  await transporter.sendMail({
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
    await transporter.sendMail({
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

  try {
    await sendContactEmail(parsed.data);
    res.status(200).json({ ok: true });
  } catch (error) {
    logMailError(error);
    res.status(500).json({ error: 'We could not send your message. Please try again.' });
  }
}
