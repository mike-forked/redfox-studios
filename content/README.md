# Content Directory

This directory contains all the content configuration files for the RedFox Studios website. By separating content from components, the website becomes much easier to maintain and update.

## Content Files

### Site Configuration

- **`site-config.ts`** - Global site information
  - Site name, description, URL
  - Contact email
  - Social media links (GitHub, LinkedIn)

### Page Content

- **`hero.ts`** - Hero section content
  - Badge text
  - Main title and description
  - Call-to-action button labels and links

- **`features.ts`** - Features section
  - Section heading and badge
  - List of features with titles and descriptions
  - Currently includes 6 features (Game Development, Unreal Engine Expertise, etc.)

- **`testimonials.ts`** - Client testimonials
  - Section heading and badge
  - List of testimonials with quotes and author information
  - Currently includes 4 testimonials

- **`team.ts`** - Team members
  - Section heading and description
  - List of team members with roles, bios, skills, and optional contact links
  - Currently includes 3 team members (placeholder data)

### Navigation

- **`nav-config.ts`** - Navigation menu configuration
  - Logo text and link
  - Navigation links (Home, Blog, Team)

- **`footer-config.ts`** - Footer structure
  - Footer sections (Product, Company, Connect, Legal)
  - Links for each section with external link support
  - Copyright text

### Existing Content

- **`projects.json`** - Project showcase data (already existed)
- **`blog/`** - Blog posts as markdown files (already existed)

## How to Update Content

### Updating Text Content

Simply edit the TypeScript files. For example, to change the hero title:

1. Open `content/hero.ts`
2. Edit the `title` field
3. Save the file

```typescript
export const heroContent = {
  title: "Your New Title Here", // Change this
  // ...
}
```

### Adding a New Feature

In `content/features.ts`:

```typescript
export const features: Feature[] = [
  // existing features...
  {
    title: "New Feature Name",
    description: "Description of your new feature.",
  },
]
```

### Adding a New Team Member

In `content/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  // existing members...
  {
    name: "Jane Doe",
    role: "Senior Developer",
    bio: "Jane specializes in game optimization and performance.",
    skills: ["Performance", "Optimization", "C++"],
    image: "/team/jane-doe.jpg", // Optional
    github: "https://github.com/janedoe", // Optional
    linkedin: "https://linkedin.com/in/janedoe", // Optional
    email: "jane@redfoxstudios.com", // Optional
  },
]
```

### Adding a Testimonial

In `content/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  // existing testimonials...
  {
    quote: "The testimonial quote goes here.",
    author: {
      name: "John Smith",
      title: "CEO",
      company: "Tech Company",
    },
  },
]
```

### Adding Navigation Links

In `content/nav-config.ts`:

```typescript
export const navConfig = {
  links: [
    // existing links...
    {
      label: "Services",
      href: "/services",
    },
  ],
}
```

### Updating Social Links

In `content/site-config.ts`:

```typescript
export const siteConfig = {
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/company/your-company",
  },
}
```

## Benefits

1. **Easy Maintenance** - All content in one place, no need to dig through component files
2. **Type Safety** - TypeScript provides autocomplete and catches errors
3. **Reusability** - Content can be reused across multiple components
4. **Non-Developer Friendly** - Content is in simple, readable format
5. **Version Control** - Easy to track content changes in Git

## Technical Notes

- All content files use TypeScript (`.ts`) for type safety
- Files export typed objects using `export const` with `as const` for immutability
- TypeScript interfaces define the structure of the data
- Components import and use this data, keeping logic separate from content
