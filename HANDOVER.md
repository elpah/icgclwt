# ICGC Living Word Temple website handover

**Date:** 3 September 2026  
**Site:** https://icgclivingwordtemple.com  
**Also:** https://www.icgclivingwordtemple.com

This note is for the church and anyone who will maintain the site. There is no login and no admin dashboard. Public pages can be used as they are. Content, photos, and most settings live in the project files. A developer needs to edit those files and deploy for changes to go live.

---

## 1. What was delivered

A public church website for ICGC Living Word Temple, Winneba, with:

- Home page (welcome, service times, giving, contact)
- About
- Ministries (list and individual pages)
- Events and event details
- Gallery
- Watch Live (YouTube, with Facebook as a second option)
- Give
- Give Your Life to Christ
- Contact
- Privacy Policy and Terms of Service

The live site is hosted on **Vercel**. The mailbox used by the forms is **Zoho Mail** (`info@icgclivingwordtemple.com`).

---

## 2. How to use the site (no technical work)

Anyone can browse the site. These are the pages people will use most.

| Page | Address | What it does |
| --- | --- | --- |
| Home | `/` | Overview, service times, giving, contact |
| About | `/about` | Church story, pastor, beliefs |
| Ministries | `/ministries` | All ministry teams |
| Events | `/events` | Upcoming gatherings |
| Gallery | `/gallery` | Photos |
| Watch Live | `/live-service` | Sunday stream on YouTube when live, plus past messages |
| Give | `/give` | Mobile Money and bank details |
| Contact | `/contact` | Address, map, form |
| Salvation | `/give-your-life-to-christ` | Response form |

### Contact and salvation forms

When someone submits **Contact** or **Give Your Life to Christ**:

1. The church gets a branded email at **info@icgclivingwordtemple.com** and **icgclwt231@gmail.com**.
2. If the visitor left an email address, they get a confirmation that the message was received.
3. The form still succeeds if the visitor confirmation cannot be sent, as long as the church copy went out.
4. If they only leave a phone number, no visitor confirmation is sent.

Replies to a church notice go back to the visitor when they left an email.

### Watch Live

- YouTube is automatic when `YOUTUBE_API_KEY` is set in Vercel. If the church is streaming, the page shows **Currently streaming**. If not, it shows that ICGC Living Word Temple is not streaming, then past messages.
- Facebook Live is **not** automatic. A developer must paste the live video URL into `src/data/liveStreamConfig.ts` (`facebook.liveVideoUrl`) and deploy.

### Giving (as published on the site)

- **Mobile Money:** 024 595 3629, ICGC Living Word Temple
- **Bank:** Ghana Commercial Bank, Winneba  
  Account name: ICGC Living Word Temple  
  Account number: 3051180000400

### Weekly gatherings (as published)

- Sunday Service: 8:00 AM - 10:30 AM
- Thursday Teaching Service: 6:00 PM
- Friday Prayer Service: 6:00 PM - 8:00 PM

### Office hours (as published)

- Monday to Friday: 9:00 AM - 5:00 PM
- Sunday: Closed (worship services)

### Church details (as published)

- Address: ICGC-Living Word Temple, Winneba, Off water works road
- Digital address: CE-030-9626
- Phone: 024 595 3629
- Email: info@icgclivingwordtemple.com
- Social: Facebook, Instagram, TikTok, YouTube (no Twitter)

---

## 3. Accounts and access the client must keep

Hand these to the person who will own the site. Do not put passwords in this file.

| Service | What it is for | Who should hold it |
| --- | --- | --- |
| Domain registrar | `icgclivingwordtemple.com` | Church / IT contact |
| Vercel | Hosting and deploys | Developer or church IT |
| GitHub (or the git remote) | Source code | Developer |
| Zoho Mail | `info@icgclivingwordtemple.com` | Church office |
| Gmail | `icgclwt231@gmail.com` (copy of form notices) | Church office |
| Google Cloud | YouTube Data API key for Watch Live | Developer |
| Facebook, Instagram, TikTok, YouTube | Social links on the site | Church media team |

On Vercel, open **Project → Settings → Environment Variables**. After you change a variable, **redeploy** so production uses the new value.

### Environment variables (production)

Use **Secret** for passwords and API keys. Use **Config** for ordinary addresses.

| Name | Purpose |
| --- | --- |
| `ZOHO_SMTP_HOST` | `smtp.zoho.com` (this mailbox is the free Zoho host, not smtppro) |
| `ZOHO_SMTP_PORT` | `465` |
| `ZOHO_SMTP_SECURE` | `true` |
| `ZOHO_SMTP_USER` | Full Zoho address, e.g. info@… |
| `ZOHO_SMTP_PASS` | Zoho password or app password if 2FA is on |
| `ZOHO_MAIL_FROM` | Same mailbox you send as |
| `CONTACT_MAIL_TO` | `info@icgclivingwordtemple.com` |
| `CONTACT_MAIL_CC` | `icgclwt231@gmail.com` |
| `YOUTUBE_API_KEY` | Google Cloud YouTube Data API v3 key |
| `YOUTUBE_CHANNEL_ID` | Optional. Starts with `UC`. Can stay empty. |
| `YOUTUBE_CHANNEL_HANDLE` | Optional. Defaults to `icgclwt`. |
| `YOUTUBE_PLAYLIST_ID` | Optional. Can stay empty. The site uses recent uploads. |

