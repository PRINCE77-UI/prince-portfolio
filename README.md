# PRINCE — THE SERIES

A cinematic, streaming-inspired portfolio for **Prince Kumar**, Full-Stack Developer and B.Tech Computer Engineering student.
Every section is an episode, every project is an *Original*, and the whole site plays like a series.

**Live:** https://prince77-ui.github.io/REPO-NAME/ &nbsp;·&nbsp; **GitHub:** [@PRINCE77-UI](https://github.com/PRINCE77-UI)

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)

## Features

- **Opening sequence:** studio card, title reveal and a "Who's watching?" profile screen (Recruiter, Developer or Creative) that reorders the sections for each viewer.
- **Hero billboard** with a parallax portrait, particles and a **Play Intro** highlight reel.
- **My Journey** told as seasons and episodes, **Originals** (projects) in a pinned horizontal sequence, and a full-screen project overlay.
- **Top 10** picks, skills grouped as genres, achievements and certifications.
- **Resume** as a designed sheet, an in-page PDF viewer and a download button.
- Smooth scrolling, 3D tilt, magnetic buttons and text reveals.
- **Responsive and accessible:** touch devices get swipe rails, `prefers-reduced-motion` is respected, and overlays close with Esc.

## Tech stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · Framer Motion 11 · Lenis

## Getting started

Requires **Node.js 18+**.

```bash
git clone https://github.com/PRINCE77-UI/prince-portfolio.git
cd REPO-NAME
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build the site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run images` | Rebuild the portrait WebP files and the social share image |

## Deployment

### GitHub Pages (automatic)

This repo includes a workflow at `.github/workflows/deploy.yml`.

1. Push the code to the `main` branch.
2. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site. Find the link under **Settings → Pages**, or in the **Actions** tab.

The workflow sets the correct base path for you: `/<repo-name>/` for a normal repo, or `/` if the repo is named `<username>.github.io`.

### Vercel / Netlify

Import the repo and keep the defaults: build command `npm run build`, output directory `dist`. No extra setup is needed.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (it shows up in Originals, the overlay, the resume sheet and the counts) |
| Achievements and certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |

**Resume:** replace `public/assets/Prince_Kumar_Resume.pdf`.

**Photo:** replace `pic1.png` (high-resolution photo) and `pic.png` (background-removed cutout with the same framing), then run `npm run images`.

## Project structure

```
.
├── .github/workflows/deploy.yml   GitHub Pages deployment
├── public/                        Favicon, resume PDF, portraits, share image
├── scripts/build-images.mjs       Portrait and share-image pipeline (sharp)
├── pic.png, pic1.png              Source photos used by the image script
└── src/
    ├── data/portfolio.ts          Single source of truth for all content
    ├── App.tsx                    Stages: opening → profile select → home, plus overlays
    ├── components/                One file per section or overlay
    │   ├── OpeningSequence, ProfileSelector, Navbar, Hero, PlayIntro
    │   ├── ContinueWatching, About, Seasons, Originals, TopPicks
    │   ├── Skills, Achievements, ResumeViewer, ResumeModal, FinalCTA
    │   └── ProjectCard, ProjectModal, EpisodeCard, Poster, Rail, Scene, fx
    └── hooks/                     Smooth scroll, media queries, section progress
```

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project and resume overlays:** Esc closes.

## Contact

**Prince Kumar**
[LinkedIn](https://www.linkedin.com/in/prince-kumar-7b9578323) · [GitHub](https://github.com/PRINCE77-UI) · Princekumarsng2005@gmail.com
