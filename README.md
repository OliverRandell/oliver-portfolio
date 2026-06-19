# Oliver Randell — Portfolio

Next.js (App Router) + TypeScript + Tailwind v4. Built fresh — no template, no UI kit, no database.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Site structure

```
/              Hero, two featured case studies, testimonials, CTA
/case-studies  Every case study, newest first
/case-studies/[slug]   Dedicated template — renders whatever sections exist
/about         Bio + the scroll-animated experience timeline
/contact       Mailto-based form for now (see "Wiring up contact" below)
```

## Before you ship it

1. **Case study content** — `lib/case-studies.ts` is the single source of
   truth for all four case studies. Candella is fully written; the other
   three (`sesimi-saas-platform-rebuild`, `onboarding-workflow-sesimi`,
   `upcycle-circular-commerce`) only have summaries. Each has a `// TODO`
   comment — paste in `role` / `challenge` / `approach` / `outcome` /
   `reflection` arrays (same shape as Candella's) and the detail page picks
   them up automatically. Fields left out just don't render — no broken
   layout either way.
2. **Featured pair** — each case study has a `featured: boolean`. Exactly
   two should be `true` at a time; those are what show on Home. Sesimi +
   Candella are flagged now. Re-flag a different pair any time you're
   targeting a different kind of role — no code changes beyond that one
   field.
3. **Project images** — there's nowhere to drop case study cover images yet
   (none were available when this was built — only screenshots of your live
   site, which aren't clean source files). Export the originals from your
   Webflow asset manager, drop them in `public/images/case-studies/`, and
   add a `coverImage` field to the relevant entries in `lib/case-studies.ts`
   — I can wire the `<Image>` markup into the template fast once the files
   exist.
4. **Testimonials** — `components/Testimonials.tsx` has the real Hooman
   Dehkordi quote plus one placeholder slot. Add more the same way.
5. **LinkedIn URL** — used in `Footer.tsx` and `app/contact/page.tsx`.
   Currently `linkedin.com/in/oliverrandell` — confirm or correct.

## Wiring up a real contact form

Right now "Send message" builds a `mailto:` link and opens the visitor's
email client — works with zero backend, but it's not a true form
submission. When you want one: sign up for an email-sending service (Resend
is the easiest Vercel pairing), add `RESEND_API_KEY` as a Vercel
environment variable, and replace the `mailto:` logic in
`components/ContactForm.tsx` with a fetch to a new
`app/api/contact/route.ts` route handler. That's a 20-minute job once you
have the account — flag it when you're ready and we'll do it together.

## Design system

All tokens live in `app/globals.css` under `@theme`:

- `--color-paper` / `--color-ink` — background and text
- `--color-accent` — the plum (`#6b3460`)
- `--font-serif` — Cormorant Garamond (headings)
- `--font-sans` — Inter (everything else)

## Deploying to oliverrandell.com

Push to a GitHub repo, import it in Vercel, point your domain's DNS at it.
No environment variables needed for the current (mailto) version of Contact.