Do not add a variable that already exists. Edit the existing row instead.

Local development uses a `.env` file copied from `.env.example`. Never commit `.env`.

---

## 4. How a developer updates content

There is no CMS. Edit files, then deploy.

### Common files

| If you need to change | Edit |
| --- | --- |
| Address, digital address, social URLs | `src/data/churchInfo.ts` |
| About / pastor copy | `src/data/aboutData.ts` and related About components |
| Ministries (names, leaders, meetings) | `src/data/MinistriesData.ts` |
| Ministry photos | Folders under `src/assets/images/` (see table below) |
| Events | `src/data/upcomingEventsData.ts` |
| Gallery | `src/data/galleryData.ts` |
| Giving numbers | `src/components/GivingSection.tsx` |
| Facebook live URL | `src/data/liveStreamConfig.ts` |
| Contact / salvation emails | `api/contact.ts` |
| Watch Live API | `api/youtube.ts` |

### Ministry photo folders

Put images in `src/assets/images/<folder>/`. Name the header file `cover.jpg` (or `*_cover.jpg`). Other files in the folder become the gallery.

| Folder | Ministry page |
| --- | --- |
| `musicmedia` | Music and Media |
| `children` | Children |
| `men` | Men |
| `pvv` | Women |
| `newbreed` | Youth (New Breed) |
| `outreach` | Outreach |
| `intercessory` | Intercessory |
| `ushering` | Ushering |
| `welfare` | Welfare |
| `family` | Family Life |
| `eventpublicity` | Events |
| `projects` | Projects |
| `administration` | Administration |

**Traffic and Security** has no photo folder yet. Pages without photos show a colour card and icon only.

Old ministry URLs `/ministries/worship` and `/ministries/media` redirect to Music and Media.

### Local commands

```bash
npm install
npm run dev
```

Open the local URL Vite prints (often `http://localhost:5173`). Contact and YouTube APIs run through Vite using `.env`.

```bash
npm run build
```

### Deploy

Push to the branch Vercel is connected to (usually `main`). Vercel builds and publishes. After env var changes, trigger a Redeploy in the Vercel dashboard.

---

## 5. How the technical pieces fit

- **Frontend:** React, TypeScript, Vite, Tailwind, React Router.
- **Hosting:** Vercel. `vercel.json` sends all non-`/api` routes to the single-page app.
- **Contact API:** `POST /api/contact` in `api/contact.ts`. Sends through Zoho SMTP. Church notice goes to info@ and Gmail. Visitor confirmation is separate and must not fail the form.
- **YouTube API:** `GET /api/youtube` in `api/youtube.ts`. Needs `YOUTUBE_API_KEY`.

Do not try to send mail from the browser. SMTP only runs on the server.

---

## 6. Known limits and follow-ups

1. **No admin panel.** Text and photos need a code change and a deploy.
2. **Facebook Live** needs a manual video URL when you want Facebook on Watch Live.
3. **YouTube API quota.** Google caps Search queries per day. If Watch Live cannot load past messages, check the Google Cloud quota or wait for it to reset. The API key must stay valid.
4. **Some ministries have no photos** (including Traffic and Security, and any folder that was never filled).
5. **Zoho host.** This mailbox uses `smtp.zoho.com`, not `smtppro.zoho.com`. Using the Pro host returns Access Restricted.
6. **Vercel env vars.** Names that already exist cannot be added again. Edit them. Passwords should be type Secret.
7. **Contact function** must stay a single file (`api/contact.ts`). Extra sibling imports were not included in the Vercel function bundle.

---

## 7. Quick checks after handover

- [ ] Open https://icgclivingwordtemple.com and click through Home, About, Ministries, Events, Gallery, Give, Contact, Watch Live, Salvation.
- [ ] Submit the contact form with a real email you control. Confirm the church notice in info@ and Gmail, and the confirmation in the visitor inbox.
- [ ] Confirm giving details (MoMo and bank) match church records.
- [ ] Confirm Watch Live shows the church YouTube channel when not streaming, and the player when a service is live.
- [ ] Confirm Vercel, Zoho, Google Cloud, and the git remote are in church-controlled accounts, not a personal account that will be lost.

---

## 8. Support

For content (copy, photos, events), send the change to whoever maintains the repository. For email or Watch Live outages, check Vercel logs for `/api/contact` and `/api/youtube`, then the Zoho mailbox and the YouTube API key.
