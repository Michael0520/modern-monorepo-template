import { Elysia } from 'elysia';
import { describe, expect, it } from 'vitest';

describe('Server', () => {
  const app = new Elysia()
    .get('/api/health', () => ({
      status: 'ok',
      timestamp: new Date().toISOString(),
    }))
    .get('/api/users', () => ({
      data: [
        {
          createdAt: new Date(),
          email: 'jane@example.com',
          id: '1',
          name: 'Jane Doe',
        },
      ],
      success: true,
    }));

  it('should return health status', async () => {
    const response = await app.handle(new Request('http://localhost/api/health'));
    const data = (await response.json()) as { status: string };
    expect(data.status).toBe('ok');
  });

  it('should return users', async () => {
    const response = await app.handle(new Request('http://localhost/api/users'));
    const data = (await response.json()) as { data: Array<unknown>; success: boolean };
    expect(data.success).toBe(true);
    expect(data.data).toHaveLength(1);
  });
});
