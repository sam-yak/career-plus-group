import type { DivisionId } from './site';

/**
 * ─────────────────────────────────────────────────────────────────────────
 * THE VERTICAL REGISTRY
 *
 * Every business line on the site is one object in this array. The landing
 * page for each is generated from `src/pages/[vertical].astro`. There is no
 * hand-built page per vertical, and there should never be one.
 *
 * To launch a sixth business line: append an object here. That is the whole
 * job. No new route, no new template, no new form.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface FaqItem { q: string; a: string; }
export interface Segment { title: string; body: string; }
export interface Step { title: string; body: string; }
export interface Offering { title: string; body: string; }
export interface RequirementRow { category: string; items: string; }

export interface Vertical {
  slug: string;
  name: string;
  division: DivisionId;
  /** Position within its division: drives the R·01 / H·02 notation. */
  order: number;
  navBlurb: string;
  cardBlurb: string;
  heroHeading: string;
  heroLead: string;
  ctaLabel: string;
  /** Which conditional field group the enquiry form should reveal. */
  formVariant: 'real-estate' | 'loans' | 'water' | 'study' | 'travel';
  segmentsTitle: string;
  segments: Segment[];
  stepsTitle: string;
  steps: Step[];
  offeringsTitle: string;
  offerings: Offering[];
  requirementsTitle: string;
  requirementsNote?: string;
  requirements: RequirementRow[];
  trustTitle: string;
  trust: string[];
  faqs: FaqItem[];
  /** Rendered as a small-print line under the form. Compliance matters here. */
  disclaimer?: string;
}

