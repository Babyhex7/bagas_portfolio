import type { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    id: 'brin',
    role: { en: 'Fullstack Engineer', id: 'Fullstack Engineer' },
    company: 'Badan Riset dan Inovasi Nasional (BRIN)',
    employmentType: { en: 'Contract', id: 'Kontrak' },
    start: 'Jan 2026',
    end: 'Jul 2026',
    highlights: [
      {
        en: 'Architected a nationwide dietary-assessment platform: Golang (Fiber) backend, Next.js (TypeScript) frontend, multilingual via next-intl.',
        id: 'Merancang platform asesmen gizi nasional: backend Golang (Fiber), frontend Next.js (TypeScript), multibahasa lewat next-intl.',
      },
      {
        en: 'Normalized a 16+ table MySQL schema with multi-tenant auth and recursive food-category hierarchies.',
        id: 'Menormalisasi skema MySQL 16+ tabel dengan autentikasi multi-tenant dan hierarki kategori makanan rekursif.',
      },
      {
        en: 'Shipped an AI recommendation engine and a real-time nutrition consultation channel over WebSocket — no polling.',
        id: 'Merilis AI recommendation engine dan kanal konsultasi gizi real-time lewat WebSocket — tanpa polling.',
      },
    ],
  },
  {
    id: 'eve-teknologi',
    role: { en: 'Fullstack Engineer', id: 'Fullstack Engineer' },
    company: 'PT Eve Teknologi Indonesia',
    employmentType: { en: 'Remote Freelance', id: 'Freelance Remote' },
    start: 'May 2026',
    end: 'Jul 2026',
    highlights: [
      {
        en: 'Built the Evetech Solution agency platform on Next.js, Node.js, and MySQL — modular, deployed to VPS and cloud.',
        id: 'Membangun platform agensi Evetech Solution di Next.js, Node.js, dan MySQL — modular, deploy ke VPS dan cloud.',
      },
      {
        en: 'Shipped a geolocation-aware pickup and delivery system for Evewash via the Google Maps API.',
        id: 'Merilis sistem pickup/delivery berbasis geolokasi untuk Evewash lewat Google Maps API.',
      },
      {
        en: 'Added real-time live chat (Pusher) and an ERP for PT Manunggal spanning sales, procurement, and 9 warehouse types — live for 1,500+ users.',
        id: 'Menambahkan live chat real-time (Pusher) dan ERP untuk PT Manunggal mencakup sales, procurement, dan 9 jenis gudang — live untuk 1.500+ pengguna.',
      },
    ],
  },
  {
    id: 'duluin-group',
    role: { en: 'Fullstack Developer', id: 'Fullstack Developer' },
    company: 'PT Rasa Aksata Nusantara (Duluin Group)',
    employmentType: { en: 'Full-time', id: 'Penuh Waktu' },
    start: 'Mar 2026',
    end: 'Jul 2026',
    highlights: [
      {
        en: 'Orchestrated a microservices HRMS (Golang/Gin) serving 12,000+ users — AI facial recognition attendance, leave, overtime, payroll.',
        id: 'Mengorkestrasi HRMS microservices (Golang/Gin) untuk 12.000+ pengguna — presensi wajah AI, cuti, lembur, payroll.',
      },
      {
        en: "Built Markin, an e-signature platform integrated with Xignature (Indonesia's certified PSrE), adopted by BNI Life and BNI Ventures.",
        id: 'Membangun Markin, platform tanda tangan elektronik terintegrasi Xignature (PSrE resmi Indonesia), dipakai BNI Life dan BNI Ventures.',
      },
      {
        en: 'Shipped Duluin Accounting for 10+ partner companies, plus 15+ corporate sites including BNI Ventures — averaging a 15% lift in conversion.',
        id: 'Merilis Duluin Accounting untuk 10+ mitra perusahaan, dan 15+ situs korporat termasuk BNI Ventures — rata-rata kenaikan konversi 15%.',
      },
    ],
  },
  {
    id: 'solvera',
    role: { en: 'Backend Engineer', id: 'Backend Engineer' },
    company: 'PT Solvera Global Teknologi',
    employmentType: { en: 'Internship', id: 'Magang' },
    start: 'Jan 2026',
    end: 'Mar 2026',
    highlights: [
      {
        en: 'Built Super Contact, a contact-management platform, on Python (FastAPI) with a layered Controller–Service–Repository architecture.',
        id: 'Membangun Super Contact, platform manajemen kontak, dengan Python (FastAPI) dan arsitektur Controller–Service–Repository berlapis.',
      },
      {
        en: 'Shipped RESTful CRUD, search, filtering, and pagination for high-performance data retrieval.',
        id: 'Merilis RESTful CRUD, pencarian, filter, dan paginasi untuk pengambilan data berperforma tinggi.',
      },
      {
        en: 'Hardened the backend with Pydantic validation, JWT auth, and protection against SQL injection and XSS.',
        id: 'Memperkuat backend dengan validasi Pydantic, autentikasi JWT, dan proteksi dari SQL injection serta XSS.',
      },
    ],
  },
  {
    id: 'kreasi-bali-sasmita',
    role: { en: 'Fullstack AI Engineer', id: 'Fullstack AI Engineer' },
    company: 'PT Kreasi Bali Sasmita',
    employmentType: { en: 'Internship', id: 'Magang' },
    start: 'Jan 2026',
    end: 'Jul 2026',
    highlights: [
      {
        en: 'Built Edumind, a RAG-powered AI psychological coach — FastAPI, PostgreSQL (pgvector), embeddings, and prompt engineering.',
        id: 'Membangun Edumind, AI psychological coach berbasis RAG — FastAPI, PostgreSQL (pgvector), embedding, dan prompt engineering.',
      },
      {
        en: 'Engineered a multi-agent architecture for retrieval, reasoning, and response generation across multi-turn conversations.',
        id: 'Merancang arsitektur multi-agent untuk retrieval, reasoning, dan generasi respons di percakapan multi-turn.',
      },
      {
        en: 'Designed Parahita LMS (Golang/Gin) with an FSM-based learning engine — auto-grading, progression, and multi-role dashboards.',
        id: 'Mendesain Parahita LMS (Golang/Gin) dengan learning engine berbasis FSM — auto-grading, progresi, dan dasbor multi-peran.',
      },
    ],
  },
  {
    id: 'yukmariprojek',
    role: { en: 'Fullstack Developer', id: 'Fullstack Developer' },
    company: 'PT YukMariProjek',
    employmentType: { en: 'Internship', id: 'Magang' },
    start: 'Sep 2025',
    end: 'Jun 2026',
    highlights: [
      {
        en: 'Built a cybersecurity platform with an Intrusion Detection System (web app + browser extension) on Node.js/Express.js.',
        id: 'Membangun platform cybersecurity dengan Intrusion Detection System (web + ekstensi browser) di Node.js/Express.js.',
      },
      {
        en: 'Engineered a rule-based threat detection engine with real-time alerting and audit trails.',
        id: 'Merancang mesin deteksi ancaman berbasis rule dengan alert real-time dan audit trail.',
      },
      {
        en: 'Shipped FundUnity, a crowdfunding platform (Next.js, Node.js, PostgreSQL) with campaign lifecycle and donation verification.',
        id: 'Merilis FundUnity, platform crowdfunding (Next.js, Node.js, PostgreSQL) dengan lifecycle kampanye dan verifikasi donasi.',
      },
    ],
  },
  {
    id: 'kse-upi',
    role: { en: 'Backend Laravel Developer', id: 'Backend Laravel Developer' },
    company: 'Karya Salemba Empat UPI',
    employmentType: { en: 'Freelance', id: 'Freelance' },
    start: 'Dec 2025',
    end: 'Feb 2026',
    highlights: [
      {
        en: 'Built a CMS and corporate site on Laravel + MySQL, with a Service–Repository backend layer.',
        id: 'Membangun CMS dan situs korporat dengan Laravel + MySQL, dengan lapisan backend Service–Repository.',
      },
      {
        en: 'Integrated Laravel Sanctum, RBAC, and middleware authorization for fine-grained access control.',
        id: 'Mengintegrasikan Laravel Sanctum, RBAC, dan otorisasi middleware untuk kontrol akses granular.',
      },
      {
        en: 'Shipped article management, media galleries, banners, and permission management from one admin portal.',
        id: 'Merilis manajemen artikel, galeri media, banner, dan manajemen izin dari satu portal admin.',
      },
    ],
  },
  {
    id: 'upi',
    role: { en: 'Fullstack AI Engineer', id: 'Fullstack AI Engineer' },
    company: 'Universitas Pendidikan Indonesia',
    employmentType: { en: 'Contract', id: 'Kontrak' },
    start: 'Aug 2025',
    end: 'Dec 2025',
    highlights: [
      {
        en: 'Built Refly, an AI-powered NSFW content detection platform, with a Golang (Gin) inference pipeline.',
        id: 'Membangun Refly, platform deteksi konten NSFW berbasis AI, dengan pipeline inferensi Golang (Gin).',
      },
      {
        en: 'Optimized throughput with goroutines, async processing, and connection pooling for real-time inference.',
        id: 'Mengoptimalkan throughput dengan goroutine, pemrosesan async, dan connection pooling untuk inferensi real-time.',
      },
      {
        en: 'Recognized as Top Innovator Bandung Bedas 2025 by the Bandung Regency Government.',
        id: 'Diakui sebagai Top Innovator Bandung Bedas 2025 oleh Pemerintah Kabupaten Bandung.',
      },
    ],
  },
  {
    id: 'diva-comfro',
    role: { en: 'Fullstack Software Engineer', id: 'Fullstack Software Engineer' },
    company: 'CV Diva Comfro',
    employmentType: { en: 'Internship', id: 'Magang' },
    start: 'Jan 2025',
    end: 'Nov 2025',
    highlights: [
      {
        en: 'Architected Baletani, an e-commerce & ERP platform — procurement, inventory, orders, and an AI chatbot — lifting operational efficiency 25%.',
        id: 'Merancang Baletani, platform e-commerce & ERP — procurement, inventaris, pesanan, dan chatbot AI — menaikkan efisiensi operasional 25%.',
      },
      {
        en: 'Built the backend on Node.js/Express.js: auth, cart, checkout, invoicing, and third-party integrations.',
        id: 'Membangun backend di Node.js/Express.js: auth, keranjang, checkout, invoicing, dan integrasi pihak ketiga.',
      },
      {
        en: 'Led as Project Manager — architecture, sprint execution, and delivery across a cross-functional team.',
        id: 'Memimpin sebagai Project Manager — arsitektur, eksekusi sprint, dan pengiriman lintas tim.',
      },
    ],
  },
  {
    id: 'vylbouquet',
    role: { en: 'Software Engineer', id: 'Software Engineer' },
    company: 'PT Vylbouquet',
    employmentType: { en: 'Freelance', id: 'Freelance' },
    start: 'Apr 2025',
    end: 'Aug 2025',
    highlights: [
      {
        en: 'Built a digital florist e-commerce platform (Next.js, Node.js, MySQL) — catalog, cart, checkout, WhatsApp integration.',
        id: 'Membangun platform e-commerce toko bunga digital (Next.js, Node.js, MySQL) — katalog, keranjang, checkout, integrasi WhatsApp.',
      },
      {
        en: 'Shipped a CMS for products, categories, and promotions — no code changes needed for daily updates.',
        id: 'Merilis CMS untuk produk, kategori, dan promosi — tanpa perlu ubah kode untuk update harian.',
      },
      {
        en: 'Hit 90+ Lighthouse scores and a 35% lift in conversion through Core Web Vitals optimization.',
        id: 'Mencapai skor Lighthouse 90+ dan kenaikan konversi 35% lewat optimasi Core Web Vitals.',
      },
    ],
  },
];
