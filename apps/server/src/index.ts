import { cors } from '@elysiajs/cors';
import { node } from '@elysiajs/node';
import type { ApiResponse, User } from '@repo/shared/types';
import { Elysia } from 'elysia';

import { auth } from './auth.js';

const app = new Elysia({ adapter: node() })
  .use(
    cors({
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      origin: process.env.WEB_URL || 'http://localhost:3001',
    }),
  )
  .mount(auth.handler)
  .macro({
    auth: {
      async resolve({ request: { headers }, status }) {
        const session = await auth.api.getSession({ headers });

        if (!session) {
          return status(401);
        }

        return {
          session: session.session,
          user: session.user,
        };
      },
    },
  })
  .get('/api/health', () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }))
  .get(
    '/api/users',
    (): ApiResponse<Array<User>> => ({
      data: [
        {
          createdAt: new Date(),
          email: 'jane@example.com',
          id: '1',
          name: 'Jane Doe',
        },
      ],
      success: true,
    }),
  )
  .listen(Number(process.env.SERVER_PORT) || 3000);

// eslint-disable-next-line no-console
console.log(`Server running at http://localhost:${app.server?.port}`);

export type App = typeof app;
