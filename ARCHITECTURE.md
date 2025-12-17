# Portfolio Website - Modular Architecture

## 📁 Struktur Folder

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── */page.tsx         # Individual pages
│
├── components/
│   ├── common/            # Reusable components
│   │   ├── Section.tsx
│   │   ├── AnimatedContainers.tsx
│   │   └── index.ts
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   └── ui/                # UI primitives
│       ├── Button.tsx
│       └── Card.tsx
│
├── hooks/                 # Custom React hooks
│   ├── useScrollProgress.ts
│   ├── useSmoothScroll.ts
│   ├── useMediaQuery.ts
│   └── index.ts
│
├── lib/                   # Utilities & helpers
│   ├── constants.ts       # App constants
│   ├── animations.ts      # Animation variants
│   ├── helpers.ts         # Helper functions
│   └── utils.ts           # Utility functions
│
├── data/                  # Static data
│   ├── projects.ts
│   ├── skills.ts
│   └── achievements.ts
│
└── types/                 # TypeScript types
    └── index.ts
```

## 🎯 Prinsip Modular

### 1. **Single Responsibility**

Setiap component/file punya satu tanggung jawab:

- `Button.tsx` → Hanya button component
- `useScrollProgress.ts` → Hanya track scroll progress
- `animations.ts` → Hanya animation variants

### 2. **Reusability**

Components dirancang untuk digunakan ulang:

```tsx
// ❌ Bad
<div className="text-center mb-16">
  <h2>Title</h2>
</div>

// ✅ Good
<SectionHeader title="Title" subtitle="Subtitle" />
```

### 3. **Separation of Concerns**

- **Data** → `data/` folder
- **Logic** → `hooks/` & `lib/`
- **UI** → `components/`
- **Styling** → Tailwind classes

### 4. **DRY (Don't Repeat Yourself)**

- Constants di `lib/constants.ts`
- Animations di `lib/animations.ts`
- Helpers di `lib/helpers.ts`

## 🔧 Best Practices Implemented

### Performance

✅ Dynamic imports untuk code splitting
✅ Image optimization dengan Next.js Image
✅ Lazy loading dengan Intersection Observer
✅ Memoization untuk expensive calculations

### Accessibility

✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ Focus states

### Mobile Responsive

✅ Mobile-first approach
✅ Tailwind breakpoints
✅ Touch-friendly targets (min 48px)
✅ Responsive typography

### Type Safety

✅ TypeScript strict mode
✅ Type definitions di `types/`
✅ Proper interface exports

### Code Organization

✅ Index files untuk clean imports
✅ Consistent naming conventions
✅ Logical folder structure
✅ Comment untuk complex logic

## 🚀 Cara Penggunaan

### Import Hooks

```tsx
import { useSmoothScroll, useIsMobile } from "@/hooks";

const { scrollToSection } = useSmoothScroll();
const isMobile = useIsMobile();
```

### Import Components

```tsx
import { Section, SectionHeader } from "@/components/common";
import { Button } from "@/components/ui/Button";
```

### Import Constants

```tsx
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
```

### Import Animations

```tsx
import { fadeIn, hoverScale } from "@/lib/animations";
```

## 📱 Responsive Design

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Pattern

```tsx
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
```

## ⚡ Performance Tips

1. Use `viewport={{ once: true }}` untuk animasi
2. Lazy load images dengan `loading="lazy"`
3. Minimize re-renders dengan `memo` dan `useMemo`
4. Code split dengan dynamic imports

## 🧪 Testing

Test di:

- Chrome DevTools (mobile mode)
- Safari (iOS)
- Firefox
- Edge

Ukuran: 320px, 375px, 768px, 1024px, 1440px

## 📚 Documentation

Setiap file punya:

- JSDoc comments untuk functions
- Type definitions
- Usage examples (jika perlu)

---

**Dibuat dengan ❤️ menggunakan Next.js 15, TypeScript, Tailwind CSS, Framer Motion**
