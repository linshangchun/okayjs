import { describe, it, expect } from 'vitest';
import { toUpper } from '@/utils';

describe('string', () => {
  it("toUpper('abc') = 'ABC'", () => {
    expect(toUpper('abc')).toBe('ABC');
  });
});