// Navigation Links
export const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/bagasadhinugraha',
  linkedin: 'https://linkedin.com/in/bagasadhinugraha',
  email: 'bagasnv@upi.edu',
  whatsapp: '+6285885725027',
} as const;

// Site Metadata
export const SITE_CONFIG = {
  name: 'Bagas Adhi Nugraha',
  title: 'Bagas AN - Fullstack Developer & AI Enthusiast',
  description: 'Portfolio website of Bagas Adhi Nugraha - Fullstack Developer specializing in React.js, Node.js, Flutter, and AI Development',
  url: 'https://bagasadhinugraha.com',
  author: {
    name: 'Bagas Adhi Nugraha',
    title: 'Fullstack Developer & AI Enthusiast',
    location: 'Bandung, Indonesia',
    university: 'Universitas Pendidikan Indonesia',
    program: 'S1 Rekayasa Perangkat Lunak',
  },
} as const;

// Color Theme Classes
export const COLORS = {
  'cosmic-purple': 'bg-cosmic-purple text-cosmic-purple border-cosmic-purple',
  'cosmic-pink': 'bg-cosmic-pink text-cosmic-pink border-cosmic-pink',
  'cosmic-blue': 'bg-cosmic-blue text-cosmic-blue border-cosmic-blue',
  'green-500': 'bg-green-500 text-green-500 border-green-500',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
