# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with:
- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS 4** for styling
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** for icons
- **React 19** with server components

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Code Architecture

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
  - `ui/` - shadcn/ui components
  - `layout/` - Layout components (header, footer, container)
  - `shared/` - Shared utility components
- `features/` - Feature-specific components organized by domain
  - `hero/` - Hero section
  - `about/` - About section with skills and certifications
  - `projects/` - Projects showcase
  - `contact/` - Contact form and section
- `lib/` - Utility functions and configuration
  - `config/site.ts` - Site configuration and constants
  - `utils.ts` - Utility functions (cn for class merging)
- `public/` - Static assets

### Key Patterns

**Feature Organization**: Features are organized in domain-specific folders under `features/` containing:
- Main section component (e.g., `hero-section.tsx`)
- `components/` subfolder for feature-specific components
- `data.ts` for static data
- `types.ts` for TypeScript definitions

**Component Architecture**: 
- Uses shadcn/ui component library configured in `components.json`
- Components follow "new-york" style with CSS variables
- Consistent use of `cn()` utility for class merging from `lib/utils.ts`

**Configuration**: 
- Site-wide configuration in `lib/config/site.ts` includes navigation, social links, and skills
- TypeScript path aliases configured: `@/*` maps to root directory
- Tailwind configured with CSS variables and custom utilities

### Styling Approach
- Uses Tailwind CSS 4 with PostCSS
- Dark mode configured as default (`className="dark"` in html)
- Container queries enabled with `@` prefix (e.g., `@md:`, `@lg:`)
- Custom gradient utilities for text effects (`gradient-heading`)
- Glass surface effects with backdrop blur

### Data Management
- Static data stored in `data.ts` files within feature folders
- Site configuration centralized in `lib/config/site.ts`
- No external API calls or database - fully static portfolio

## Development Guidelines

- Follow existing TypeScript patterns and component structure
- Use shadcn/ui components when possible before creating custom ones
- Maintain consistent spacing and responsive design patterns
- Images should be optimized WebP format when possible
- Use Next.js Image component for all images with proper alt text
- Follow existing naming conventions for components and files