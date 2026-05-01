# DeskDrop Site

Marketing site for [thedeskdrop.com](https://thedeskdrop.com). DeskDrop sends custom branded chocolate gift jars to prospects' desks to break through inbox fatigue and drive replies on cold outbound.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript
- Resend (transactional email for the contact form)
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Site runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — Resend API key for the contact form. Get one at [resend.com/api-keys](https://resend.com/api-keys).
- `CONTACT_TO_EMAIL` — recipient address for contact-form submissions (defaults to `eyn@thedeskdrop.com`).
- `CONTACT_FROM_EMAIL` — verified sender for Resend (defaults to `noreply@thedeskdrop.com` — must be on a Resend-verified domain).

## Project layout

```
app/
├── components/      shared UI (Navigation, Footer, Hero, etc.)
├── hooks/           reusable React hooks (useScrollReveal)
├── actions/         server actions (sendContact)
├── how-it-works/    page routes follow the URL structure
├── pricing/
├── product/         /product/{gifts,customization,features,packaging}
├── solutions/       /solutions/{prospect-gifting,abm,custom}
├── use-case/        /use-case/{marketing,sales,revenue}
├── resources/       /resources/{blog,customers,help}
├── sample/          recipient landing page
├── layout.tsx       root layout + global metadata
└── page.tsx         home
public/
├── images/          product photography, customer logos, wordmarks
└── favicon.ico
```

## Deploy

Deploys to Vercel on push to `main`. The first deploy needs:

1. `vercel link` — create the Vercel project
2. Add env vars in the Vercel dashboard
3. Point `thedeskdrop.com` (and `www.thedeskdrop.com`) at the Vercel deployment
