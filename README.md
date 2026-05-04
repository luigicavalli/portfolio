# Luigi Cavalli — Portfolio

Personal portfolio website built with React 19, TypeScript, and SCSS Modules. Single-page app with scroll-based animations, deployed on Firebase Hosting.

## Stack

- **React 19** + **TypeScript** — with React Compiler enabled
- **Vite 8** — build tool and dev server
- **SCSS Modules** — scoped component styles, custom design system
- **Intersection Observer** — scroll-based animations and active nav via `useInView` / `useActiveSection` hooks
- **Vitest** + **Testing Library** — unit and component tests

## Project structure

```
src/
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Projects, Experience, Contact
    ui/           # Button, Tag
  data/           # projects.ts, experience.ts
  hooks/          # useInView.ts, useActiveSection.ts
  styles/         # _variables.scss, _mixins.scss, _reset.scss, _animations.scss
  test/           # setup.ts + all test files
  types/          # index.ts
```

## Commands

```bash
npm run dev          # start dev server
npm run build        # type-check + production build
npm test             # run test suite (34 tests)
npm run test:watch   # run tests in watch mode
firebase deploy      # deploy manually to Firebase Hosting
```

## CI/CD

- **CI** — runs on push to `develop`, `feature/**`, `fix/**`, `hotfix/**`: type check, lint, tests, build
- **CD** — runs on push to `main`: build + deploy to Firebase Hosting
