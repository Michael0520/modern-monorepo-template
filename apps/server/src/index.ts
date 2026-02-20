import { node } from '@elysiajs/node';
import type { ApiResponse, User } from '@repo/shared/types';
import { Elysia } from 'elysia';

const app = new Elysia({ adapter: node() })
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
  .listen(3000);

// eslint-disable-next-line no-console
console.log(`Server running at http://localhost:${app.server?.port}`);

export type App = typeof app;
