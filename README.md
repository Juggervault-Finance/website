# Juggervault Website

The official website for Juggervault - Digital Infrastructure for Real-World Assets.

## Overview

Juggervault is a compliance-first platform for tokenizing, exchanging, and enabling liquidity for real-world assets across Africa and beyond. This website provides information about our platforms, compliance approach, industry focus, and more.

## Project Structure

The website is built as a single-page application with isolated pages for demo and contact:

### Main Page (`/`)
A comprehensive single-page application featuring:
- **Hero Section** - Main introduction and call-to-action
- **What We Provide** - Three foundational pillars (Tokenization Infrastructure, Regulated Exchange, Liquidity Enablement)
- **Who It's For** - Target audiences (Institutional Asset Owners, Institutional Investors, Regulatory Bodies)
- **Why It Matters** - Value propositions for each audience
- **Platforms** - Detailed overview of three platforms:
  - Tokenization Platform
  - Exchange Platform
  - Liquidity Infrastructure
- **How It Works** - Step-by-step process for asset digitization
- **Industry Focus** - Focus on Energy & Africa
- **Compliance** - Compliance-first design and regulatory approach
- **Partners** - Partnership information
- **Meet the Founder** - Founder information and expertise
- **CTA Section** - Call-to-action for transformation
- **Footer** - Links and contact information

### Isolated Pages

- **Demo** (`/demo`) - Live asset tokenization demonstration, walkthrough steps, and demo request form
- **Contact** (`/contact`) - Contact form, contact information, and quick links

### Navigation

The navigation bar includes:
- **Logo** - Links to homepage
- **Platforms** - Dropdown menu linking to external platform URLs
- **Demo** - Links to `/demo` page
- **Contact** - Links to `/contact` page
- **Request Demo** - CTA button linking to `/demo` page

## Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: React Icons 5.3.0
- **Fonts**: Clash Grotesk (custom fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Juggervault-Finance/website.git
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

Build the project:
```bash
npm run build
# or
yarn build
```

### Preview Production Build

Preview the production build locally:
```bash
npm start
# or
yarn start
```

## Project Structure

```
website/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout with navigation
│   │   ├── page.tsx             # Main single-page application
│   │   ├── demo/
│   │   │   └── page.tsx         # Demo page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   ├── (components)/        # Shared components
│   │   │   ├── navigation.tsx   # Navigation bar component
│   │   │   ├── platforms-dropdown.tsx
│   │   │   └── fancy-button.tsx
│   │   ├── icon.png             # Favicon for browser tab
│   │   ├── globals.css          # Global styles
│   │   └── fonts/               # Custom fonts (Clash Grotesk)
│   ├── assets/                   # Images and static assets
│   │   ├── index.ts             # Centralized image exports
│   │   ├── Hero-image.jpg
│   │   ├── asset registration visual.jpg
│   │   ├── digital-asset-lifecycle.jpg
│   │   ├── market-access.jpg
│   │   ├── compliance-verification.jpg
│   │   ├── Africa-infrastructure-map.jpg
│   │   ├── founder-image.jpg
│   │   ├── Juggervault brand identity icon png.png
│   │   └── ...
│   └── ...
├── public/                       # Public static files
│   ├── icon.png                 # App icon
│   └── apple-icon.png           # Apple touch icon
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Key Features

- **Single-Page Application** - Main content is on one scrollable page with smooth section navigation
- **Isolated Pages** - Demo and Contact are separate pages for better organization
- **Responsive Design** - Mobile-first responsive design that works on all devices
- **Centralized Assets** - All images exported from a single `assets/index.ts` file
- **SEO Optimized** - Proper meta tags and structured content
- **Performance** - Optimized images using Next.js Image component
- **Accessibility** - Semantic HTML and ARIA labels
- **Compliance-First Messaging** - All content emphasizes compliance-first approach

## Navigation System

The navigation uses smooth scrolling for internal sections and Next.js Link components for separate pages:

- **Internal Sections**: Uses `scrollToSection()` function with smooth scroll behavior
- **External Pages**: Uses Next.js `Link` component for `/demo` and `/contact`
- **Platform Links**: External links to platform subdomains

## Asset Management

All images are centralized in `src/assets/index.ts`:

```typescript
import {
  HeroImage,
  AssetRegistrationVisual,
  DigitalAssetLifecycle,
  MarketAccess,
  ComplianceVerification,
  AfricaInfrastructureMap,
  founderImage,
  Logo,
  // ... more images
} from "../assets";
```

This allows for:
- Single import statement for all images
- Easy maintenance and updates
- Type safety for image imports

## Browser Tab Icon

The favicon is set up using Next.js 13+ App Router convention:
- `src/app/icon.png` - Automatically used as favicon by Next.js
- Also available in `public/` for manual reference

## Responsive Breakpoints

The site uses Tailwind CSS breakpoints:
- `sm:` - 640px (small devices)
- `md:` - 768px (tablets)
- `lg:` - 1024px (desktops)
- `xl:` - 1280px (large desktops)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Content Guidelines

The website follows a compliance-first approach:
- Emphasis on regulatory compliance and institutional-grade solutions
- Focus on Energy sector and African market
- Clear value propositions for different user types
- Professional, institutional tone throughout

## Deployment

The site is built with Next.js and can be deployed to:
- Vercel (recommended - built by Next.js creators)
- Netlify
- Any Node.js hosting platform

## License

Copyright © 2024 Juggervault. All rights reserved.
