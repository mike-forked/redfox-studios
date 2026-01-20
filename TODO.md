blebleble

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
