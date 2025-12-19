# Sash Mohapatra Portfolio

## Overview

A personal portfolio website for Sash Mohapatra, a future-tech media and learning ecosystem builder. The site showcases projects, writing, a 2025 year-in-review ("Wrapped"), and includes a contact form. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Typography**: Custom font stack - Playfair Display (serif), Space Grotesk (sans), JetBrains Mono (monospace)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas with drizzle-zod integration for type-safe database operations

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Custom build script using esbuild for server bundling, Vite for client
- **Output**: Server compiled to `dist/index.cjs`, client assets to `dist/public`

### Data Flow
- Content is stored in `client/src/data/content.json` for static site content (profile, projects, writing, wrapped items)
- Contact form submissions are persisted to PostgreSQL via the `/api/contact` endpoint
- React Query handles API requests with built-in caching

### Database Schema
Two tables defined in `shared/schema.ts`:
- `users`: Basic user table with id, username, password (appears unused currently)
- `contact_submissions`: Stores contact form entries with name, email, message, and timestamp

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages (Home, About, Work, Writing, Wrapped, Contact)
│   │   ├── data/         # Static content JSON
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Drizzle migration files
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle Kit**: Used for schema migrations (`npm run db:push`)

### Third-Party Services
- **Google Fonts**: Playfair Display, Space Grotesk, JetBrains Mono loaded via CDN

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `wouter`: Client-side routing
- `drizzle-orm` + `pg`: Database operations
- `zod`: Runtime validation
- Full shadcn/ui component set with Radix UI primitives