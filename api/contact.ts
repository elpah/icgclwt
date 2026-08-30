import {
  isMailConfigured,
  parseContactPayload,
  sendContactEmail,
} from '../server/contactMail';

type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status: (code: number) => { json: (body: unknown) => void };
};

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const parsed = parseContactPayload(req.body);
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
  } catch {
    res.status(500).json({ error: 'We could not send your message. Please try again.' });
  }
}
