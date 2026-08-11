# TEDxYouth@YourSchool — React + Tailwind + Motion

This is the rebuilt version of your site: React, Tailwind CSS, and
[Motion](https://motion.dev) for animation, in the same black/red TEDx look
as before. It deploys to GitHub Pages automatically via GitHub Actions —
GitHub's servers do the actual build, so you don't need to run anything
locally just to publish a change.

**A note on KokonutUI specifically:** the interactive pieces (the
spotlight-glow button, the animated countdown, the scroll-reveal marquee
ticker, the FAQ accordion) are hand-built by me in the exact same stack
KokonutUI uses — Tailwind CSS, Motion, and the same component conventions —
because I wasn't able to pull their exact source code into this build
environment. The project is wired up (Tailwind, a `cn()` utility, the same
file conventions) so that if you install [Node.js](https://nodejs.org) and
want to add real KokonutUI components later, you can — see "Adding more
components" below.

## 1. What you need

- [Node.js](https://nodejs.org) (v20 or later) — only required if you want
  to preview changes on your own computer before pushing. If you're happy
  editing simple content (speaker names, dates, schedule) through GitHub's
  web editor and letting Actions build it, you can skip installing this.
- A GitHub repo — reuse `tedx-site-v1` (this replaces everything currently
  in it) or create a new one.

## 2. Push this to GitHub

If you're replacing your existing `tedx-site-v1` repo, the simplest path is
to delete all the old files in it first (select them all in the file list,
delete, commit), then upload everything in this folder the same way you
uploaded before: **Add file → Upload files**, dragging in every file and
folder here — including the hidden `.github` folder, which contains the
deploy workflow. GitHub's uploader does show hidden folders like `.github`
when you drag the whole project folder in.

If you have Node.js and are comfortable with git, this is more reliable:

```bash
cd tedx-react
git init
git add .
git commit -m "Rebuild in React + Tailwind + Motion"
git branch -M main
git remote add origin https://github.com/<your-username>/tedx-site-v1.git
git push -u origin main --force
```

(`--force` because this replaces the old static site's history — only use
it on the first push.)

## 3. Switch GitHub Pages to "GitHub Actions"

This is different from before — you're no longer deploying from a branch.

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, change it from "Deploy from a
   branch" to **GitHub Actions**.
3. Push a commit (or go to the **Actions** tab and re-run the workflow).
4. Watch the **Actions** tab — you'll see "Deploy to GitHub Pages" running.
   When it finishes (green check), your site is live at the same URL as
   before.

Every future push to `main` re-runs this automatically.

## 4. If your repo name isn't `tedx-site-v1`

Open `vite.config.ts` and change the `base` value to match your repo name
exactly, wrapped in slashes:

```ts
base: "/your-repo-name/",
```

If you skip this, the site will deploy but load with broken CSS/JS — the
built files will be looking in the wrong folder.

## 5. Editing content

Most day-to-day edits don't touch layout code at all:

| What | File |
|---|---|
| Speaker lineup | `src/data/speakers.ts` — one array entry per speaker |
| Schedule | `src/data/schedule.ts` — one array entry per session |
| FAQ | `src/data/faq.ts` |
| Event name, date, hero copy | `src/pages/home.tsx` |
| Countdown target date | `src/pages/home.tsx` — search for `target=` |
| Venue address, map | `src/pages/venue.tsx` |
| Colors, fonts | `tailwind.config.js` (the `brand`, `ink`, `muted` colors) |

Edit these directly on github.com (pencil icon → edit → commit) and Actions
rebuilds automatically, same rhythm as your old static site.

## 6. Local preview (optional)

If you installed Node.js:

```bash
npm install
npm run dev
```

Opens the site at `http://localhost:5173` with instant reload as you edit.

## 7. Connecting the registration form

Same situation as before — GitHub Pages can't run backend code. Open
`src/pages/register.tsx`, find the `handleSubmit` function, and point it at
a [Formspree](https://formspree.io) endpoint or swap the form for an
embedded Google Form, same as described in the original site's README.

## 8. Adding more components

If you install Node.js and want to pull in additional real KokonutUI
components later:

```bash
npx shadcn@latest add https://kokonutui.com/r/<component-name>.json
```

Browse available components at [kokonutui.com](https://kokonutui.com). The
project's Tailwind and folder setup already matches what their CLI expects.

## File structure

```
tedx-react/
├── .github/workflows/deploy.yml   Auto build + deploy on every push
├── src/
│   ├── pages/                     One file per page
│   ├── components/layout/         Navbar, footer, page transitions
│   ├── components/kokonutui/      Animated building blocks (button, countdown, etc.)
│   ├── data/                      Speakers, schedule, FAQ — edit these for content
│   ├── App.tsx                    Routes
│   └── index.css                  Tailwind + global styles
├── tailwind.config.js             Colors, fonts
└── vite.config.ts                 Build config — update `base` if you rename the repo
```