export const verticals: Vertical[] = [
  /* ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'real-estate',
    name: 'Real Estate',
    division: 'realty-finserve',
    order: 1,
    navBlurb: 'Buy · Sell · Rent · Plots',
    cardBlurb: 'Buy, sell, rent or lease: flats, villas, plots and commercial space.',
    heroHeading: 'Property, without the guesswork',
    heroLead:
      'We work as a channel partner and broker across residential, commercial and land transactions: shortlisting, site visits, negotiation and document verification, end to end.',
    ctaLabel: 'Tell us what you are looking for',
    formVariant: 'real-estate',

    segmentsTitle: 'Who we work with',
    segments: [
      { title: 'Buyers', body: 'First-time and repeat buyers looking at ready-to-move or under-construction homes.' },
      { title: 'Sellers & landlords', body: 'Owners who want their property placed with genuine, verified buyers and tenants.' },
      { title: 'Investors', body: 'Plot, land and commercial buyers looking at yield and appreciation rather than occupancy.' },
      { title: 'NRIs', body: 'Overseas buyers who need someone on the ground for paperwork, power of attorney and site checks.' },
    ],

    stepsTitle: 'How a transaction runs',
    steps: [
      { title: 'Share your requirement', body: 'Budget, locality, configuration and timeline.' },
      { title: 'We shortlist', body: 'Options from our developer tie-ups and verified resale inventory.' },
      { title: 'Site visits', body: 'We accompany you and flag what listing photos do not show.' },
      { title: 'Documents & closing', body: 'Title checks, agreement, registration and handover support.' },
    ],

    offeringsTitle: 'What we handle',
    offerings: [
      { title: 'Residential', body: 'Flats, villas and independent houses: ready-to-move and under-construction.' },
      { title: 'Commercial', body: 'Shops, offices and warehousing, for purchase or long-term lease.' },
      { title: 'Plots & land', body: 'Approved layouts and open land, with title and zoning verification.' },
      { title: 'Rentals & leasing', body: 'Tenant sourcing, agreement drafting and police verification support.' },
      { title: 'Document verification', body: 'Title, encumbrance and approval checks before you commit money.' },
      { title: 'Loan coordination', body: 'Home loan and loan-against-property arranged through Fin-Serve.' },
    ],

    requirementsTitle: 'Documents typically required',
    requirementsNote:
      'Indicative for a resale purchase. Requirements vary by state, property type and whether the seller is an individual, a builder or an NRI.',
    requirements: [
      { category: 'Identity & ownership', items: 'PAN card, Aadhaar, Sale Deed / Title Deed, Encumbrance Certificate (10–15 years)' },
      { category: 'Approvals', items: 'RERA registration, sanctioned building plan, Occupancy or Completion Certificate' },
      { category: 'Financial', items: 'Property tax receipts, NOC from society or bank if mortgaged, home loan clearance certificate' },
      { category: 'Society / apartment', items: 'Share certificate, maintenance agreement, society NOC' },
      { category: 'Rent & lease', items: 'Tenant ID and address proof, registered agreement, deposit receipt, police verification' },
      { category: 'Plots & land', items: 'Revenue record, conversion certificate, zoning certificate, survey sketch, layout approval' },
      { category: 'NRI-specific', items: 'Passport, OCI or PIO card, Power of Attorney if transacting remotely, overseas address proof' },
      { category: 'Transaction', items: 'Agreement to Sell, allotment letter, payment receipts, possession letter' },
    ],

    trustTitle: 'Why buyers work with us',
    trust: [
      'Registered channel partner with developer tie-ups, not an open listing marketplace.',
      'Every project we place carries a verifiable RERA registration number.',
      'Document verification before money moves, not after.',
      'Home loan and loan-against-property handled in-house through Fin-Serve.',
    ],

    faqs: [
      { q: 'What is the difference between carpet area and super built-up area?', a: 'Carpet area is the usable floor space inside your walls. Built-up area adds the walls and balcony. Super built-up area adds your proportionate share of lobbies, staircases and amenities, which is why it is always the largest number. RERA requires carpet area to be disclosed, and that is the figure we quote you first.' },
      { q: 'Is RERA registration mandatory for the property I am buying?', a: 'For most new and under-construction projects above the size threshold set by your state, yes. Resale of a completed, older property does not carry a live RERA number. If a project should have one and does not, treat that as a serious warning.' },
      { q: 'What extra documents does an NRI need?', a: 'Beyond the standard set: a valid passport, OCI or PIO card, overseas address proof, and, if you are not present for registration, a properly executed and attested Power of Attorney. Repatriation of sale proceeds also has its own compliance requirements.' },
      { q: 'Can you verify property documents before I commit?', a: 'Yes, and we recommend it. Title chain, encumbrance certificate, approvals and tax status are checked before any token amount is paid.' },
      { q: 'Do you charge the buyer, the seller, or both?', a: 'It depends on the transaction type. For developer projects we are paid by the developer. For resale and rentals, brokerage terms are agreed in writing before we begin. You will never be surprised by a fee.' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'loans',
    name: 'Loans & Finance',
    division: 'realty-finserve',
    order: 2,
    navBlurb: 'Personal · Business · OD',
    cardBlurb: 'Five loan products arranged through our partner banks and NBFCs.',
    heroHeading: 'The right lender, not just any lender',
    heroLead:
      'We are a loan facilitator. We understand your requirement, match it to a partner bank or NBFC whose policy actually fits your profile, and manage the file through to disbursal.',
    ctaLabel: 'Check what you qualify for',
    formVariant: 'loans',

    segmentsTitle: 'Who we arrange finance for',
    segments: [
      { title: 'Salaried individuals', body: 'Personal loans against salary, and home loans for property purchase.' },
      { title: 'Small businesses & MSMEs', body: 'Working capital, machinery finance and overdraft limits.' },
      { title: 'Companies', body: 'Structured corporate facilities, trade finance and bank guarantees.' },
      { title: 'Project promoters', body: 'Milestone-linked finance for construction and plant setup.' },
    ],

    stepsTitle: 'How an application runs',
    steps: [
      { title: 'Share your requirement', body: 'Loan type, amount, purpose and your income profile.' },
      { title: 'We match a lender', body: 'Different banks have different policies. We place you where you fit.' },
      { title: 'Documents & submission', body: 'We pre-check your file so it does not get rejected on a technicality.' },
      { title: 'Sanction & disbursal', body: 'Lender verification, sanction letter, then funds to your account.' },
    ],

    offeringsTitle: 'The five products we arrange',
    offerings: [
      { title: 'Personal loan', body: 'Unsecured, income-based, no collateral. The fastest product to disburse.' },
      { title: 'Business loan', body: 'Working capital and expansion finance for MSMEs, often collateral-free.' },
      { title: 'Corporate loan', body: 'Larger structured facilities: term loans, letters of credit, bank guarantees.' },
      { title: 'OD limit', body: 'A sanctioned ceiling you draw against. Interest only on what you actually use.' },
      { title: 'Project loan', body: 'Tied to one specific project, disbursed in tranches against milestones.' },
      { title: 'Loan against property', body: 'Secured borrowing against property you already own, coordinated with our Realty team.' },
    ],

    requirementsTitle: 'Documents by loan type',
    requirementsNote:
      'All applications require standard KYC: PAN, Aadhaar or passport, address proof and photographs. The table below lists what each product needs in addition.',
    requirements: [
      { category: 'Personal loan', items: 'Salary slips (3–6 months), bank statements showing salary credits, Form 16 or ITR, employee ID or appointment letter' },
      { category: 'Business loan', items: 'GST returns, 6–12 months business bank statements, business registration or licence, ITR (2–3 years)' },
      { category: 'Corporate loan', items: 'Audited financials, board resolution, MOA and AOA, GST and ITR filings, turnover projections' },
      { category: 'OD limit', items: 'Current account statements, GST returns, turnover proof, collateral documents if secured' },
      { category: 'Project loan', items: 'Detailed Project Report (DPR), cost estimates, statutory approvals, promoter contribution proof' },
      { category: 'Self-employed (any product)', items: 'ITR (2–3 years), audited P&L and balance sheet, business bank statements (6 months), registration proof' },
    ],

    trustTitle: 'How we work',
    trust: [
      'We are a facilitator working with RBI-regulated banks and NBFCs. We do not lend ourselves.',
      'Your file is pre-checked against lender policy before submission, so rejections are rarer.',
      'Indicative rates, processing fees and foreclosure charges are disclosed upfront.',
      'Your information is never shared with a lender without your consent.',
    ],

    faqs: [
      { q: 'What is the difference between a business loan and an OD limit?', a: 'A business loan gives you the full amount upfront and you pay interest on all of it from day one. An OD limit is a sanctioned ceiling: you draw only what you need, when you need it, and pay interest only on the amount used and only for the days it is outstanding. OD suits fluctuating cash-flow gaps; a term loan suits a one-time purchase.' },
      { q: 'Does Career Plus lend the money?', a: 'No. We are a loan facilitator. The loan is sanctioned and disbursed by a partner bank or NBFC, under their terms and their credit policy. Our role is matching, documentation and follow-through.' },
      { q: 'What credit score do I need?', a: 'A CIBIL score above 750 makes approval considerably easier and usually gets you a better rate. Applications below 700 are harder but not automatically rejected. The lender, product and your income profile all matter.' },
      { q: 'How long does approval take?', a: 'A personal loan with clean documents can sanction in days. Business and corporate facilities typically take longer because of financial verification. Project loans are the slowest, since the lender appraises the project itself.' },
      { q: 'Do you charge me, or does the bank pay you?', a: 'Our arrangement is with the lender. Any fee payable by you, if applicable, is disclosed in writing before we start work.' },
      { q: 'Can I prepay or foreclose the loan early?', a: 'Usually yes, though most lenders levy a foreclosure charge, and terms differ by product. We will tell you the prepayment terms before you sign, not after.' },
    ],

    disclaimer:
      'Career Plus Fin-Serve is a loan facilitation service. Loans are sanctioned and disbursed solely at the discretion of our partner banks and NBFCs, subject to their credit policy and documentation requirements. Submitting an enquiry does not constitute a loan approval or a commitment to lend.',
  },

  /* ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'alkaline-water',
    name: 'Alkaline Water',
    division: 'hospitality-services',
    order: 1,
    navBlurb: 'Hotels · Cafés · Gyms',
    cardBlurb: 'Bulk alkaline water supply for hotels, restaurants, offices and gyms.',
    heroHeading: 'Premium alkaline water, supplied in bulk',
    heroLead:
      'A wholesale supply line for hospitality businesses, in partnership with Owdy. Scheduled delivery, volume pricing, and your own branding on the bottle if you want it.',
    ctaLabel: 'Request wholesale pricing',
    formVariant: 'water',

    segmentsTitle: 'Who we supply',
    segments: [
      { title: 'Hotels & resorts', body: 'In-room and banquet supply, with the option of your logo on every bottle.' },
      { title: 'Restaurants & cafés', body: 'A premium table-water line that earns its place on the bill.' },
      { title: 'Corporate offices', body: 'Pantry and dispenser supply on a predictable monthly cost per head.' },
      { title: 'Gyms & wellness', body: 'Retail-facing stock and member hydration, delivered on your schedule.' },
    ],

    stepsTitle: 'How supply is set up',
    steps: [
      { title: 'Tell us your volume', body: 'Sector, city and an estimate of monthly consumption.' },
      { title: 'We quote by tier', body: 'Pricing is per case, tiered by monthly volume, not per bottle.' },
      { title: 'Trial delivery', body: 'A first consignment so your team can assess the product in situ.' },
      { title: 'Standing schedule', body: 'A recurring delivery cycle and a named account manager. No lock-in.' },
    ],

    offeringsTitle: 'What is available',
    offerings: [
      { title: 'Bottled supply', body: 'Multiple bottle sizes for in-room, table and retail use. Ordered by the case.' },
      { title: 'Private label', body: 'Your property\'s branding on the bottle, a guest touchpoint you own.' },
      { title: 'Dispensers & machines', body: 'On-site units for pantries, gyms and high-volume points.' },
      { title: 'Scheduled delivery', body: 'Weekly or monthly cycles set around your storage and turnover.' },
      { title: 'Account management', body: 'One named contact for orders, changes and escalations.' },
      { title: 'Home machines (B2C)', body: 'Domestic alkaline ionisers, handled as a separate consumer line.' },
    ],

    requirementsTitle: 'Product & supply specifications',
    requirementsNote:
      'Specifications pending final confirmation from Owdy. Figures shown are placeholders and will be replaced before launch.',
    requirements: [
      { category: 'pH level', items: 'pH 9.5+, to be confirmed against lab report' },
      { category: 'Method', items: 'Ionisation / mineral enrichment, to be confirmed' },
      { category: 'Bottle sizes', items: 'To be confirmed with Owdy' },
      { category: 'Minimum order', items: 'Quoted in cases or cartons, never single bottles' },
      { category: 'Pricing tiers', items: 'Standard / Bulk / Enterprise, by monthly volume' },
      { category: 'Certifications', items: 'FSSAI, BIS (IS 14543), ISO 22000. Certificates pending from Owdy' },
      { category: 'Delivery area', items: 'Serviceable cities to be published before orders open' },
      { category: 'Payment terms', items: 'Invoiced on standard business credit terms' },
    ],

    trustTitle: 'Why procurement teams choose us',
    trust: [
      'No lock-in contract. Supply continues because it works, not because you are tied in.',
      'Volume pricing quoted per case, with tiers published up front.',
      'Private-label bottling available: your brand, our logistics.',
      'A dedicated account manager rather than a general enquiry line.',
    ],

    faqs: [
      { q: 'What is the minimum order quantity?', a: 'Orders are placed in cases rather than individual bottles. The exact minimum depends on your sector and delivery city. We will confirm it with your quote.' },
      { q: 'Can bottles carry our hotel or restaurant branding?', a: 'Yes. Private-label bottling is available, with your artwork on the label. Minimum volumes for custom labelling are higher than for standard stock.' },
      { q: 'Is a long-term contract required?', a: 'No. We work on a rolling supply arrangement with no lock-in period. You can change volumes or stop at any point.' },
      { q: 'How is alkaline water different from regular packaged water?', a: 'Alkaline water has a higher pH than neutral packaged drinking water, achieved through ionisation or mineral content. Guests and members typically notice the difference in taste and mouthfeel, which is why it works as a premium in-room or table offering.' },
      { q: 'Which cities do you deliver to?', a: 'Our serviceable area is being finalised. Send us your city with your enquiry and we will confirm whether we can supply you before you commit to anything.' },
    ],

    disclaimer:
      'This is a wholesale supply line for businesses. Product specifications and certifications are being finalised with our supply partner and will be published in full before orders open.',
  },

  /* ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'study-abroad',
    name: 'Study Abroad',
    division: 'hospitality-services',
    order: 2,
    navBlurb: 'Admissions · Visa · Settlement',
    cardBlurb: 'Admissions, visa and settlement support: from first counselling to arrival.',
    heroHeading: 'We do not stop at the visa',
    heroLead:
      'Most consultancies finish when your visa is stamped. We arrange your accommodation, meet you at the airport, and give you a local contact for the first months, because that is when students actually struggle.',
    ctaLabel: 'Book a free counselling session',
    formVariant: 'study',

    segmentsTitle: 'Who we counsel',
    segments: [
      { title: 'Undergraduate applicants', body: 'School leavers choosing a first degree abroad, often with parents in the room.' },
      { title: 'Postgraduate applicants', body: 'Graduates targeting a master\'s, with test scores and work experience to position.' },
      { title: 'Parents', body: 'Families who want the finances, safety and settlement side answered honestly.' },
      { title: 'Working professionals', body: 'Applicants balancing an application cycle against a current job.' },
    ],

    stepsTitle: 'How the journey runs',
    steps: [
      { title: 'Free counselling', body: 'Profile evaluation against your grades, budget and goals.' },
      { title: 'Shortlist & apply', body: 'Universities across ambitious, moderate and safe brackets. SOP and LOR support.' },
      { title: 'Offers & finance', body: 'Offer comparison, proof of funds, education loan and forex.' },
      { title: 'Visa & departure', body: 'I-20, CAS or eCoE, visa filing, and a pre-departure briefing.' },
      { title: 'After you land', body: 'Accommodation, airport pickup, orientation and a local point of contact.' },
    ],

    offeringsTitle: 'What is included',
    offerings: [
      { title: 'Course & university shortlisting', body: 'Matched to your profile and budget, not to whoever pays the highest commission.' },
      { title: 'Application assistance', body: 'SOP, LORs, transcripts and CV: drafted and reviewed, not templated.' },
      { title: 'Test prep guidance', body: 'IELTS, TOEFL, GRE, GMAT and SAT: planning, targets and preparation routes.' },
      { title: 'Visa filing support', body: 'Country-specific documentation and interview preparation.' },
      { title: 'Education loan & forex', body: 'Arranged through Career Plus Fin-Serve, including collateral-free options.' },
      { title: 'Settlement support', body: 'Accommodation, airport pickup, local orientation and a guardian contact.' },
    ],

    requirementsTitle: 'Documents typically required',
    requirementsNote:
      'The exact set varies significantly by destination country and by university. This is the common core.',
    requirements: [
      { category: 'Academic', items: 'Mark sheets and certificates (10th, 12th, degree), official transcripts' },
      { category: 'Test scores', items: 'IELTS or TOEFL for English proficiency; GRE, GMAT or SAT as the course requires' },
      { category: 'Application', items: 'Statement of Purpose (SOP), Letters of Recommendation (LOR), updated CV, photographs' },
      { category: 'Financial proof', items: 'Bank statements, sponsor affidavit of support, education loan sanction letter' },
      { category: 'Identity', items: 'Valid passport with sufficient remaining validity' },
      { category: 'Visa-specific', items: 'University offer letter, I-20 (US) / CAS (UK) / eCoE (Australia), medical exam and health insurance proof' },
    ],

    trustTitle: 'What makes us different',
    trust: [
      'Post-arrival settlement support: accommodation, pickup and a local contact, not just a visa stamp.',
      'Education loan and forex handled in-house through our Fin-Serve division.',
      'Scholarship identification as part of counselling, not an upsell.',
      'The first counselling session is free and carries no obligation.',
    ],

    faqs: [
      { q: 'How early should I start?', a: 'Aim to begin 12 to 18 months before your intended intake. Applications for a Fall intake typically close the preceding winter, and visa slots and funding documentation take longer than most families expect.' },
      { q: 'What is the difference between a conditional and unconditional offer?', a: 'An unconditional offer is a firm place. A conditional offer holds your place subject to something still outstanding: final results, an English score, or a document. Both are real offers; the conditional one just has a deadline attached.' },
      { q: 'Do you help with accommodation after I land, not just before?', a: 'Yes. This is the part of our service we would point to first. We arrange accommodation, airport pickup, a local orientation and a contact you can call in your first months.' },
      { q: 'Can I get an education loan without collateral?', a: 'For many destinations and courses, yes. Several lenders offer collateral-free education loans up to a threshold, with the amount depending on the university, course and your co-applicant\'s profile. Our Fin-Serve team handles this.' },
      { q: 'What happens if my visa is rejected?', a: 'We review the refusal reason, correct what can be corrected, and advise on reapplication or a deferred intake. Refusals are usually documentary rather than final.' },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────── */
  {
    slug: 'travel',
    name: 'Tour & Travel',
    division: 'hospitality-services',
    order: 3,
    navBlurb: 'Honeymoon · Family · MICE',
    cardBlurb: 'Curated domestic and international trips, planned with you and fulfilled by TripCon Holidays.',
    heroHeading: 'We plan. TripCon Holidays fulfils.',
    heroLead:
      'Not a booking engine. You tell us what the trip is for, we build options around it, and once you confirm, our partner handles the bookings and stays reachable while you travel.',
    ctaLabel: 'Plan my trip',
    formVariant: 'travel',

    segmentsTitle: 'What we plan',
    segments: [
      { title: 'Couples', body: 'Honeymoons and anniversaries, built around privacy rather than itinerary density.' },
      { title: 'Families', body: 'Pacing, room configurations and activities that work with children and elders.' },
      { title: 'Companies', body: 'Offsites, incentive trips and conferences: invoiced, coordinated, documented.' },
      { title: 'Independent travellers', body: 'Custom routes for people who know roughly where they want to go.' },
    ],

    stepsTitle: 'How planning works',
    steps: [
      { title: 'Tell us your plan', body: 'Destination or just a mood, rough dates, group size and budget.' },
      { title: 'We curate options', body: 'Two or three routed itineraries with inclusions stated plainly.' },
      { title: 'You confirm', body: 'Pick one, adjust it, or ask us to start again. No pressure to book.' },
      { title: 'TripCon handles it', body: 'Bookings, vouchers and on-trip support through our travel partner.' },
    ],

    offeringsTitle: 'Package themes',
    offerings: [
      { title: 'Honeymoon', body: 'Romantic destinations, private stays and curated experiences over packed schedules.' },
      { title: 'Family', body: 'Kid-friendly pacing, connecting rooms and activities that suit every age in the group.' },
      { title: 'Corporate & MICE', body: 'Meetings, incentives, conferences and exhibitions, with proper invoicing.' },
      { title: 'Luxury', body: 'Premium properties, private transfers and access-led experiences.' },
      { title: 'Adventure', body: 'Trekking, water sports and offbeat routes for travellers who want the effort.' },
      { title: 'Visa & forex support', body: 'Documentation guidance and currency arrangements before you fly.' },
    ],

    requirementsTitle: 'Documents for international travel',
    requirementsNote:
      'Requirements vary sharply by destination. We confirm the exact list for your specific trip during planning.',
    requirements: [
      { category: 'Identity', items: 'Passport with at least six months validity from your date of travel, passport-size photographs' },
      { category: 'Visa', items: 'Application form plus destination-specific supporting documents: bank statements, hotel bookings, return ticket' },
      { category: 'Financial', items: 'Forex card or currency, travel insurance proof (mandatory for several countries)' },
      { category: 'Booking proof', items: 'Confirmed return flight and hotel bookings, often required for the visa application itself' },
      { category: 'Health', items: 'Vaccination or health certificates where the destination requires them' },
      { category: 'Corporate travel', items: 'Invitation letter, company covering letter, GST details for invoicing' },
    ],

    trustTitle: 'How we work',
    trust: [
      'Advisory model: we plan and advise, TripCon Holidays handles fulfilment and on-ground support.',
      'Inclusions and exclusions stated in writing before you confirm anything.',
      'Every itinerary is adjustable. Fixed packages are a starting point, not a constraint.',
      'Support remains available while you are travelling.',
    ],

    faqs: [
      { q: 'Do you handle visa applications, or only trip planning?', a: 'We guide the documentation and prepare the file with you. The application itself is submitted in your name. No agency can submit a visa on your behalf, and anyone claiming otherwise is worth avoiding.' },
      { q: 'What does the "price from" figure include?', a: 'Unless stated otherwise, indicative prices are land-only, on double occupancy, and exclude flights. Land-only covers hotels, transfers and listed sightseeing. Your written quote always lists inclusions and exclusions in full.' },
      { q: 'Can you customise a package instead of using a fixed itinerary?', a: 'That is the normal case. The themed packages exist to show what is possible; nearly every trip we send out has been adjusted for the specific group.' },
      { q: 'What happens if I need help while travelling?', a: 'TripCon Holidays provides on-trip support, and we remain reachable as your original point of contact.' },
      { q: 'Do you handle corporate offsites and conferences?', a: 'Yes. MICE travel is planned separately from leisure packages, with formal quotations, GST invoicing and a single coordinator for the group.' },
    ],
  },
];

/* ── Derived helpers ────────────────────────────────────────────────── */

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}

export function verticalsIn(division: DivisionId): Vertical[] {
  return verticals.filter((v) => v.division === division).sort((a, b) => a.order - b.order);
}

/** The signature notation: R·01, H·02 … division code plus position. */
export function notation(v: Vertical): string {
  const code = v.division === 'realty-finserve' ? 'R' : 'H';
  return `${code}·${String(v.order).padStart(2, '0')}`;
}
