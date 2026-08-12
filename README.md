# Vaishnavi Pujari — Data Analyst Dashboard Portfolio

A recruiter-facing portfolio built to feel like an analytics dashboard (Power BI × Apple), not a generic personal site.

## Stack
- React 18 + Vite
- Tailwind CSS (custom navy/blue "dashboard" design tokens in `tailwind.config.js`)
- Framer Motion (page-load sequence, scroll reveals, hover micro-interactions)
- Recharts (skill-distribution pie chart, certification donut chart)
- lucide-react (icon set)

## Getting started
```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure
```
src/
  data/resumeData.js      # single source of truth — all resume content lives here
  hooks/useCountUp.js      # animated counter hook used by KPI cards
  components/
    Navbar.jsx             # dashboard "app bar" with scroll-spy tabs
    Loader.jsx              # boot-sequence loading animation
    Hero.jsx                 # Overview / KPI cards
    About.jsx                 # Summary panel
    Skills.jsx                 # Animated progress bars
    SkillsAnalytics.jsx         # Skill-distribution pie chart
    Projects.jsx / ProjectCard.jsx   # Filterable project dashboard cards
    Certifications.jsx           # Certificate cards + donut chart
    Timeline.jsx                   # Vertical career timeline
    Contact.jsx                     # Contact + resume download
    Footer.jsx
  App.jsx
  index.css
```

## Customizing content
Everything text/data-driven (KPIs, skills, projects, certifications, timeline, contact links) lives in
`src/data/resumeData.js`. Edit that file only — no need to touch components for content updates.

## Replacing the resume file
Drop your PDF into `public/` and update `profile.resumeFile` in `resumeData.js` to match the filename.
It's already wired to `Vaishnavi_Pujari_DA_Resume.pdf`.

## Deploying
The `dist/` folder from `npm run build` is a static site — deploy it to Vercel, Netlify, GitHub Pages,
or any static host.
