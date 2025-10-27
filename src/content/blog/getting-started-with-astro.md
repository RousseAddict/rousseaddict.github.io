---
title: "Getting Started with Astro"
description: "A beginner's guide to building websites with Astro framework"
pubDate: 2024-01-20
slug: "getting-started-with-astro"
tags: ["astro", "tutorial", "web-development"]
---

# Getting Started with Astro

Astro is a modern web framework that's designed for building fast, content-focused websites. In this guide, we'll explore how to get started with Astro.

## Installation

First, you'll need to create a new Astro project:

```bash
npm create astro@latest
```

Follow the prompts to set up your project. Astro will ask you a few questions about your preferences.

## Project Structure

An Astro project typically has this structure:

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── astro.config.mjs
```

## Creating Your First Page

Pages in Astro live in the `src/pages/` directory. Create a new file:

```astro
---
// src/pages/index.astro
const title = "My First Astro Page";
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>Welcome to Astro!</h1>
  </body>
</html>
```

## Key Features

### Zero JavaScript by Default

Astro automatically strips out JavaScript from your pages, shipping only HTML and CSS by default. This makes your sites incredibly fast.

### Component Islands

Astro's "Island Architecture" allows you to hydrate interactive components only when needed, keeping your pages lightweight.

### Markdown Support

Astro has built-in support for Markdown, making it perfect for blogs and content-heavy sites.

## Next Steps

Now that you have a basic understanding of Astro, you can:

1. Explore the official documentation
2. Try building components
3. Add styling with your preferred CSS approach
4. Deploy your site to a hosting platform

Happy coding!