# Prose UI Implementation Guide

This document explains the Prose UI setup in this project and how to use it.

## What Was Installed

### Core Packages
```bash
bun add @prose-ui/core @prose-ui/next @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

### MDX Processing Plugins
```bash
bun add remark-gfm remark-math rehype-katex rehype-slug rehype-autolink-headings rehype-pretty-code shiki
```

**Note:** Due to Turbopack serialization requirements, we're using explicit plugin imports instead of Prose UI's `remarkPlugins()` helper.

## Files Modified/Created

### 1. **mdx-components.tsx** (Root)
Configures MDX component overrides for Prose UI integration.

### 2. **next.config.ts**
Added MDX support with explicit remark and rehype plugins:
- `remark-gfm` - GitHub Flavored Markdown (tables, strikethrough, etc.)
- `remark-math` - Math formula support
- `rehype-katex` - Renders math formulas with KaTeX
- `rehype-slug` - Adds IDs to headings
- `rehype-autolink-headings` - Makes headings linkable
- `rehype-pretty-code` - Syntax highlighting with Shiki

### 3. **app/globals.css**
Imported Prose UI styles:
- `@prose-ui/next/prose-ui.css` - Main Prose UI styles
- `@prose-ui/next/katex.min.css` - Math formula support

### 4. **app/layout.tsx**
Added `prose-ui` class to body element for global styling.

### 5. **content/posts/** Directory
Created for storing MDX blog posts.

### 6. **lib/posts.ts**
Utility functions for managing blog post metadata.

### 7. **app/blog/page.tsx**
Blog listing page showing all posts.

### 8. **app/blog/[slug]/page.tsx**
Dynamic route for rendering individual blog posts.

## Features Showcased in Sample Blog

The comprehensive sample blog post demonstrates:

### ✅ Typography
- Headings (H1-H6)
- Bold, italic, strikethrough
- Inline code
- Links

### ✅ Code Blocks
- Syntax highlighting with Shiki
- Multiple language support (TypeScript, Python, SQL, etc.)
- Beautiful, accurate colors

### ✅ Lists
- Ordered lists
- Unordered lists
- Nested lists
- Task lists

### ✅ Callouts
Five variants available:
```mdx
<Callout variant="info" title="Title">Content</Callout>
<Callout variant="note" title="Title">Content</Callout>
<Callout variant="tip" title="Title">Content</Callout>
<Callout variant="warning" title="Title">Content</Callout>
<Callout variant="danger" title="Title">Content</Callout>
```

### ✅ Tables
- GFM (GitHub Flavored Markdown) tables
- Column alignment support
- Styled headers and cells

### ✅ Mathematical Formulas
- Inline math: `$E = mc^2$`
- Block math: 
```mdx
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### ✅ Blockquotes
Standard markdown blockquotes with beautiful styling.

### ✅ Horizontal Rules
Using `---` for section breaks.

## How to Add a New Blog Post

### Step 1: Create MDX File
Create a new file in `content/posts/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2024-11-09"
description: "Brief description"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content here...
```

### Step 2: Add Post Metadata
Update `lib/posts.ts` to include your new post:

```typescript
export const posts: Post[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    description: "Brief description",
    date: "2024-11-09",
    tags: ["tag1", "tag2"],
    author: "Your Name",
  },
  // ... other posts
];
```

### Step 3: Done!
The post will automatically appear in:
- `/blog` - Blog listing page
- `/blog/your-post-slug` - Individual post page

## Component Reference

### Callout Component
```mdx
<Callout variant="info" title="Optional Title">
  Your important message here
</Callout>
```

**Variants:** `info`, `note`, `tip`, `warning`, `danger`

### Math Formulas
**Inline:** `$x = y$`

**Block:**
```mdx
$$
\sum_{i=1}^{n} x_i
$$
```

### Code Blocks
````mdx
```typescript
const hello: string = "world";
```
````

Supports all major programming languages with syntax highlighting.

## Customization

Prose UI uses CSS variables for customization. Override these in your `globals.css`:

```css
:root {
  --p-font-size: 1rem;
  --p-line-height: 1.75;
  /* ... and many more */
}
```

See [Prose UI Documentation](https://prose-ui.com/docs/styling) for all available variables.

## Testing the Setup

1. Start the development server:
   ```bash
   bun dev
   ```

2. Navigate to:
   - `/blog` - See blog listing
   - `/blog/sample-blog-comprehensive` - See the comprehensive sample post

3. Test features:
   - Check typography rendering
   - Verify code syntax highlighting
   - Test callout components
   - Check math formulas
   - Verify tables display correctly
   - Test dark/light mode toggle

## Reverting to Contentlayer

If you want to switch back to Contentlayer:

1. Keep all changes uncommitted (as you're doing)
2. Run `git stash` to save Prose UI implementation
3. Checkout the previous commit
4. Start Contentlayer implementation

You can always return to Prose UI with `git stash pop`.

## Troubleshooting

### "loader does not have serializable options" Error

**Problem:** When using Turbopack (Next.js 15+), you might see:
```
Error: loader does not have serializable options
```

**Solution:** This is already fixed in our config. We use explicit plugin imports instead of Prose UI's `remarkPlugins()` helper function, which ensures all options are serializable.

### Code Blocks Not Highlighting

**Problem:** Code blocks display but without syntax highlighting.

**Solution:** 
1. Ensure `shiki` is installed: `bun add shiki`
2. Check that `rehype-pretty-code` is in your `next.config.ts`
3. Restart the dev server

### Math Formulas Not Rendering

**Problem:** Math formulas appear as raw LaTeX code.

**Solution:**
1. Ensure KaTeX CSS is imported in `globals.css`
2. Check that both `remark-math` and `rehype-katex` are configured
3. Use correct syntax: `$inline$` or `$$block$$`

### Callouts Not Working

**Problem:** `<Callout>` components show as raw text.

**Solution:**
Callouts come from Prose UI. Ensure:
1. `mdx-components.tsx` imports from `@prose-ui/next`
2. Prose UI CSS is imported in `globals.css`
3. Body has `prose-ui` class in `layout.tsx`

## Resources

- [Prose UI Documentation](https://prose-ui.com/docs)
- [Prose UI GitHub](https://github.com/valdemaras-pipiras/prose-ui)
- [MDX Documentation](https://mdxjs.com/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [rehype-pretty-code](https://rehype-pretty-code.netlify.app/)
- [Shiki Themes](https://shiki.style/themes)

## Notes

- All blog posts must be in `content/posts/` directory
- File names should match the slug in `lib/posts.ts`
- Prose UI automatically handles responsive design
- Dark mode is fully supported out of the box

