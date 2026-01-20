blebleble

```
app/
├── page.tsx                 // Home
├── blog/
│   ├── page.tsx            // Blog list
│   └── [slug]/page.tsx     // Individual post
├── team/page.tsx
├── layout.tsx              // Root layout (navbar, footer)
└── globals.css

components/
├── navbar.tsx
├── footer.tsx
├── theme-provider.tsx
├── project-card.tsx
├── project-modal.tsx       // Popup for project details
└── blog-card.tsx

content/
├── blog/                   // .md files here
│   └── example-post.md
└── projects.json           // All project data

lib/
├── blog.ts                 // Functions to read/parse markdown
└── utils.ts                // cn() and other helpers

public/
├── images/
│   ├── projects/
│   └── blog/
└── logo.svg
```

**RedFox Studios Website Requirements:**

**Company Info:**
- Game development company (Unreal Engine focus, but uses other engines/tools)
- No current clients, looking to get them
- Team exists, need team page
- Logo available, using Shadcn zinc theme

**Tech Stack:**
- Next.js (App Router)
- Shadcn UI (zinc theme)
- Tailwind CSS
- Geist Sans + Geist Mono fonts
- Dark/light mode toggle
- Regular .md files for blog (not MDX)
- Static hosting (GitHub Pages initially)

**Site Structure:**

*Home page:*
- Navbar (with theme toggle)
- Hero section
- Short about us
- What we do (services)
- Top 3 projects (with "see more" → opens popup or goes to projects page)
- Latest blog posts (redirect to blog page)
- Contact section (email/socials only, no forms)
- Footer

*Blog page:*
- List of posts with search, tags, sorting
- Individual blog post pages
- Frontmatter: title, date, tags, description
- Multiple topics (game dev, reverse engineering, etc.)

*Team page:*
- Simple team member showcase

*Projects:*
- Either popup modal on home page OR separate page with list
- On click → show popup with project details
- Some projects don't have screenshots/videos (need placeholder solution)
- Store in projects.json

*About:*
- Maybe in blog or separate, doesn't matter

**Priorities:**
- Keep it maintainable and easy to develop in future
- SEO matters
- No unnecessary features now, but structured for future additions
- Clean code, best practices, optimized
