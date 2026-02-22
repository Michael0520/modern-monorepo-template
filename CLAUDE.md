# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install              # Install all dependencies
pnpm dev                  # Start web (localhost:3001) + server (localhost:3000) in parallel
pnpm check                # Run tsc + lint + format check in parallel
pnpm test                 # Run all tests once (vitest across 3 workspaces)
pnpm test:watch           # Watch mode
pnpm build                # Build web (Next.js) + server (tsc)
pnpm format               # Auto-format with oxfmt
pnpm lint:fix             # Auto-fix lint issues with oxlint
pnpm clean                # Remove dist/ and caches
```

Single workspace: `pnpm -F web dev`, `pnpm -F server dev`, etc.

## Architecture

pnpm workspace monorepo with 3 packages:

```
apps/web        → Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui
apps/server     → Elysia + @elysiajs/node (Node.js adapter)
packages/shared → Types, utilities (cn()), UI components (Button), CSS theme, auth client
```

Both `web` and `server` depend on `@repo/shared` via `workspace:*`.

### No build step for shared package

`@repo/shared` exports point directly to `.ts`/`.tsx` source files — no compilation. Consumers (Next.js, tsx) handle transpilation via `transpilePackages`. This means changes to shared are instantly available without rebuilding.

```ts
// These resolve to packages/shared/src/... source files
import { Button } from '@repo/shared/components/button';
import { cn } from '@repo/shared/lib/utils';
import type { User } from '@repo/shared/types';
```

### CSS across workspaces

`apps/web/src/index.css` imports `@import '@repo/shared/styles/globals.css'` which contains Tailwind v4, shadcn zinc theme tokens (light/dark), and base styles. Tailwind is processed by `@tailwindcss/postcss` plugin via `postcss.config.mjs`.

### API proxying

Next.js rewrites `/api/*` to the Elysia server via `next.config.ts`. In dev this points to `http://localhost:3000`, in production it uses the `API_URL` environment variable. Both start together via `pnpm dev`.

### Auth (better-auth)

- Server: `apps/server/src/auth.ts` — better-auth with Prisma adapter, email/password + optional Google OAuth
- Client: `packages/shared/src/lib/auth-client.ts` — `createAuthClient()` with no baseURL (uses same-origin, requests go through Next.js rewrite proxy)
- Middleware: `apps/web/src/middleware.ts` — checks for session cookie (both `better-auth.session_token` for HTTP and `__Secure-better-auth.session_token` for HTTPS)
- On HTTPS (production), better-auth auto-prefixes cookies with `__Secure-`

### Database (Prisma)

- Schema: `apps/server/prisma/schema.prisma` — uses `prisma-client-js` generator (outputs to `node_modules`, required for Vercel compatibility)
- Config: `apps/server/prisma.config.ts` — loads `.env` from monorepo root via dotenv
- Adapter: `@prisma/adapter-pg` for PostgreSQL connection
- Push schema: `cd apps/server && npx prisma db push`

### Deployment (Vercel)

Two separate Vercel projects from the same repo:

- **Server** (`apps/server`): Elysia preset, serverless functions. Uses `export default app` (no `.listen()` on Vercel). Env vars: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `WEB_URL`, `BETTER_AUTH_URL`
- **Web** (`apps/web`): Next.js preset. Env vars: `API_URL` (points to server Vercel URL)

The server conditionally uses `@elysiajs/node` adapter (local only, not on Vercel) and only calls `.listen()` outside Vercel.

## Tooling

| Tool       | Config                                             | Notes                                                                                |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **tsgo**   | `tsconfig.json` (root, extended by each workspace) | Type checking only; `--noEmit` in tsc script to prevent server emit                  |
| **oxlint** | `oxlint.config.ts` (extends `@nkzw/oxlint-config`) | Enforces `perfectionist/sort-objects`, `array-type: Array<T>` style                  |
| **oxfmt**  | `.oxfmtrc.json`                                    | 100 width, single quotes, sorts imports, sorts Tailwind classes in `cn()`/`cva()`    |
| **vitest** | `vitest.workspace.ts`                              | web=jsdom, server/shared=node; web tests need `// @vitest-environment jsdom` comment |

## Lint conventions

- Object/interface properties must be **alphabetically sorted** (perfectionist plugin)
- Use `Array<T>` not `T[]`
- `console.log` forbidden (use `// eslint-disable-next-line no-console` when needed)
- Run `pnpm format` after editing — oxfmt handles import sorting and Tailwind class ordering
