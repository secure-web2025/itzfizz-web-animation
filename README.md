# ITZFIZZ — Scroll-Driven Hero Animation

Frontend internship assignment built with:

- React
- Vite
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- HTML / CSS / JavaScript

## Features

- Animated hero headline on page load
- Staggered statistics reveal
- Scroll-driven hero visual movement
- GSAP ScrollTrigger with scrub
- Pinned hero section
- Parallax UI elements
- Responsive layout
- Reduced-motion support
- GitHub Pages deployment configuration

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `itzfizz-web-animation`.
2. Push this project to the repository.
3. In `package.json`, make sure the project scripts are present.
4. Run:

```bash
npm install
npm run deploy
```

5. In GitHub, open **Settings → Pages** and select the `gh-pages` branch if GitHub does not enable it automatically.
6. Your live site will look like:

```text
https://YOUR-USERNAME.github.io/itzfizz-web-animation/
```

## Important

Replace `YOUR-USERNAME` with your actual GitHub username when submitting the live URL.

The project uses `base: "./"` in Vite so it can be served from a GitHub Pages project path.
