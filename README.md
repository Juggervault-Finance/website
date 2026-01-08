# Juggervault Website

The official website for Juggervault - Digital Infrastructure for Real-World Assets.

## Overview

Juggervault is a compliance-first platform for tokenizing, exchanging, and enabling liquidity for real-world assets across Africa and beyond. This website provides information about our platforms, compliance approach, industry focus, and more.

## Structure

The website is built with Next.js 14 using the App Router architecture and includes the following pages:

### Main Pages

- **Homepage** (`/`) - Main landing page with hero section, three pillars, who it's for, and why it matters
- **Platforms** (`/platforms`) - Overview of our three platforms: Tokenization, Exchange, and Liquidity Infrastructure
- **How It Works** (`/how-it-works`) - Step-by-step process for asset digitization
- **Compliance** (`/compliance`) - Compliance-first design and regulatory approach
- **Industry** (`/industry`) - Focus on Energy & Africa
- **Demo** (`/demo`) - Live asset tokenization demonstration and demo request form
- **About** (`/about`) - Information about Juggervault and our team
- **Contact** (`/contact`) - Contact form and information

### Navigation

- **Platforms Dropdown** - Links to:
  - Tokenization Platform (tokenization.juggervault.finance)
  - Exchange Platform (exchange.juggervault.finance)
  - Liquidity Infrastructure (stablecoin.juggervault.finance)

## Tech Stack

- **Framework**: Next.js 14.2.13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Clash Grotesk (custom) + Instrument Sans

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

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
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with navigation and footer
│   ├── page.tsx             # Homepage
│   ├── platforms/           # Platforms overview page
│   ├── how-it-works/        # How it works page
│   ├── compliance/          # Compliance page
│   ├── industry/            # Industry focus page
│   ├── demo/                # Demo page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── (components)/        # Shared components
│   │   ├── fancy-button.tsx
│   │   └── platforms-dropdown.tsx
│   ├── globals.css          # Global styles
│   └── fonts/               # Custom fonts
├── assets/                   # Images and static assets
└── ...
```

## Features

- **Responsive Design**: Mobile-first responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Performance**: Optimized images and code splitting for fast load times
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **Compliance-First Messaging**: All content emphasizes our compliance-first approach

## Content Guidelines

The website follows the structure defined in `websitestructure.txt`:

- Compliance-first messaging
- Focus on institutional-grade solutions
- Emphasis on Energy & Africa
- Clear value propositions for different user types
- Professional, institutional tone

## SEO

Each page includes appropriate:

- Meta titles and descriptions
- H1, H2, H3 headings
- Structured content
- Semantic HTML

## License

Copyright © 2024 Juggervault. All rights reserved.
