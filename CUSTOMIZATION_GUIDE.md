# Portfolio Customization Guide

This guide will help you customize your portfolio template with your personal information.

## Quick Start

1. **Update Personal Information** - Edit `src/resources/content.tsx`
2. **Update Configuration** - Edit `src/resources/once-ui.config.ts`
3. **Add Your Images** - Replace images in `public/images/`
4. **Add Content** - Create blog posts and project pages

## Step-by-Step Customization

### 1. Personal Information (`src/resources/content.tsx`)

#### Person Details
- **firstName, lastName, name**: Your name
- **role**: Your job title (e.g., "Software Engineer", "Designer")
- **avatar**: Path to your profile picture (place in `public/images/`)
- **email**: Your contact email
- **location**: Your IANA timezone (e.g., "America/New_York", "Europe/London")
- **languages**: Array of languages you speak (or empty array `[]`)

#### Social Media Links
Update the `social` array with your profiles:
- GitHub, LinkedIn, Instagram, Threads, Twitter/X, etc.
- Set `essential: true` for links to show on the about page
- Available icons: `github`, `linkedin`, `instagram`, `threads`, `x`, `twitter`, `discord`, `email`

#### Home Page Content
- **headline**: Your main tagline
- **subline**: Brief description about yourself
- **featured**: Featured project badge (set `display: false` to hide)
- **title/description**: SEO metadata

#### About Page Content
- **intro**: Your introduction/bio
- **work**: Work experience with achievements
- **studies**: Education background
- **technical**: Technical skills and technologies

#### Blog & Projects
- Blog posts: Add `.mdx` files to `src/app/blog/posts/`
- Projects: Add `.mdx` files to `src/app/work/projects/`

#### Gallery
- Add images to `public/images/gallery/`
- Update the `gallery.images` array with your photos
- Set `orientation: "horizontal"` or `"vertical"` based on aspect ratio

### 2. Configuration (`src/resources/once-ui.config.ts`)

#### Base URL
```typescript
const baseURL: string = "https://yourname.com";
```
Update with your actual domain (or Vercel/deployment URL).

#### Routes
Enable/disable pages:
```typescript
const routes: RoutesConfig = {
  "/": true,        // Always enabled
  "/about": true,   // Set to false to disable
  "/work": true,    // Set to false to disable
  "/blog": true,    // Set to false to disable
  "/gallery": true, // Set to false to disable
};
```

#### Schema (SEO)
```typescript
const schema: SchemaConfig = {
  logo: "",                    // Your logo URL
  type: "Person",              // "Person" or "Organization"
  name: "Your Name",           // Your name or company name
  description: home.description,
  email: "your.email@example.com",
};
```

#### Social Links (Schema)
```typescript
const sameAs: SameAsConfig = {
  threads: "https://www.threads.com/@yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  // Add more as needed
};
```

#### Mailchimp Newsletter
Get your subscription URL from Mailchimp and update:
```typescript
const mailchimp: MailchimpConfig = {
  action: "https://yourmailchimp.subscribe/post?parameters",
  // ... effects config
};
```

#### Style Customization
Customize colors, theme, and design:
```typescript
const style: StyleConfig = {
  theme: "system",        // "dark" | "light" | "system"
  neutral: "gray",       // "sand" | "gray" | "slate" | "custom"
  brand: "cyan",         // Various color options
  accent: "red",         // Various color options
  solid: "contrast",     // "color" | "contrast"
  solidStyle: "flat",    // "flat" | "plastic"
  border: "playful",     // "rounded" | "playful" | "conservative"
  surface: "translucent", // "filled" | "translucent"
  transition: "all",     // "all" | "micro" | "macro"
  scaling: "100",        // 90 | 95 | 100 | 105 | 110
};
```

### 3. Images

Replace placeholder images:
- **Avatar**: `public/images/avatar.jpg`
- **OG Image**: `public/images/og/home.jpg` (for social sharing)
- **Gallery**: `public/images/gallery/*.jpg`
- **Projects**: `public/images/projects/*/`

### 4. Content Creation

#### Blog Posts
1. Create a new `.mdx` file in `src/app/blog/posts/`
2. Use frontmatter for metadata:
```mdx
---
title: "Your Blog Post Title"
date: "2024-01-01"
description: "Post description"
---
```

#### Projects
1. Create a new `.mdx` file in `src/app/work/projects/`
2. Use frontmatter for metadata:
```mdx
---
title: "Project Name"
date: "2024-01-01"
description: "Project description"
cover: "/images/projects/your-project/cover.jpg"
---
```

### 5. Testing

1. Run the development server:
```bash
npm run dev
```

2. Visit `http://localhost:3000` to see your changes

3. Check all pages:
   - Home: `/`
   - About: `/about`
   - Work: `/work`
   - Blog: `/blog`
   - Gallery: `/gallery`

## Tips

- All files with `TODO:` comments need your attention
- Search for `TODO:` in the codebase to find all customization points
- Keep image aspect ratios consistent for better display
- Test on mobile devices for responsive design
- Update meta descriptions for better SEO

## Deployment

Once customized, deploy to:
- **Vercel** (recommended): Connect your GitHub repo
- **Netlify**: Connect your GitHub repo
- **Other platforms**: Build with `npm run build` and deploy the `out` folder

Don't forget to update `baseURL` in the config file with your deployment URL!

## Need Help?

- Check the [Once UI documentation](https://docs.once-ui.com)
- Review the [Magic Portfolio docs](https://docs.once-ui.com/docs/magic-portfolio/quick-start)
- Join the [Discord community](https://discord.com/invite/5EyAQ4eNdS)

