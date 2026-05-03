# Luigi Cavalli — Portfolio

Personal portfolio website built with React 19, TypeScript, and SCSS Modules. Single-page app with scroll-based animations, deployed on Firebase Hosting.

## Stack

- **React 19** + **TypeScript** — with React Compiler enabled
- **Vite 8** — build tool and dev server
- **SCSS Modules** — scoped component styles, custom design system
- **Intersection Observer** — scroll-based animations via `useInView` hook

## Project structure

```
src/
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Projects, Experience, Contact
    ui/           # Button, Tag
  data/           # projects.ts, experience.ts
  hooks/          # useInView.ts
  styles/         # _variables.scss, _mixins.scss, _reset.scss, _animations.scss
  types/          # index.ts
```

## Dev

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
firebase deploy
```
