# Career Plus Group — website

Iteration 1. A static, lead-generation site covering two divisions and five
business lines, built so that adding a sixth business line is a content edit
rather than a development task.

Built with [Astro](https://astro.build). Output is plain static HTML — it will
run on GitHub Pages, Cloudflare Pages, Netlify, or any shared host.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321/career-plus-group
```

Other commands:

```bash
npm run build    # static output into dist/
npm run preview  # serve the built output exactly as it will deploy
```

> Note the `/career-plus-group` in the dev URL. That is the GitHub Pages
> sub-path, set as `base` in `astro.config.mjs`. When you move to the real
> domain, set `base: '/'` and it disappears.

---

## Before your first push — two edits

**1. `astro.config.mjs`** — replace `USERNAME` with your GitHub username:

```js
site: 'https://YOUR-USERNAME.github.io',
base: '/career-plus-group',
```

If you name the repository something other than `career-plus-group`, `base`
must match the repository name exactly.

**2. `src/data/site.ts`** — phone, WhatsApp, email and address are placeholders.
The WhatsApp link needs the number in international format with no symbols:
`https://wa.me/919876543210`.

---

## Deploying to GitHub Pages

```bash
cd career-plus-group
git init
git add .
git commit -m "Career Plus Group website, iteration 1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/career-plus-group.git
git push -u origin main
```

Then, once only: on GitHub go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**.

Every push to `main` now rebuilds and redeploys automatically. The site lands at
`https://YOUR-USERNAME.github.io/career-plus-group`.

If the first deploy 404s, it is almost always a `base` mismatch — the value in
`astro.config.mjs` must equal the repository name.

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

Two options, both about ten minutes of work:

**Formspree** (works on GitHub Pages). Create a form, then in
`EnquiryForm.astro` replace the block marked `DEMO MODE` with:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(data),
});
```

**Netlify** or **Cloudflare Pages** — both have built-in form handling and free
custom-domain SSL, and neither needs a third-party service. If the site is
moving to the real domain anyway, this is the better path.

Routing by service type (sending each enquiry to the right internal team) is
configured in whichever service you pick, keyed on the `service` field the form
already sends.

---

## Moving to the real domain

1. Set `site: 'https://careerplusgroup.in'` and `base: '/'` in
   `astro.config.mjs`.
2. Add a `public/CNAME` file containing just the domain name.
3. Point the domain's DNS at the host, and enable HTTPS.

GitHub Pages supports custom domains with free certificates, so you can stay put.
Cloudflare Pages or Netlify are worth considering instead once forms need a
backend — same push-to-deploy workflow, plus form handling and preview builds
for every branch.

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
