# Klieg House

> "We don't distribute films. We give them a first night worth remembering."

Klieg House is a fictional film-launch company — a studio-adjacent house that
builds premieres, teaser campaigns, and press days for films that deserve to
be an event. This repo is its website: a Next.js frontend served by its own
Laravel API.

**Repo layout — monorepo:**
```
klieg-house/
├── frontend/   Next.js 14 (App Router) — the site itself
└── api/        Laravel — /api/films and /api/subscribers
```

---

## Screenshots

> Add screenshots here after running the app locally (`npm run dev` in
> `frontend/`, with the API running). This sandbox can build and type-check
> the app but has no way to open a browser and capture pixels, so the images
> below are placeholders — swap them for real ones before you submit.

| Page | Screenshot |
|---|---|
| Landing / hero | `docs/screenshots/home.png` |
| Upcoming Launches | `docs/screenshots/launches.png` |
| Film detail | `docs/screenshots/film-detail.png` |
| Company | `docs/screenshots/company.png` |
| Newsletter success state | `docs/screenshots/newsletter-success.png` |

```md
![Landing page](docs/screenshots/home.png)
![Upcoming Launches](docs/screenshots/launches.png)
![Film detail](docs/screenshots/film-detail.png)
```

---

## The design, briefly

- **Signature element:** a live timecode readout (`REEL 01 · HH:MM:SS:FF`)
  pinned to the corner of every page, counting at 24fps like the burnt-in
  timecode on a film print — a small, constant reminder that you're at a
  screening, not a webpage.
- **Palette:** near-black stage (`#0B0C10`), klieg-light gold (`#F2C879`),
  and a deep marquee red (`#7A1F2B`) used sparingly, on the theory that a
  premiere happens in the dark under one warm light, not a bright UI.
- **Type:** Bodoni Moda (display, poster-style contrast) + Inter (body) +
  IBM Plex Mono (timecodes, labels, dates — the "ticket stub" voice).
- **Motion:** a one-time klieg-light sweep across the hero on load, then it
  settles — the room going dark before the film starts, not a looping effect.

---

## Setup & run guide

### 1. The API (Laravel)

This repo includes the application-specific Laravel files (models,
controllers, migrations, seeders, routes, config) rather than a full
`laravel new` skeleton — see **Trade-offs** below for why. To run it:

```bash
cd api

# Scaffold a fresh Laravel 11 app, then drop this repo's files into it
composer create-project laravel/laravel . --prefer-dist
# (when prompted about overwriting files, keep this repo's copies)

composer install
cp .env.example .env
php artisan key:generate

# SQLite is the fastest path to "it just runs":
touch database/database.sqlite

php artisan migrate
php artisan db:seed --class=Database\\Seeders\\FilmSeeder

php artisan serve
# API now live at http://localhost:8000/api
```

Quick check: `curl http://localhost:8000/api/films` should return the five
launches seeded in `database/seeders/FilmSeeder.php`.

### 2. The frontend (Next.js)

```bash
cd frontend
npm install
cp .env.local.example .env.local
# NEXT_PUBLIC_API_URL=http://localhost:8000/api

npm run dev
# Site now live at http://localhost:3000
```

The frontend reads `NEXT_PUBLIC_API_URL` for every request — nothing about
the films or the slate is hard-coded into the frontend. `npm run build`
requires internet access once (to fetch Bodoni Moda / Inter / IBM Plex Mono
from Google Fonts at build time via `next/font/google`); after that the
fonts are self-hosted from the build output.

### API reference

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/films` | List all launches. Supports `?featured=1` and `?status=upcoming\|teaser\|announced\|premiered` |
| `GET` | `/api/films/{slug}` | Single film, used by the detail page |
| `POST` | `/api/subscribers` | Persists a newsletter sign-up or contact message. Body: `{ email, name?, message?, source: "newsletter" \| "contact" }` |

---

## Stack choices & trade-offs (built under a same-day deadline)

- **Monorepo, not two repos** — one clone, one PR history, easier for a
  reviewer to see frontend and API changes land together.
- **Laravel skeleton not vendored in git** — a stock `laravel new` project
  is ~80 boilerplate files (bootstrap, config/*, public/index.php, artisan,
  etc.) that add nothing to review. This repo ships only the code that's
  actually about Klieg House — models, migrations, controllers, routes,
  seeders, CORS config — and the setup guide above scaffolds the rest in one
  command. Trade-off: the API isn't a `git clone && composer install` away
  from running; it's one extra `composer create-project` step.
- **SQLite over MySQL/Postgres for local dev** — zero setup for whoever's
  grading this, same Eloquent code either way. `.env.example` shows how to
  swap to MySQL.
- **Poster art is generated SVG, not stock photography** — five distinct
  poster treatments, one per film's genre, built as code so there's no
  licensing question and no dependency on an image API mid-deadline.
  `frontend/public/posters/*.svg`.
- **Teasers use a public-domain sample video** (Blender Foundation's
  "Big Buck Bunny," via MDN's asset CDN) instead of a fake YouTube embed,
  so the trailer player is genuinely functional rather than a dead link.
- **No test suite** — with the time budget spent on UI/UX polish and the
  full-stack wiring, automated tests were the first thing cut. `SubscribeRequest`
  and the two controllers are small and pure enough to unit test quickly if
  time allows; that would be the next thing added.
- **No auth** — nothing in the brief needs it, and adding it would be
  scope, not craft.

---

## Live deployment (optional)

Not deployed by default. To deploy:
- **Frontend:** push `frontend/` to Vercel, set `NEXT_PUBLIC_API_URL` to
  your hosted API's URL.
- **API:** any PHP host that supports Laravel (Laravel Forge, Railway,
  Render). Set `FRONTEND_URL` in `.env` to your Vercel URL so CORS allows it.
