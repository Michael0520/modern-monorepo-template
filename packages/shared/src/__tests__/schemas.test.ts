import { describe, expect, it } from 'vitest';

import { apiResponseSchema, HealthResponseSchema, UserSchema } from '../types';

describe('UserSchema', () => {
  it('should parse a valid user with string date', () => {
    const raw = {
      createdAt: '2024-01-15T00:00:00.000Z',
      email: 'jane@example.com',
      id: '1',
      name: 'Jane Doe',
    };
    const user = UserSchema.parse(raw);
    expect(user.createdAt).toBeInstanceOf(Date);
    expect(user.email).toBe('jane@example.com');
  });

  it('should reject invalid email', () => {
    const raw = {
      createdAt: '2024-01-15T00:00:00.000Z',
      email: 'not-an-email',
      id: '1',
      name: 'Jane',
    };
    expect(() => UserSchema.parse(raw)).toThrow();
  });
});

describe('apiResponseSchema', () => {
  it('should parse a valid API response', () => {
    const raw = {
      data: [
        {
          createdAt: '2024-01-15T00:00:00.000Z',
          email: 'jane@example.com',
          id: '1',
          name: 'Jane Doe',
        },
      ],
      success: true,
    };
    const result = apiResponseSchema(UserSchema.array()).parse(raw);
    expect(result.success).toBe(true);
    expect(result.data).toHaveLength(1);
    expect(result.data[0]!.createdAt).toBeInstanceOf(Date);
  });
});

describe('HealthResponseSchema', () => {
  it('should parse a valid health response', () => {
    const raw = { status: 'ok', timestamp: '2024-01-15T00:00:00.000Z' };
    const result = HealthResponseSchema.parse(raw);
    expect(result.status).toBe('ok');
  });
});
