# Career Plus Group — website

Iteration 1. A static, lead-generation site covering two divisions and five
business lines, built so that adding a sixth business line is a content edit
rather than a development task.

Built with [Astro](https://astro.build). Output is plain static HTML. It is
deployed on Cloudflare Pages at [careerplusgroup.org](https://careerplusgroup.org)
and will run on any static host.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:

```bash
npm run build    # static output into dist/
npm run preview  # serve the built output exactly as it will deploy
```

---

## Deploying

Push to `main`. Cloudflare Pages is connected to this repository, runs
`npm run build`, and publishes `dist/`. There is no deploy workflow in the repo
and nothing to upload by hand.

Build settings on the Cloudflare side, for reference:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Environment variables | none |

Node is pinned to 22 by `.nvmrc`, because Cloudflare's default differs between
their build images.

`public/_headers` carries the caching and security headers. The www to apex
redirect is a Cloudflare dashboard rule rather than a `_redirects` entry, since
that file format cannot match on hostname.

### The site is not indexed yet

`public/robots.txt` disallows everything and `src/layouts/Base.astro` sends a
`noindex` tag. They do different jobs, so both come off together, and not before
the enquiry form reaches a real inbox.

---

## Project structure

```
src/
├── data/
│   ├── site.ts            Group identity, contact, divisions, partners
│   └── verticals.ts       ← ALL FIVE BUSINESS LINES LIVE HERE
├── layouts/Base.astro     HTML shell, fonts, header/footer
├── components/
│   ├── Header.astro       Sticky header with two-division mega-menu
│   ├── Footer.astro       Footer sitemap
│   ├── VerticalPage.astro The eight-block vertical template
│   └── EnquiryForm.astro  One form, conditional field groups per service
├── pages/
│   ├── index.astro        Homepage
│   ├── [slug].astro       ← generates every division hub AND vertical page
│   ├── about.astro
│   ├── contact.astro
│   └── 404.astro
└── styles/global.css      Design tokens and all component styles
```

`[slug].astro` is the important one. It reads `verticals.ts` and generates
seven pages. There is no per-vertical page file and there should never be one.

---

## Adding a sixth business line

The extensibility test from the architecture plan: *if we add a vertical
tomorrow, does it need a developer?* It does not.

1. Open `src/data/verticals.ts`.
2. Copy any existing vertical object and edit the fields.
3. Add its `formVariant` string as an `<option>` and a `<div data-group="...">`
   fieldset in `EnquiryForm.astro` if it needs bespoke fields.
4. Save.

The landing page, both nav menus, the footer, the homepage card grid, the
division hub, breadcrumbs and the FAQ schema all update themselves.

If the new line does not fit either existing division, add a third division to
`divisions` in `site.ts` — the mega-menu and footer grow to fit.

---

## Wiring up the form

The form currently validates properly but has no backend — a static site cannot
receive a POST. On submit it logs the payload to the browser console and shows a
confirmation. That is fine for showing the site internally; it is not fine for
launch.

Note that **Cloudflare Pages has no built-in form handling**. Netlify does;
Cloudflare does not, so hosting here means picking one of these:

**A form service.** Formspree, Web3Forms and similar. Replace the block marked
`DEMO MODE` in `EnquiryForm.astro` with:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(data),
});
```

Fastest path, and the free tiers cap monthly submissions.

**A Pages Function.** Add `functions/api/enquiry.ts` to this repo and POST to
`/api/enquiry`. Cloudflare deploys it alongside the site with no extra service
to sign up for, but it still needs an email provider (Resend, Postmark) to
actually deliver the message, since a Worker cannot send mail by itself.

Either way, routing each enquiry to the right internal team keys on the
`service` field the form already sends. That needs a destination per business
line from the client before it can be built.

---

## The domain

`careerplusgroup.org`, registered through ResellerClub, with DNS on Cloudflare
and the site on Cloudflare Pages. HTTPS is issued automatically.

The www to apex redirect is a Cloudflare Redirect Rule, not a `_redirects`
entry: that file format cannot match on hostname.

---

## Not in this iteration

Deliberately deferred so the first version could be shown quickly:

- Resources / blog hub and article template
- Property listings CMS and the property detail template
- The five loan product child pages, country pages, travel theme pages
- The B2C home-machines sub-page under alkaline water
- EMI and stamp duty calculators
- Privacy policy and terms pages
- Real logo files, partner logos, testimonials, photography

Everything marked `TODO(client)` in `src/data/site.ts` or shown with a
"pending" badge on the site is waiting on information from the client.
