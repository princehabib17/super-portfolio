# 🌟 Super Portfolio - Black & Gold Showcase

A premium Next.js portfolio website featuring advanced animations, 3D elements, and bilingual support (Arabic/English RTL).

## ✨ Features

- **🎨 Black & Gold Design**: Elegant color scheme with gold accents
- **🌐 Bilingual Support**: Full Arabic RTL and English support  
- **📱 Mobile-First**: Responsive design optimized for all devices
- **🎬 Advanced Animations**: GSAP-powered scroll-triggered animations
- **🎯 3D Elements**: Interactive React Three Fiber components
- **⚡ Performance**: Optimized with Next.js 14 and modern web standards
- **♿ Accessibility**: WCAG compliant with reduced-motion support

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS-in-JS with CSS Variables  
- **Animation**: GSAP + ScrollTrigger
- **3D**: React Three Fiber + Drei
- **Motion**: Lottie React for complex animations
- **Fonts**: Inter + Noto Kufi Arabic

## 🏗️ Project Structure

```
super_portfolio/
├── app/
│   ├── [locale]/           # Internationalized routing
│   ├── globals.css         # Enhanced CSS with animations
│   └── layout.tsx          # Root layout with fonts
├── components/
│   ├── Hero.tsx            # Interactive hero section
│   ├── CaseStudies.tsx     # Project showcases
│   ├── ProcessCards.tsx    # Design process breakdown
│   ├── BentoWhy.tsx        # Skills bento grid
│   ├── FAQ.tsx             # Collapsible FAQ section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Site footer
│   └── ServicesSticky/     # Advanced service sections
│       ├── ServicesSticky.tsx    # Sticky scroll controller
│       ├── WebDesignTimeline.tsx # Before/after showcase
│       ├── ScrollShowreel.tsx    # App preview component
│       ├── WorkflowRibbon.tsx    # Process flow display
│       ├── MotionLottie.tsx      # Lottie animation player
│       └── R3FOrb.tsx            # 3D gold orb component
├── lib/
│   ├── motion/gsapClient.ts      # GSAP configuration
│   └── a11y/useReducedMotion.ts  # Accessibility hook
└── public/                       # Static assets and images
```

## 🎯 Key Components

### 🎬 ServicesSticky
Advanced sticky-scroll section with:
- Dynamic active state tracking
- GSAP-powered scroll triggers  
- Multiple interactive panels
- Reduced motion support

### 🎨 3D Gold Orb
Interactive Three.js component featuring:
- Metallic gold material with realistic lighting
- Smooth orbital controls
- Performance-optimized rendering
- Fallback image for reduced motion

### 📱 Responsive Design
- Mobile-first CSS Grid layouts
- Clamp() typography scaling
- Touch-friendly 48px+ targets
- Optimized for portrait/landscape

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the portfolio.

## 🎨 Customization

### Colors
Update CSS variables in `globals.css`:
```css
:root {
  --carbon: #0A0A0A;    /* Dark background */
  --porcelain: #F7F7F5; /* Light text */
  --gold: #D4AF37;      /* Accent color */
  --gold-focus: #F2C94C; /* Focus states */
}
```

### Content
- **Hero**: Update `components/Hero.tsx`
- **Case Studies**: Modify `components/CaseStudies.tsx` 
- **Services**: Edit `components/ServicesSticky/ServicesSticky.tsx`
- **FAQ**: Customize `components/FAQ.tsx`

## 📊 Performance Features

- **Next.js 14**: Latest framework optimizations
- **Image Optimization**: Automatic WebP conversion
- **Code Splitting**: Lazy-loaded 3D components  
- **Bundle Analysis**: Optimized dependencies
- **SEO Ready**: Meta tags and structured data

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels  
- **Reduced Motion**: `prefers-reduced-motion` support
- **Color Contrast**: WCAG AA compliant ratios
- **Focus Management**: Visible focus indicators

## 🌍 Internationalization

Built-in support for:
- **Arabic RTL**: Right-to-left layout
- **English LTR**: Left-to-right layout  
- **Font Loading**: Optimized Arabic web fonts
- **Content Localization**: Easy content switching

## 📝 License

This project is for portfolio demonstration purposes.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**