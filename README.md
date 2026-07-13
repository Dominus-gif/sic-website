# Shah Industrial Corporation — Website

A modern, professional business showcase website for **Shah Industrial Corporation (SIC)**, a pan-India provider of integrated industrial solutions for mining, steel, cement, and power plants.

Built with **Next.js 14 (App Router)** and **Tailwind CSS**, ready to deploy on **Vercel**.

## Tabs / Pages

Mirrors the original site navigation:

- **Home** (`/`)
- **About Us** (`/about`)
- **Product & Services** (`/products`)
- **Blog** (`/blog`)
- **Contact Us** (`/contact`)

Plus supporting pages: Privacy Policy (`/privacy`), Terms & Conditions (`/terms`), and a custom 404.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Or via the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Editing content

All site copy (company details, services, values, blog posts, partners) lives in a single file: [`lib/site.js`](lib/site.js). Update it there and every page stays in sync.

## Project structure

```
app/            App Router pages (home, about, products, blog, contact, legal)
components/     Navbar, Footer, Logo, PageHero, ContactForm, Icon set
lib/site.js     Central content source
```

---

© Shah Industrial Corporation. *We Build, You Thrive.*
