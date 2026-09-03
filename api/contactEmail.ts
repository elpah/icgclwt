type ContactEmailData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

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
      listItems.push(
        `<li style="margin:0 0 4px;">${escapeHtml(line.slice(2))}</li>`
      );
      continue;
    }
    flushList();
    parts.push(
      `<p style="margin:0 0 10px;color:${SLATE};font-size:15px;line-height:1.65;">${escapeHtml(line)}</p>`
    );
  }
  flushList();

  return parts.join('') || `<p style="margin:0;color:${SLATE};font-size:15px;">No message provided.</p>`;
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

export function buildContactEmail(data: ContactEmailData) {
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
  const actionLabel = data.email ? `Reply to ${data.fullName}` : data.phone ? `Call ${data.fullName}` : '';

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

export function buildConfirmationEmail(data: ContactEmailData) {
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
