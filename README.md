# 🚀 Portfolio Website - Bagas Adhi Nugraha

Portfolio website modern dengan tema Cosmos Space menggunakan Next.js 15, React 19, TypeScript, dan Tailwind CSS.

## ✨ Features

- 🎨 **Modern Cosmos Space Theme** - Purple, Pink, Blue gradient dengan animasi stars
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Next.js 15 App Router
- 🎭 **Smooth Animations** - Framer Motion
- 🖼️ **Tech Stack Icons** - Dynamic icons dari Simple Icons CDN
- 🎯 **SEO Optimized** - Meta tags & Open Graph

## 📁 Project Structure

```
bagas_portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (all sections)
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   └── achievements/      # Achievements page
├── components/
│   ├── ui/                # UI components (Button, Card)
│   ├── layout/            # Layout components (Header, Footer)
│   └── sections/          # Section components (Hero, About, etc)
├── data/                  # Data files
│   ├── projects.ts        # Project data
│   ├── skills.ts          # Skills data
│   └── achievements.ts    # Achievements data
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── public/               # Static assets
    └── assets/images/    # Images folder
```

## 🎨 Customization

### 1. Update Your Photo

Tambahkan foto Anda di: `/public/assets/images/profile.jpg`

Kemudian uncomment code di `components/sections/About.tsx`:

```tsx
<Image
  src="/assets/images/profile.jpg"
  alt="Bagas Aji Handoko"
  width={500}
  height={500}
  className="object-cover w-full h-full"
  priority
/>
```

### 2. Update Data

Edit file di folder `/data`:

- **projects.ts** - Tambah/edit project Anda
- **skills.ts** - Update tech skills & level
- **achievements.ts** - Update awards & achievements

### 3. Update Social Links

Edit di `components/layout/Footer.tsx`:

```tsx
const socialLinks = [
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  // ...
];
```

### 4. Update Colors

Edit `tailwind.config.ts` untuk mengubah tema warna:

```ts
colors: {
  cosmic: {
    purple: '#8B5CF6',  // Ubah warna sesuai keinginan
    pink: '#EC4899',
    blue: '#3B82F6',
  },
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11
- **Icons**: Lucide React + Simple Icons CDN
- **Deployment**: Vercel (recommended)

## 🌐 Pages

- `/` - Home (all sections in one page)
- `/about` - About section
- `/projects` - Projects showcase
- `/skills` - Tech skills
- `/achievements` - Achievements timeline

## 📱 Sections

1. **Hero** - Landing dengan animated gradient text
2. **About** - Foto kiri, bio kanan, stats cards
3. **Projects** - 6 projects dengan filter category
4. **Skills** - Tech stack dengan icons & progress bars
5. **Achievements** - Timeline HKI, awards, certifications

## 🎯 Features Highlights

### About Section

- ✅ Layout kiri foto, kanan text
- ✅ Stats cards dengan icons
- ✅ Expertise grid
- ✅ Animated decorations

### Skills Section

- ✅ Icons untuk setiap tech stack (Simple Icons CDN)
- ✅ Animated progress bars
- ✅ Category grouping
- ✅ Tech logo showcase

### Projects Section

- ✅ Real projects dari CV
- ✅ Category badges (Web, Mobile, AI)
- ✅ Tech stack tags
- ✅ Demo & GitHub links

### Achievements Section

- ✅ Timeline layout
- ✅ Type icons (HKI, Speaking, Award, Certification)
- ✅ Stats summary
- ✅ Smooth animations

## 📸 Adding Images

### Profile Photo

- Path: `/public/assets/images/profile.jpg`
- Recommended: Square aspect ratio (500x500px minimum)
- Format: JPG or PNG

### Project Images

- Path: `/public/assets/images/project-*.jpg`
- Recommended: 16:9 aspect ratio
- Format: JPG or PNG

## 🎨 Color Palette

```
Primary Purple: #8B5CF6
Secondary Pink: #EC4899
Accent Blue: #3B82F6
Dark Background: #0F172A
Light Background: #1E293B
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel dashboard.

## 📝 License

MIT License - Feel free to use for your own portfolio!

---

**Made with ❤️ by Bagas Adhi Nugraha**

🌟 Fullstack Developer & AI Enthusiast
🎓 Universitas Pendidikan Indonesia
