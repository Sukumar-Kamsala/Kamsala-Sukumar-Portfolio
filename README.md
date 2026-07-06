# Kamsala Sukumar — Portfolio

A single-page, production-ready portfolio site. No build step required — it's plain HTML/CSS/JS.

## Structure
```
index.html              Page markup + all content
css/style.css            Full design system (dark "operations console" theme + light mode)
js/main.js                Icons, smooth scroll, 3D hero background, marquee, video handling, animations, theme toggle, contact form
assets/img/                Profile photo + video poster frames
assets/video/               Hero feed, floating globe orb, achievements background, and the 3 project dashboard walkthroughs
assets/resume/               Downloadable résumé PDF
```

## What's using your videos
- **Hero "LIVE_FEED" panel** — `assets/video/hero-video.mp4`, autoplaying inside the glass console card, with your key stats (accuracy, industries, certs, CGPA) below it.
- **Floating globe orb** — `assets/video/globe.mp4`, a small glowing sphere floating near the hero, screen-blended into the dark background.
- **Achievements section background** — `assets/video/blackhole.mp4`, playing faintly behind the "By the Numbers" stat cards.
- **Project cards** — each of the three projects now plays its real dashboard walkthrough instead of a generated chart:
  - Hospital Resource Optimization → `hro-dashboard.mp4`
  - Traffic Volume Analysis → `tva-dashboard.mp4`
  - Card Manufacturing Analysis → `cma-dashboard.mp4`

All videos are muted, loop automatically, and only play while scrolled into view (via `IntersectionObserver`) to keep the page light on battery and bandwidth. Every video has a poster frame so the layout never jumps while it loads.

## Skills marquee
The "Core Stack" strip under the Skills section is a seamless, auto-scrolling row of tool icon + name pills (Python, SQL, Power BI, Tableau, AWS, Git, etc.) — it pauses only for `prefers-reduced-motion` users. The Tech Stack section below it stays a static icon grid, since that already reads clearly without motion.

## Things to still replace before you publish
1. **LinkedIn URL** — marked `data-placeholder="linkedin"` in `index.html`.
2. **GitHub profile URL** — marked `data-placeholder="github-profile"`.
3. **Project GitHub repos / live dashboard links** — marked `data-placeholder="github"` / `data-placeholder="dashboard"`.

Every placeholder link shows a hover tooltip reading "placeholder — replace href" so they're easy to spot.

## Running locally
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Deploying
Static site — drop the whole folder into Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

## Notes
- Theme toggle persists via `localStorage`.
- The hero's animated particle-network canvas (Three.js) and all video autoplay gracefully skip themselves if the visitor has "reduce motion" enabled.
- Fonts, GSAP, Lenis, Three.js and Devicon load from CDNs — an internet connection is needed for full visual fidelity.
