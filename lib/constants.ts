// Navigation — mirrors the section order on the home page. `key` maps to dict.nav[key].
export const NAV_LINKS = [
  { href: '#profile', key: 'profile' },
  { href: '#work', key: 'work' },
  { href: '#experience', key: 'experience' },
  { href: '#toolkit', key: 'toolkit' },
  { href: '#record', key: 'record' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/Babyhex7',
  linkedin: 'https://linkedin.com/in/bagasadhinugraha',
  email: 'bagasadhinugraha6@gmail.com',
  whatsapp: '+6285885725027',
  whatsappNumber: '6285885725027',
} as const;

export const SITE_CONFIG = {
  name: 'Bagas Adhi Nugraha',
  title: 'Bagas Adhi Nugraha — Software Engineer & AI Engineer',
  description:
    'Software Engineer & AI Engineer building production systems in Golang, Next.js, FastAPI, and Flutter — 3 registered IP rights, 13,000+ active users served.',
  url: 'https://bagasadhinugraha.com',
  author: {
    name: 'Bagas Adhi Nugraha',
    title: 'Software Engineer & AI Engineer',
    location: 'Bandung, Jawa Barat, Indonesia',
    university: 'Universitas Pendidikan Indonesia',
    program: 'B.Sc. Software Engineering · GPA 3.95/4.00',
  },
} as const;

/** Hard numbers used in the hero manifest strip. `key` maps to dict.manifest[key]. */
export const MANIFEST = [
  { value: '2+', key: 'years' },
  { value: '03', key: 'hki' },
  { value: '13K+', key: 'users' },
  { value: '3.95', key: 'gpa' },
] as const;

export const CV_FILE_URL = '/documents/bagas-adhi-nugraha-cv.pdf';

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
