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
packages/shared → Types, utilities (cn()), UI components (Button), CSS theme
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

### API proxying in dev

Next.js rewrites `/api/*` to `http://localhost:3000` (Elysia server) via `next.config.ts`. Both start together via `pnpm dev`.

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
