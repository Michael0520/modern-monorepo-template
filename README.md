# Modern Monorepo Template

> Based on Christoph Nakazawa's "Fastest Frontend Tooling for Humans & AI" (2026)

A production-ready monorepo template using the fastest modern tooling for frontend and full-stack TypeScript development.

## Tech Stack

| Category        | Tool                                                             |
| --------------- | ---------------------------------------------------------------- |
| Package Manager | pnpm workspaces                                                  |
| Runtime         | Node.js >= 22                                                    |
| Frontend        | Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui |
| Backend         | Elysia + @elysiajs/node                                          |
| Type Checking   | tsgo (TypeScript Go)                                             |
| Linting         | Oxlint + @nkzw/oxlint-config                                     |
| Formatting      | Oxfmt                                                            |
| Testing         | Vitest                                                           |
| Auth            | better-auth (email/password + Google OAuth)                      |
| Database        | Prisma 7 + PostgreSQL                                            |
| CI              | GitHub Actions                                                   |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) (corepack enabled)
- PostgreSQL database (e.g. [Supabase](https://supabase.com/), [Neon](https://neon.tech/), or local)

### Environment Setup

```bash
cp .env.example .env
```

Fill in the required values:

| Variable               | Required | Description                  |
| ---------------------- | -------- | ---------------------------- |
| `DATABASE_URL`         | Yes      | PostgreSQL connection string |
| `BETTER_AUTH_SECRET`   | Yes      | `openssl rand -base64 32`    |
| `GOOGLE_CLIENT_ID`     | No       | Google OAuth client ID       |
| `GOOGLE_CLIENT_SECRET` | No       | Google OAuth client secret   |

### Quick Start

```bash
pnpm install
cd apps/server && npx prisma db push && cd ../..
pnpm dev
```

This starts web (`localhost:3001`) and server (`localhost:3000`) in development mode with hot reloading. Visit `localhost:3001` to see the login page.

## Scripts

All scripts can be run from the repository root and will execute across all workspaces where applicable.

| Script             | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `pnpm dev`         | Start all apps in development mode                                   |
| `pnpm build`       | Build all apps and packages                                          |
| `pnpm check`       | Run type checking (tsgo), linting (oxlint), and format check (oxfmt) |
| `pnpm tsc`         | Type check all packages with tsgo                                    |
| `pnpm lint`        | Lint all packages with Oxlint                                        |
| `pnpm lint:fix`    | Lint and auto-fix issues                                             |
| `pnpm lint:format` | Check formatting with Oxfmt                                          |
| `pnpm format`      | Format all files with Oxfmt                                          |
| `pnpm test`        | Run all tests with Vitest                                            |
| `pnpm test:watch`  | Run tests in watch mode                                              |
| `pnpm clean`       | Remove all build artifacts and node_modules                          |

## Project Structure

```
modern-monorepo-template/
├── apps/
│   ├── web/                 # Next.js 15 (App Router) + React 19
│   └── server/              # API server (Elysia + Node.js) + Auth (better-auth) + Prisma
├── packages/
│   └── shared/              # Shared UI components (shadcn/ui + Tailwind CSS v4)
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI pipeline
├── .vscode/                 # VS Code settings and recommended extensions
├── CLAUDE.md                # Claude Code guidance
├── package.json             # Root workspace configuration
├── pnpm-workspace.yaml      # pnpm workspace definition
├── tsconfig.json             # Root TypeScript configuration
└── oxlint.config.ts         # Oxlint configuration
```

## Adding shadcn Components

This template uses [shadcn/ui](https://ui.shadcn.com/) for UI components, configured in the shared package. To add a new component:

```bash
cd packages/shared
pnpm dlx shadcn@latest add button
```

Replace `button` with any component name from the shadcn/ui library. Components are installed into `packages/shared/src/components/` and can be imported by any app in the monorepo.

## VS Code Setup

This repository includes recommended VS Code settings and extensions for the best development experience. When you open the project, VS Code will prompt you to install the recommended extensions:

- **OXC** (`oxc.oxc-vscode`) -- Linting and formatting
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) -- Tailwind class autocomplete
- **Prettier** (`esbenp.prettier-vscode`) -- Formatting for non-JS/TS files (CSS, HTML, Markdown, YAML, JSON)

## License

[MIT](./LICENSE)
