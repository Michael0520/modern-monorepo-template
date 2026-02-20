import { describe, expect, it } from 'vitest';

import { cn, formatDate } from '../lib/utils';

describe('cn', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const condition = false as boolean;
    expect(cn('foo', condition && 'bar', 'baz')).toBe('foo baz');
  });

  it('should merge tailwind classes', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });
});

describe('formatDate', () => {
  it('should format date', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toContain('2024');
    expect(formatted).toContain('January');
  });
});
