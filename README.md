# Picasso Dental Clinic Website

A full-stack duplicate of [picassodental.vn](https://picassodental.vn/) built with **Strapi v5** (backend) and **Next.js 14** (frontend).

## Tech Stack

- **Backend:** Strapi v5, SQLite, TypeScript
- **Frontend:** Next.js 14, React 18, Tailwind CSS, TypeScript
- **Migration:** Custom script to scrape and import all 228 pages from the original site

## Project Structure

```
├── backend/          # Strapi v5 CMS
│   ├── config/       # Server, database, middleware config
│   └── src/api/      # Content types (Article, Page, Service, etc.)
├── frontend/         # Next.js application
│   └── src/
│       ├── app/      # App Router pages
│       ├── components/ # React components
│       ├── lib/      # Strapi API client
│       └── styles/   # Global CSS
└── scripts/          # Migration scripts
```

## Content Types

| Type | Description |
|------|-------------|
| Article | Blog posts (178 articles) |
| Page | Static pages (36 pages) |
| Category | Article categories (13) |
| Service | Dental services offered |
| Team Member | Doctors and staff |
| Location | Clinic locations (Hanoi, Da Nang, HCMC) |
| Review | Patient testimonials |
| Homepage | Homepage content (single type) |
| Gallery Item | Before/After photos |
| FAQ | Frequently asked questions |

## Getting Started

### 1. Start Strapi Backend

```bash
cd backend
npm install
npm run develop
```

Open http://localhost:1337/admin and create an admin account.

### 2. Start Next.js Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

### 3. Migrate Content (Optional)

```bash
# Generate an API token in Strapi admin (Settings > API Tokens)
STRAPI_TOKEN=your_token npx tsx scripts/migrate.ts
```

This will scrape all 228 pages from picassodental.vn and import them into Strapi.

## Design

The frontend replicates the original site design:
- **Primary color:** #C8902D (gold)
- **Accent color:** #0D3C79 (dark blue)
- **Button color:** #13297E (navy)
- **Fonts:** PP Fragment (headings), Afacad (body)
- **Container:** 1320px max-width
