## ✅ Phase 1 — Foundation (Highest Priority)

### 1. Initialize Project & Core Setup

- [x] Create Next.js App Router project with TypeScript
- [x] Configure Tailwind CSS + typography plugin
- [x] Add `next/font` for Inter + Mono fonts
- [x] Configure global layout + dark mode base
- [x] Add `next-seo` or metadata config
- [x] Create pages: `/`, `/about`, `/projects`

### 2. Blog System (MDX + Contentlayer)

- [ ] Install and configure Contentlayer
- [ ] Add MDX support with:

  - [ ] `remark-gfm`
  - [ ] `rehype-slug`
  - [ ] `rehype-autolink-headings`
  - [ ] `rehype-pretty-code` (Shiki)

- [ ] Create `content/posts/*`
- [ ] Create blog routes:

  - [ ] `/blog` (index)
  - [ ] `/blog/[slug]` (post)

- [ ] Add sidebar / pagination (optional)
- [ ] Generate static params for MDX posts
- [ ] Add `prose` styling for blog pages

### 3. Routing & Layout Structure

- [x] Define folder structure:

  ```
  app/
    blog/
    games/
    api/
  components/
  content/posts/
  lib/
  public/
  styles/
  ```

- [x] Create nav + footer components
- [x] Add responsive layout + basic design

---

## ✅ Phase 2 — Interactive Features & APIs

### 4. Game Environment

- [ ] Create `/games` page
- [ ] Add at least one playable client-side mini-game (`/games/<game-name>`)
- [ ] Export reusable game UI components (controls, scoreboard UI)

### 5. Backend Endpoints

- [ ] Create API routes:

  - [ ] `POST /api/scores` — store score
  - [ ] `GET /api/leaderboard` — fetch leaderboard

- [ ] Store scores in DB (choose one):

  - [ ] Turso / SQLite
  - OR
  - [ ] Supabase

- [ ] Add validation for game data
- [ ] (Optional) Edge runtime config for low-latency reads

---

## ✅ Phase 3 — UI Enhancements & Content Experience

### 6. MDX Enhancements

- [ ] Add custom MDX components (e.g., `Callout`, `YouTube`, `Chart`)
- [ ] Add code copy button in code blocks
- [ ] Enable table of contents (auto-generated or manual)
- [ ] Support image embedding in MDX

### 7. Styling & UX

- [x] Dark/light theme toggle using `next-themes`
- [ ] Configure typography theme overrides
- [ ] Add animations (Framer Motion optional)
- [ ] Add optimized images with `next/image`

---

## ✅ Phase 4 — Performance, SEO, Deployment

### 8. Performance Optimization

- [ ] Use **server components** for static content
- [ ] Use `generateStaticParams` for posts
- [ ] Edge caching for blog pages or API (optional)

### 9. SEO + Metadata

- [ ] Add OpenGraph metadata
- [ ] Add canonical URLs
- [ ] Add `robots.txt`
- [ ] Add `sitemap.xml`
- [ ] (Optional) RSS feed

### 10. Deployment

- [ ] Deploy to Vercel
- [ ] Add env vars (DB keys, etc.)
- [ ] Test preview deployments
- [ ] Add monitoring (Vercel analytics or Logtail / Sentry optional)

---

## 🧠 Future Enhancements (Lower Priority)

- [ ] Admin page for writing blogs (editor UI or CMS)
- [ ] Gamification badges + leaderboard profile pages
- [ ] Animated portfolio timeline
- [ ] Search across blogs (Lunr.js or Algolia)
- [ ] Unit tests for API endpoints
- [ ] Lighthouse audit automation

---
