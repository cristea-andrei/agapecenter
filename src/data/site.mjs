// Datele generale ale site-ului: contact, cabinete, servicii, tarife.
// Editează aici și rulează `npm run build`.

export const site = {
  name: 'Agape Center',
  tagline: 'Terapie de Suflet',
  description:
    'Cabinete de psihoterapie de închiriat în București, lângă metrou Muncii. Un spațiu confortabil, modern și relaxant pentru psihoterapie, consiliere, coaching și dezvoltare personală.',
  bookingUrl: 'https://roomtick.com/agapecenter',
  email: 'hello@agapecenter.ro',
  phone: '+40744373827',
  phoneDisplay: '+40 (744) 373 827',
  whatsapp: 'https://wa.me/40744373827',
  address: {
    street: 'Șos. Mihai Bravu 192, Bloc 204, Scara B, Etaj 1, Ap. 35',
    city: 'Sector 2, București',
    mapsQuery: 'Șoseaua Mihai Bravu 192, București',
  },
  location:
    'Poziționare centrală, la intersecția bulevardelor Călărași cu Mihai Bravu, lângă stația de metrou Muncii, la câteva minute de stațiile altor mijloace de transport (tramvai, autobuz, troleibuz) și cu acces facil la locuri de parcare.',
  hours: [
    { days: 'Luni – Vineri', time: '8:00 – 22:00' },
    { days: 'Sâmbătă – Duminică', time: '9:00 – 18:00' },
  ],
};

export const hero = {
  slides: ['hero-1', 'bliss-1', 'flow-3', 'hero-4'],
};

export const activities = [
  'Psihoterapie',
  'Consiliere',
  'Coaching',
  'Ședințe 1:1',
  'Cuplu 2:1',
  'Terapie de grup',
  'Dezvoltare personală',
  'Intervizare',
];

export const rooms = [
  {
    id: 'gate',
    name: 'Gate',
    mood: 'Căldură și primire',
    text: 'Canapele moi în nuanțe de cărămiziu, draperii grele de catifea și multă lumină naturală. Un cabinet generos, care te primește ca acasă.',
    cover: 'gate-1',
    photos: ['gate-1', 'gate-2', 'gate-3', 'gate-4', 'gate-5', 'gate-6'],
  },
  {
    id: 'flow',
    name: 'Flow',
    mood: 'Calm și echilibru',
    text: 'Tonuri de ciocolată, plante verzi și lemn natural. Un spațiu care curge liniștit, pentru conversații care au nevoie de timp.',
    cover: 'flow-2',
    photos: ['flow-2', 'flow-1', 'flow-3', 'flow-4'],
  },
  {
    id: 'bliss',
    name: 'Bliss',
    mood: 'Blândețe și intimitate',
    text: 'Fotolii învelitoare în mov prăfuit, perne roz și accente de galben însorit. Un colț intim, cald și luminos.',
    cover: 'bliss-cover',
    photos: ['bliss-cover', 'bliss-1', 'bliss-2', 'bliss-3'],
  },
];

export const services = [
  {
    icon: 'leaf',
    title: 'Confort',
    text: 'Acces pe bază de cod personal, WiFi, aer condiționat, bucătărie, două toalete, apă, ceai și cafea.',
    chips: ['Acces cu cod', 'WiFi', 'AC', 'Bucătărie', 'Ceai & cafea'],
  },
  {
    icon: 'sparkle',
    title: 'Curățenie',
    text: 'Servicii de curățenie asigurate, ca să găsești mereu cabinetul pregătit pentru tine și clienții tăi.',
  },
  {
    icon: 'heart',
    title: 'Promovare',
    text: 'Secțiune de prezentare și promovare pentru terapeuți, chiar aici, pe agapecenter.ro.',
  },
  {
    icon: 'calendar',
    title: 'Rezervări',
    text: 'Programări rapide, oricând, cu ajutorul platformei online de rezervare.',
  },
];

// Filtrele din secțiunea „Terapeuți” (etichetele vin din therapists.mjs).
export const teamFilters = ['Integrativ', 'Cognitiv-comportamental', 'Sistemic', 'Copii & adolescenți', 'Cuplu & familie'];

export const pricing = [
  {
    title: '1 ședință',
    price: '30',
    unit: 'lei / oră',
    note: 'Toate serviciile incluse',
  },
  {
    title: '30 de ședințe',
    price: '25',
    unit: 'lei / oră',
    note: 'Toate serviciile incluse, pentru minimum 30 de ore rezervate pe lună',
    featured: true,
  },
  {
    title: 'Abonament 8 – 16',
    price: '500',
    unit: 'lei / lună',
    note: 'Un cabinet, o zi pe săptămână, în intervalul orar 8:00 – 16:00',
  },
  {
    title: 'Abonament 16 – 22',
    price: '550',
    unit: 'lei / lună',
    note: 'Un cabinet, o zi pe săptămână, în intervalul orar 16:00 – 22:00',
  },
];
