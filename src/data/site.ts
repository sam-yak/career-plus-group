export const site = {
  name: 'Career Plus Group',
  parent: 'Career Plus Educational Society',
  tagline: 'Property, finance, education and travel — under one roof.',
  positioning:
    'A group of advisory businesses that connect you to the right partner — banks, builders, universities and operators — and stay with you until it is done.',

  // TODO(client): replace every placeholder below with real details.
  contact: {
    phone: '+91 00000 00000',
    phoneHref: 'tel:+910000000000',
    whatsapp: '+91 00000 00000',
    whatsappHref: 'https://wa.me/910000000000',
    email: 'enquiry@careerplusgroup.in',
    address: 'Office address line 1, City, State — PIN',
    hours: 'Mon–Sat, 10:00 – 19:00',
  },

  registrations: [
    { label: 'Society Reg. No.', value: 'PENDING' },
    { label: 'RERA Reg. No.', value: 'PENDING' },
    { label: 'GST No.', value: 'PENDING' },
  ],

  // Homepage trust strip. TODO(client): replace with verified figures.
  trustStats: [
    { value: '—', label: 'Years active' },
    { value: '—', label: 'Clients served' },
    { value: '5', label: 'Business lines' },
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
      'The division that handles what you own and what funds it — buying, selling and leasing property, and arranging finance through our partner banks and NBFCs.',
  },
  'hospitality-services': {
    id: 'hospitality-services',
    code: 'H',
    name: 'Career Plus Hospitality & Services',
    shortName: 'Hospitality & Services',
    tagline: 'Supply, study and travel.',
    intro:
      'The division that serves businesses and families — bulk alkaline water supply to hospitality, end-to-end study abroad support, and curated travel planning.',
  },
};
