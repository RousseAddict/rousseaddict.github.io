# RousseAddict Blog

A minimalist blog built with Astro framework featuring clean design, markdown content, and tag-based organization.

## Features

- 🚀 **Lightning Fast**: Built with Astro for optimal performance
- 📝 **Markdown Support**: Write posts in simple markdown format
- 🏷️ **Tags System**: Organize posts with tags/categories
- ⏱️ **Reading Time**: Automatic reading time calculation
- 📱 **Responsive**: Works beautifully on all devices
- 🎨 **Minimalist Design**: Clean, focused, and easy to read

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── PostCard.astro
│   ├── content/
│   │   └── blog/          # Your blog posts go here (.md files)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro    # Home page (blog list)
│   │   ├── about.astro    # About page
│   │   ├── posts/
│   │   │   └── [slug].astro  # Dynamic post pages
│   │   └── tags/
│   │       └── [tag].astro   # Tag filter pages
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Writing Blog Posts

Create a new markdown file in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-01-15
slug: "your-post-slug"
tags: ["tag1", "tag2"]
---

# Your Content Here

Write your blog post content using markdown...
```

### Frontmatter Fields

- **title**: Post title (required)
- **description**: Brief description for cards and SEO (required)
- **pubDate**: Publication date in YYYY-MM-DD format (required)
- **slug**: URL-friendly identifier (required)
- **tags**: Array of tags for categorization (optional)

## Customization

### Site Configuration

Edit [`astro.config.mjs`](astro.config.mjs) to update:
- Site URL
- Markdown rendering options

### Styling

All styles are in [`src/styles/global.css`](src/styles/global.css). Customize:
- Colors (CSS custom properties in `:root`)
- Typography
- Layout spacing
- Component styles

### Branding

- Update site name in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)
- Replace favicon in [`public/favicon.svg`](public/favicon.svg)
- Customize About page in [`src/pages/about.astro`](src/pages/about.astro)

## Deployment

### GitHub Pages (Automated)

This project includes automated deployment to GitHub Pages via GitHub Actions.

**Setup Instructions:**

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Build and deployment" → Source, select "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment:**
   - The workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) will automatically build and deploy your site
   - Your site will be available at: `https://rousseaddict.github.io`

**Manual deployment:**
- Go to Actions tab in your GitHub repository
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" button

### Other Hosting Options

- **Netlify**: Drop the `dist/` folder or connect your repo
- **Vercel**: Import your GitHub repository
- **Cloudflare Pages**: Connect and deploy

## License

ISC

## Author

RousseAddict