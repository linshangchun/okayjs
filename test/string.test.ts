import { describe, it, expect } from 'vitest';
import { stringToUpper } from '@/utils';

describe('string', () => {
  it("stringToUpper('abc') = 'ABC'", () => {
    expect(stringToUpper('abc')).toBe('ABC');
  });
});
