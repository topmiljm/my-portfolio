# James Topmiller — Personal Portfolio

A personal portfolio website built to showcase my software development projects, technical skills, and experience as a full-stack software developer.

The site was designed and developed from scratch using React and Vite, with an emphasis on responsive design, clean component architecture, subtle animations, and accessibility.

## Live Site

[https://jamestopmiller-dev.vercel.app/]

> Update the URL above if the final deployed domain is different.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Custom navigation bar with responsive navigation
- Hero section with animated text reveal
- About section describing my development background
- Projects section featuring deployed applications
- Project screenshots and technology tags
- Live project and GitHub repository links
- Mobile-specific project screenshots where appropriate
- Resume PDF accessible directly from the website
- Contact section
- Scroll-based section reveal animations
- `prefers-reduced-motion` support
- Reusable React components
- Project information stored separately from presentation components

## Projects

The portfolio currently showcases the following projects:

### JT's Vinyl Store

A full-stack e-commerce application for browsing vinyl records, managing a shopping cart, and completing purchases through Stripe.

**Technologies:**

- React
- Node.js
- Express
- Stripe
- PostgreSQL
- Resend
- Vercel
- Render

### Kings Island Coasters

A React application exploring the history of Kings Island roller coasters through timelines, coaster details, historical data, records, and decade breakdowns.

**Technologies:**

- React
- JavaScript
- React Router
- JSON
- CSS
- Vercel

### Zen Zinnati Music

A responsive music application for exploring albums and tracks, with persistent audio playback and album detail pages.

**Technologies:**

- React
- React Router
- JavaScript
- CSS
- Cloudinary
- Resend
- Vercel
- Render

### Which Beatle Said It?

An interactive React application that challenges users to identify which member of The Beatles said a particular quote.

**Technologies:**

- React
- JavaScript
- CSS
- SQL
- Vercel
- Render

### Cheap Machines Music

A responsive music website built for a local band to showcase their music, releases, shows, and other information.

**Technologies:**

- React
- JavaScript
- CSS
- Vercel

### MNTN James Music

A responsive personal music website showcasing original music, projects, and creative work.

**Technologies:**

- React
- JavaScript
- CSS
- Cloudinary
- Vercel

## Tech Stack

### Frontend

- React
- JavaScript
- React Router
- HTML5
- CSS3

### Development

- Vite
- ESLint
- Git
- GitHub

### Deployment

- Vercel

## Project Structure

```text
portfolio/
├── public/
│   ├── projects/
│   │   ├── jts-vinyl-store.png
│   │   ├── kings-island-coasters.png
│   │   ├── zen-zinnati-music.png
│   │   ├── which-beatle-said-it.png
│   │   ├── cheapmachines-music.png
│   │   └── mntn-james-music.png
│   │
│   └── James_Topmiller_Resume.pdf
│
├── src/
│   ├── assets/
│   │   └── logos/
│   │       └── logo.png
│   │
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   │
│   │   └── ScrollReveal/
│   │       ├── ScrollReveal.jsx
│   │       └── ScrollReveal.css
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── site.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── notes/
│   ├── 01-project-setup.md
│   ├── ...
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js