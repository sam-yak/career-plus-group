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

/** Named once: the bios below quote it, and so does `site.parent`. */
const PARENT = 'Career Plus Educational Society';
const yearsActive = new Date().getFullYear() - FOUNDED;

/** One member of the leadership pair, as rendered on /about. */
interface Leader {
  name: string;
  title: string;
  /** Rendered as one paragraph each, in order. */
  bio: string[];
  /** Set on the person the awards in `story.awards` were given to. */
  societyAwards?: boolean;
}

export const site = {
  name: 'Career Plus Group',
  parent: PARENT,
  tagline: 'Property, finance, education and travel, under one roof.',
  positioning:
    'A group of advisory businesses that know which lender, which builder and which university fits a given profile, and stay with you until it is done.',

  yearsActive,
  /** Homepage-only credibility signal, and always tied to `parent`. See the note on `yearsActive`. */
  legacy: `${yearsActive}+ years`,

  contact: {
    /** Primary line. Used by the sticky action bar, which has room for one number. */
    phone: '+91 11 3511 2202',
    phoneHref: 'tel:+911135112202',

    /**
     * The full switchboard: the Delhi landline, then two mobiles.
     *
     * careerplusonline.com writes its mobiles with the Delhi STD code in
     * front, in the form "+91-11-98114xxxxx". That is not a dialable number: a
     * mobile already carries its own ten digits, so the prefixed version is
     * twelve digits long and a tel: link built from it fails. They are written
     * correctly here. The education site should be corrected to match.
     */
    phones: [
      { display: '+91 11 3511 2202', href: 'tel:+911135112202' },
      { display: '+91 98114 24443', href: 'tel:+919811424443' },
      { display: '+91 98116 51353', href: 'tel:+919811651353' },
    ],

    whatsapp: '+91 93100 69778',
    whatsappHref: 'https://wa.me/919310069778',
    /*
     * Cloudflare Email Routing forwards this to the group's real mailbox. Only
     * the .org address is ever shown: the destination it forwards to is internal
     * and must not appear in site copy.
     */
    email: 'contact@careerplusgroup.org',
    address: '301/A-37-38-39, Third Floor, Ansal Building Commercial Complex, Dr. Mukherjee Nagar, Delhi 110009',
    // Both 301 and 302 belong to the society and both appear on the GST
    // certificate. 301 is reception, so it is the one a visitor should be given.
    mapHref: 'https://maps.google.com/?cid=2106582543092123839',
    hours: 'Mon–Sat, 9:00 am to 6:00 pm',
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
    /*
     * Awards belong to the society and its president, and are named with the
     * year and the awarding body so a reader can check them. `article` is the
     * word the sentence on /about needs in front of the name, so an entry that
     * is not a named prize reads correctly in the run of the list.
     *
     * There are more of them. Three is the number a leadership bio carries
     * before it reads as a trophy cabinet; the rest wait for an honours block
     * of their own.
     */
    awards: [
      { name: 'Karmaveer Chakra', article: 'the', year: 2012, by: 'International Confederation of NGOs' },
      { name: 'honorary doctorate from Techno India University', article: 'an', year: 2018, by: 'Techno India University, Kolkata' },
      { name: 'JP Award', article: 'the', year: 2019, by: 'for social service' },
    ],
  },

  /**
   * Names and designations confirmed by the client.
   *
   * "Neeraj" is settled: careerplusonline.com writes "Niraj" and is wrong.
   *
   * The surname is the client's own instruction. Worth knowing that the
   * proprietorship declaration and careerplusonline.com both write "Agarwal",
   * so if anyone later compares the site against those documents, this is a
   * deliberate difference and not a typo to be corrected.
   */
  leadership: {
    photo: '/logos/leadership.jpg',
    /* Alt text names them left to right, matching how they stand in the frame. */
    photoAlt: 'Neeraj Kushwaha, left, and Anuj Kumar Agrawal, right',
    /**
     * Both bios live here rather than in `about.astro` so neither man is the
     * one the template happens to hardcode. Add a third leader and the page
     * renders them without a developer touching the markup.
     *
     * Both have held their posts since 1998. Anuj's tenure is sourced from
     * careerplusonline.com; Neeraj's is the client's own text.
     */
    people: [
      {
        name: 'Anuj Kumar Agrawal',
        title: 'Chairman and Managing Director',
        bio: [
          `Anuj Kumar Agrawal has led ${PARENT} since 1998. He is an educationist, journalist and career counsellor, edits the news analysis portal Dialogue India and the career portal Dialogue India Academia, and serves as national president of the Maulik Bharat trust.`,
          'At the society he built the coaching operation the group takes its name from, and opened civil services preparation to students of science, commerce and literature. Much of that work is free coaching for students from Scheduled Caste, Scheduled Tribe, Other Backward Class, minority and disabled communities, run with central ministries and state governments. He founded Dialogue India in 2009 and, in 2013, the Maulik Bharat movement, now active in 18 states.',
        ],
        societyAwards: true,
      },
      {
        name: 'Neeraj Kushwaha',
        title: 'Secretary and Managing Director',
        bio: [
          `Neeraj Kushwaha has been secretary of ${PARENT} since 1998, and has spent more than three decades in social empowerment and grassroots development. Under his leadership the society works to bring Dalit, Tribal, Backward and Minority communities into the mainstream, through vocational education, competitive examination coaching, skill development and career mentorship.`,
          'He oversees operations across the state centres so that training standards hold from one to the next, and works with ministries of the Government of India and state departments to run large-scale welfare projects. He also holds leadership roles at the M.L.K. Educational Charitable Trust, the Neelkanth Resident Welfare Society and Dialogue India magazine.',
        ],
      },
    ] satisfies Leader[],
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
