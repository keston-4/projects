# projects

Write-ups of personal technical projects. Built with Astro + Tailwind, deployed to GitHub Pages.

Live at [keston-4.github.io/projects](https://keston-4.github.io/projects).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Adding a project

Add a Markdown file to `src/content/projects/`, with frontmatter:

```yaml
---
title: "Project Title"
summary: "One-line summary shown on the homepage card."
tags: ["tag-one", "tag-two"]
date: 2026-01-01
type: "writeup"
---
```

That's enough to show up on the homepage and get its own page automatically.

To give it a branded icon on the homepage list (instead of the plain fallback dot), add a case for its slug in `src/components/ProjectIcon.astro`.
