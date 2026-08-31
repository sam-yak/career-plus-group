/**
 * Years the PARENT SOCIETY has been operating. Single source of truth: copy
 * references `site.legacy` (or `site.yearsActive`), never a literal "30".
 *
 * SCOPE: homepage only. The group's business lines are new, so this number must
 * never appear on a vertical page or in `verticals.ts` — next to a vertical it
 * reads as "30 years of doing this", which is not true of any of them. It is
 * the society's advisory record, and it is framed that way wherever it appears.
 */
const yearsActive = 30;

export const site = {
  name: 'Career Plus Group',
  parent: 'Career Plus Educational Society',
  tagline: 'Property, finance, education and travel, under one roof.',
  positioning:
    'A group of advisory businesses that know which lender, which builder and which university fits a given profile, and stay with you until it is done.',

  yearsActive,
  /** Homepage-only credibility signal, and always tied to `parent`. See the note on `yearsActive`. */
  legacy: `${yearsActive}+ years`,

  contact: {
    /** Primary line. Used by the sticky action bar, which has room for one number. */
    phone: '+91 11 2765 4588',
    phoneHref: 'tel:+911127654588',

    /**
     * The full switchboard: two Delhi landlines, then two mobiles.
     *
     * careerplusonline.com lists the mobiles as "+91-11-9811069629". That is not
     * a dialable number: 11 is the Delhi STD code, and a mobile already carries
     * its own ten digits, so the prefixed version is twelve digits long and a
     * tel: link built from it fails. They are written correctly here. The
     * education site should be corrected to match.
     */
    phones: [
      { display: '+91 11 2765 4588', href: 'tel:+911127654588' },
      { display: '+91 11 2765 2829', href: 'tel:+911127652829' },
      { display: '+91 98110 69629', href: 'tel:+919811069629' },
      { display: '+91 98910 86435', href: 'tel:+919891086435' },
    ],

    whatsapp: '+91 93100 69778',
    whatsappHref: 'https://wa.me/919310069778',
    /* TODO(client): an @careerplusgroup.org address, created in cPanel. */
    email: 'contact@careerplusonline.com',
    address: '301/A-37-38-39, Ansal Building Commercial Complex, Dr. Mukherjee Nagar, Delhi 110009',
    hours: 'Mon–Sat, 10:00 – 19:00',
  },

  registrations: [
    { label: 'Society Reg. No.', value: 'PENDING' },
    { label: 'RERA Reg. No.', value: 'PENDING' },
    { label: 'GST No.', value: 'PENDING' },
  ],

  // Homepage trust strip. Years active is confirmed; divisions are a structural
  // fact. TODO(client): clients served.
  //
  // There is deliberately no "business lines" count here. The group keeps adding
  // lines, so any number baked into copy or a stat tile goes stale the day a new
  // one launches. Everywhere the site used to say "five", it now says "many" or
  // "every". Do not reintroduce a count.
  trustStats: [
    { value: `${yearsActive}+`, label: 'Years active' },
    { value: '—', label: 'Clients served' },
    { value: '2', label: 'Divisions' },
  ],

  // TODO(client): replace with real partner names, then logo files.
  partners: [
    { group: 'Banking & NBFC', names: ['Partner bank names pending'] },
    { group: 'Builders & developers', names: ['Developer names pending'] },
    { group: 'Alkaline water', names: ['Owdy'] },
    { group: 'Universities', names: ['University partners pending'] },
    { group: 'Travel', names: ['TripCon Holidays'] },
  ],

  /**
   * THE FOUNDING BUSINESS.
   *
   * Career Plus Online Education is the coaching arm that runs under the same
   * society, and it keeps its own website and its own enquiry funnel. So it is
   * LINKED, never re-hosted: no entry in `verticals.ts`, no generated page, no
   * duplicated course copy that would compete with the live site for the same
   * searches. Every reference to it on this site points at `education.href`.
   *
   * It appears in exactly three places, all reading from this object: the
   * homepage hero origin line, the "What we do" card grid, and the footer.
   */
  education: {
    name: 'Career Plus Online Education',
    shortName: 'Education',
    // TODO(client): high-resolution logo. The only asset on the live site is a
    // 127px PNG in red and blue, which is too small to place next to Cinzel and
    // fights the navy-and-gold palette. Until the original artwork arrives this
    // renders as a type lockup, the same way partner logos are pending.
    logo: null,
    href: 'https://careerplusonline.com',
    blurb:
      'Classroom and online coaching for UPSC, SSC, banking, CLAT, NEET and IIT-JEE, run from Delhi under the same society.',
    // Homepage hero: ties the legacy to something the visitor can go and look at.
    origin: 'The business the group grew out of, still running and still enrolling.',
  },

  howItWorks: [
    { title: 'Tell us what you need', body: 'One form, one conversation. No obligation.' },
    { title: 'We match you to the right team', body: 'Your enquiry routes to the specialists in that business line.' },
    { title: 'You get expert guidance', body: 'Documents, options and honest advice on what actually fits.' },
    { title: 'We stay through completion', body: 'We remain your point of contact until the matter closes.' },
  ],
};

export type DivisionId = 'realty-finserve' | 'hospitality-services';

export const divisions: Record<DivisionId, {
  id: DivisionId;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
}> = {
  'realty-finserve': {
    id: 'realty-finserve',
    code: 'R',
    name: 'Career Plus Realty & Fin-Serve',
    shortName: 'Realty & Fin-Serve',
    tagline: 'Property and capital.',
    intro:
      'The division that handles what you own and what funds it: buying, selling and leasing property, and arranging finance through our partner banks and NBFCs.',
  },
  'hospitality-services': {
    id: 'hospitality-services',
    code: 'H',
    name: 'Career Plus Hospitality & Services',
    shortName: 'Hospitality & Services',
    tagline: 'Supply, study and travel.',
    intro:
      'The division that serves businesses and families: bulk alkaline water supply to hospitality, end-to-end study abroad support, and curated travel planning.',
  },
};
