// Navigation — mirrors the section order on the home page.
export const NAV_LINKS = [
  { href: '#profile', label: 'Profile' },
  { href: '#work', label: 'Work' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#record', label: 'Record' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/Babyhex7',
  linkedin: 'https://linkedin.com/in/bagasadhinugraha',
  email: 'bagasnv@upi.edu',
  whatsapp: '+6285885725027',
  whatsappNumber: '6285885725027',
} as const;

export const SITE_CONFIG = {
  name: 'Bagas Adhi Nugraha',
  title: 'Bagas Adhi Nugraha — Fullstack Engineer',
  description:
    'Fullstack engineer di Bandung. Membangun produk untuk Duluin, BNI Ventures, dan lini bisnis lain.',
  url: 'https://bagasadhinugraha.com',
  author: {
    name: 'Bagas Adhi Nugraha',
    title: 'Fullstack Engineer',
    location: 'Bandung, Jawa Barat, Indonesia',
    university: 'Universitas Pendidikan Indonesia',
    program: 'S1 Rekayasa Perangkat Lunak',
  },
} as const;

// Hard numbers used in the hero manifest.
export const MANIFEST = [
  { value: '16', label: 'Produk terkirim' },
  { value: '02', label: 'HKI terdaftar' },
  { value: '09', label: 'Klien nyata' },
  { value: '25+', label: 'Sesi berbicara' },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
