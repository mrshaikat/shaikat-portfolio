# Shaikat Portfolio

Built with **Vite + React + TypeScript + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Navbar.tsx        # Sticky nav with scroll blur
│   ├── Hero.tsx          # Hero with animated stats
│   ├── About.tsx         # About + info cards
│   ├── Skills.tsx        # Skill category cards
│   ├── Projects.tsx      # Project showcase
│   ├── Experience.tsx    # Work history
│   ├── Contact.tsx       # Contact links + email
│   ├── Footer.tsx
│   └── SectionLabel.tsx  # Reusable section label
├── hooks/
│   ├── useCursor.ts      # Custom cursor logic
│   └── useScrollReveal.ts # IntersectionObserver reveal
├── data/
│   └── index.ts          # All portfolio content (edit here)
├── App.tsx
├── main.tsx
└── index.css             # Tailwind + custom utilities
```

## Customization

All content lives in `src/data/index.ts` — edit skills, projects, responsibilities, and contact links there.

## Deploy

Works with any static host:
- **Vercel**: `vercel deploy`
- **Netlify**: drag the `dist/` folder
- **GitHub Pages**: use `gh-pages` package
