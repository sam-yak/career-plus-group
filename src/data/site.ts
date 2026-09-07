/**
 * The society was founded in 1996 and registered with the Registrar of
 * Societies, Delhi on 9 December 1998. Confirmed against careerplusonline.com
 * and the society's own logo, which reads "A Legacy of Three Decade".
 *
 * Derived, not hardcoded, so the claim stays true without anyone remembering to
 * edit it. Copy references `site.legacy` or `site.yearsActive`, never a literal.
 *
 * SCOPE: homepage only. The group's business lines are new, so this number must
 * never appear on a vertical page or in `verticals.ts` — next to a vertical it
 * reads as "30 years of doing this", which is not true of any of them. It is
 * the society's record, and it is framed that way wherever it appears.
 */
const FOUNDED = 1996;
const yearsActive = new Date().getFullYear() - FOUNDED;

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
    address: '301/A-37-38-39, Third Floor, Ansal Building Commercial Complex, Dr. Mukherjee Nagar, Delhi 110009',
    // Both 301 and 302 belong to the society and both appear on the GST
    // certificate. 301 is reception, so it is the one a visitor should be given.
    mapHref: 'https://maps.google.com/?cid=2106582543092123839',
    hours: 'Mon–Sat, 10:00 – 19:00',
  },

  /**
   * Only registrations we actually hold. There is no RERA line: the group does
   * not have a number yet, and an empty "RERA Reg. No. PENDING" on every page
   * advertises the gap rather than covering it. Add the row when the number
   * exists. The `pending` flag is still honoured by the UI for any future row.
   */
  registrations: [
    { label: 'Society Reg. No.', value: 'S.34036 of 1998' },
    { label: 'GST No.', value: '07AAATC1792P1ZB' },
  ],

  founded: FOUNDED,

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

  /*
   * Described by category rather than named. The tie-ups are still being signed,
   * and naming an institution before the agreement exists is a claim we would
   * have to withdraw. Named partners are added here as each one is confirmed,
   * which is why Owdy and TripCon already appear.
   */
  partners: [
    { group: 'Banking & NBFC', names: ['Public sector banks, private banks and NBFCs'] },
    { group: 'Builders & developers', names: ['RERA-registered residential and commercial projects'] },
    { group: 'Alkaline water', names: ['Owdy'] },
    { group: 'Universities', names: ['Universities and admission partners across our study destinations'] },
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

  /**
   * The society's own history, used on /about only.
   *
   * Deliberately NOT `site.legacy`: that is the "30+ years" credibility badge
   * and stays on the homepage, tied to the parent. What follows is a founding
   * date inside a history section, which reads as the society's record rather
   * than as a claim about how long the group has been broking property.
   */
  story: {
    registered: 'December 1998',
    registrar: 'Registrar of Societies, Delhi',
    // Awards belong to the society and its president, and are named with the
    // year and the awarding body so a reader can check them.
    awards: [
      { name: 'Karmaveer Chakra', year: 2012, by: 'International Confederation of NGOs' },
      { name: 'JP Award', year: 2019, by: 'for social service' },
    ],
  },

  /**
   * Designations confirmed by the client. Note the spellings: careerplusonline
   * .com writes "Niraj", the family writes "Neeraj", and the GST certificate and
   * the proprietorship declaration both write "Agarwal" rather than "Aggarwal".
   * The legal documents win for the surname.
   */
  leadership: {
    photo: '/logos/leadership.jpg',
    /* Alt text names them left to right, matching how they stand in the frame. */
    photoAlt: 'Neeraj Kushwaha, left, and Anuj Kumar Agarwal, right',
    people: [
      { name: 'Anuj Kumar Agarwal', title: 'Chairman and Managing Director' },
      { name: 'Neeraj Kushwaha', title: 'Secretary and Managing Director' },
    ],
    /** Anuj has led the society since 1998. Sourced from careerplusonline.com. */
    presidentSince: 1998,
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
