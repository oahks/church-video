# Adeyeye Emmanuel — Church Video Editor Portfolio

A premium, conversion-focused portfolio for **Adeyeye Emmanuel**, a professional church video editor based in Nigeria. The site positions Emmanuel as a ministry-focused creative partner who helps churches extend their reach through sermon editing, worship highlights, event recaps, testimony videos, and short-form social content.

Built with a dark cinematic design, gold accents, glassmorphism, scroll animations, and a video-first project showcase.

## Features

- **Hero** — Full-viewport cinematic section with video background (gradient fallback), profile card, CTAs, and animated stats
- **About** — Ministry-focused bio, personal quote, and experience highlights
- **Services** — Six church video editing service cards with deliverables
- **Content Funnel** — "One Sermon. Unlimited Reach." before/after infographic
- **Portfolio** — Filterable 2-column video cards, hover previews, case-study modals
- **Showreel** — Dedicated full-width video player section
- **Process** — Four-step workflow timeline
- **Testimonials** — Auto-advancing carousel with optional video testimonial modal
- **FAQ** — Accordion with common client questions
- **Contact** — Custom lead form (FastSubmit API), email, WhatsApp, and social links
- **Sticky glass navigation** with mobile menu
- **Floating WhatsApp button**
- **SEO metadata** and Open Graph image

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Playfair Display + DM Sans (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install & run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
pnpm build
pnpm start
```

## Customizing Content

Most copy and links live in data files — update these without touching components.

| What to change | File |
|----------------|------|
| Name, contact, FastSubmit form, WhatsApp, stats, nav | [`lib/site-config.ts`](lib/site-config.ts) |
| Services | [`lib/data/services.ts`](lib/data/services.ts) |
| Portfolio projects & case studies | [`lib/data/projects.ts`](lib/data/projects.ts) |
| Showreel video | [`lib/data/showreel.ts`](lib/data/showreel.ts) |
| Testimonials | [`lib/data/testimonials.ts`](lib/data/testimonials.ts) |
| Process steps | [`lib/data/process.ts`](lib/data/process.ts) |
| FAQ items | [`lib/data/faq.ts`](lib/data/faq.ts) |
| SEO title, description, domain | [`app/layout.tsx`](app/layout.tsx) |

### Profile photo

Replace [`public/images/placeholders/profile.svg`](public/images/placeholders/profile.svg) with a real headshot and update `profileImage` in `lib/site-config.ts`.

### Hero background video

Add a looping MP4 at `public/videos/placeholders/hero-loop.mp4` and ensure `heroVideo` in `lib/site-config.ts` points to it. If the file is missing, the hero falls back to an animated gradient.

### Portfolio videos & thumbnails

Add assets under `public/` and reference paths in `lib/data/projects.ts`. Use lowercase folder names — Linux/Vercel builds are case-sensitive.

### Showreel

Update the YouTube URL or local video path in `lib/data/showreel.ts`.

### Contact form

Submissions POST to FastSubmit via `submitUrl` in `lib/site-config.ts`. The styled form lives in `components/ui/ContactForm.tsx`.

## Project Structure

```
video-portfolio/
├── app/
│   ├── layout.tsx          # fonts, SEO metadata
│   ├── page.tsx            # section composition
│   └── globals.css         # design tokens, utilities
├── components/
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── sections/           # Hero, About, Services, etc.
│   └── ui/                 # Button, VideoPlayer, modals, carousel
├── lib/
│   ├── site-config.ts      # site-wide config
│   ├── utils.ts
│   ├── utils/media-path.ts # public asset path helpers
│   └── data/               # services, projects, FAQ, etc.
└── public/
    ├── images/placeholders/
    ├── videos/placeholders/
    └── og-image.svg
```

## Placeholder Assets

The site ships with placeholder SVGs, sample testimonials, and a YouTube stub for the showreel. Swap in real church media by updating the data files and dropping assets into `public/`.

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host that supports Next.js:

```bash
pnpm build
```

Set the production domain in `metadataBase` inside `app/layout.tsx`.

## License

Private project. All rights reserved.
