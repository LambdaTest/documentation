# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TestMu AI Documentation site built with Docusaurus 3.9.2 and React 18. Contains 1,100+ markdown documentation files for a cloud-based test execution platform.

## Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Development server with hot reload (http://localhost:3000)
npm start

# Production build (validates broken links/images)
npm run build

# Serve built site locally
npm run serve

# Clear Docusaurus cache
npm run clear
```

## Architecture

### Documentation Content
- **`/docs/`** - All documentation markdown files (1,100+ files)
- **`/sidebars.js`** - Navigation sidebar configuration (defines doc hierarchy)
- **`/assets/images/`** - Feature-organized image folders

### Custom Components (`/src/component/`)
- **`BrandName.js`** - Exports `<BrandName />` component and `BRAND_URL` constant for consistent branding
- **`SupportedLanguages/`** - Language/framework support tables (Selenium, SmartUI, HyperExecute)
- **`VideoEmbed.js`**, **`DocCard.js`** - Reusable content components

### Theming (`/src/theme/`)
- Custom Admonition and PaginatorNavLink overrides

### Configuration
- **`docusaurus.config.js`** - Main config: Typesense search, image zoom plugin, Prism syntax highlighting
- **`.env`** - Required: `HOST` and `API` for Typesense search (not in repo)

## Documentation File Format

Every doc file requires this frontmatter:
```yaml
---
id: unique-document-id
title: Full Document Title
sidebar_label: Short Nav Label
description: SEO description
keywords:
  - keyword1
  - keyword2
url: https://www.testmu.ai/support/docs/slug/
site_name: LambdaTest
slug: slug/
canonical: https://www.testmu.ai/support/docs/slug/
---
```

Common imports used in docs:
```jsx
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
```

## CI/CD

PR checks (`.github/workflows/pr.yml`):
- Build verification with `NODE_OPTIONS: "--max-old-space-size=8192"`
- Codespell spellcheck on `/docs` (skips svg, js, map, css, scss, webp)
- Node.js 16.14.0

## Key Constraints

- `onBrokenLinks: 'throw'` - Build fails on broken links
- `trailingSlash: true` - All URLs must have trailing slashes
- Images with class `no-zoom` skip the zoom plugin
- Prism languages: powershell, java, csharp, php, ruby, robotframework

## Documentation Writing Guidelines

### Target Audience
- QA Engineers running automated and manual tests
- QA Managers overseeing testing operations
- Software Architects evaluating or integrating testing solutions

Assume readers understand basic software testing concepts and have familiarity with their preferred programming language or framework, but may be new to LambdaTest/TestMu AI.

### Document Structure
1. **Title** — Clear and specific (e.g., "Running Selenium Tests on LambdaTest")
2. **Overview** — 2-3 sentences explaining what the feature does and why it's useful
3. **Before you begin** — Prerequisites: account requirements, credentials, software to install, supported browsers/devices/frameworks
4. **Steps** — Numbered steps, each starting with an action verb, focusing on one task, with code examples where helpful
5. **Tips and recommendations** — Practical advice for better results
6. **Common issues** — Frequent problems with clear solutions
7. **Related resources** — Links to relevant guides, API references, or support channels

### Writing Rules
- Use short sentences and paragraphs
- Write in active voice ("Click the button" not "The button should be clicked")
- Address the reader as "you"
- Use headings to break up content
- Use numbered lists for sequential steps, bullet points for non-sequential info
- Bold key terms or UI elements
- Include code snippets with comments
- Add screenshots for UI-based steps

### Technical Requirements
- Use `<BrandName />` component instead of hardcoding "TestMu AI" or "LambdaTest"
- Use `{BRAND_URL}` for links to main site
- Include schema.org JSON-LD breadcrumbs for SEO
- Add breadcrumb navigation at bottom of pages
- Use Docusaurus admonitions (:::tip, :::note, :::warning)
- Ensure all code examples run without errors
- Verify screenshots match current UI
- Check all links point to valid pages
