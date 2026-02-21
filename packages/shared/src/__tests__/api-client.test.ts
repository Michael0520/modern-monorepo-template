import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';

import { apiFetch } from '../lib/api-client';

const TestSchema = z.object({ name: z.string() });

describe('apiFetch', () => {
  it('should fetch and parse valid response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ name: 'test' }),
        ok: true,
      }),
    );

    const result = await apiFetch('/api/test', TestSchema);
    expect(result).toEqual({ name: 'test' });

    vi.unstubAllGlobals();
  });

  it('should throw on HTTP error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
      }),
    );

    await expect(apiFetch('/api/test', TestSchema)).rejects.toThrow('API error: 404');

    vi.unstubAllGlobals();
  });

  it('should throw on invalid response shape', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ wrong: 'shape' }),
        ok: true,
      }),
    );

    await expect(apiFetch('/api/test', TestSchema)).rejects.toThrow();

    vi.unstubAllGlobals();
  });
});
