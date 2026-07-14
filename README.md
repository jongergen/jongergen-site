# jongergen.com

A Next.js author site for Jon Gergen, built with the App Router, TypeScript,
and Tailwind CSS. Structured around two "chapters": the memoir and the
ten-book children's series.

## What's here

```
app/
  page.tsx                    Home
  about/page.tsx              About
  memoir/page.tsx             The memoir
  childrens-series/page.tsx   The children's series (reads from lib/books.ts)
  in-the-works/page.tsx       In the works (upcoming/early-stage projects)
  musings/page.tsx            Musings list (reads from lib/posts.ts)
  musings/[slug]/page.tsx     Individual musing/post page
  contact/page.tsx            Contact form
  api/contact/route.ts        Contact form submission handler (stub)
  api/subscribe/route.ts      Newsletter signup handler (stub)
components/                   Shared UI (header, footer, cards, forms)
lib/books.ts                  Editable data for the ten book titles/blurbs
lib/posts.ts                  Editable data for Musings posts
```

Navigation is grouped: **Books** is a dropdown (Memoir, Children's Series,
In the Works), alongside **Musings**, **About**, and **Contact**. Farm
writing doesn't get its own tab — it lives in Musings, tagged by topic.

To add a new Musings post, copy an entry in `lib/posts.ts`, give it a
unique `slug`, and fill in the fields. No new file or route needed.

Every placeholder is marked with a `TODO` comment — search the project for
`TODO` to find every spot that needs your real content (bio, synopses, book
titles, photo).

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18 or later installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edit any file and the page updates live.

## 2. Put it on GitHub

Vercel deploys straight from a GitHub repo, so create one first:

```bash
git init
git add .
git commit -m "Initial site"
```

Create a new empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/jongergen-site.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel (free tier)

1. Go to https://vercel.com and sign up/log in (GitHub login is easiest).
2. Click **Add New → Project**, and import the GitHub repo you just pushed.
3. Vercel auto-detects Next.js — leave the defaults and click **Deploy**.
4. You'll get a live URL like `jongergen-site.vercel.app` within a minute.

Every future `git push` to `main` automatically redeploys the live site.

## 4. Connect your Porkbun domains

You own `jongergen.com` and `jongergen.net`. The site above treats `.com`
as the primary domain, with `.net` redirecting to it. Vercel's free tier
supports custom domains, including this kind of redirect, at no extra cost.

**In Vercel:**
1. Open your project → **Settings → Domains**.
2. Add `jongergen.com`. Vercel will show DNS records to add (usually an
   `A` record pointing to `76.76.21.21` and/or a `CNAME` for `www`).
3. Add `jongergen.net` as well, and set it to **redirect** to
   `jongergen.com` (Vercel gives you this option right in the Domains UI
   when you add a second domain).

**In Porkbun**, for each domain:
1. Log in → **Account → Domain Management** → select the domain →
   **DNS Records**.
2. Add the records Vercel showed you (delete any conflicting default
   `A`/`CNAME` records first).
3. DNS changes can take anywhere from a few minutes to a few hours to
   propagate.

Vercel automatically issues free HTTPS certificates for both domains once
DNS is pointed correctly — no extra steps needed.

## 5. Wire up real email and newsletter signups (optional but recommended)

Right now, the contact form and newsletter signup work and won't error,
but they only log submissions — they don't actually send you an email or
add anyone to a list yet. Both `app/api/contact/route.ts` and
`app/api/subscribe/route.ts` have commented-out code showing how to
connect:

- **Contact form:** [Resend](https://resend.com) (free tier, simplest
  transactional email setup for Next.js).
- **Newsletter:** [ConvertKit](https://convertkit.com) or
  [Buttondown](https://buttondown.email) both have free tiers and are
  built for writers.

Once you pick a provider, sign up, get an API key, add it under Vercel →
Project Settings → Environment Variables, then uncomment the relevant
block in the route file.

## 6. Content checklist

- [ ] Replace hero tagline and bio paragraph on the home page
- [ ] Write your full bio on the About page, add a real photo to `public/`
- [ ] Fill in the memoir title, status, and synopsis
- [ ] Fill in the series title, description, and all ten books in
      `lib/books.ts`
- [ ] Fill in real projects on the In the Works page
- [ ] Replace the sample entries in `lib/posts.ts` with real Musings posts
- [ ] Update the email address and social links in `components/Footer.tsx`
- [ ] Swap the `hello@jongergen.com` address if you'd rather use something
      else
- [ ] Connect a real email/newsletter provider (see step 5)
