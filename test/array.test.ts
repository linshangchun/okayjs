import { describe, it, expect } from 'vitest';
import { arrayHas } from '@/utils';

describe('string', () => {
  it("arrayHas(['a', 'b'], 'string') = true", () => {
    expect(arrayHas(['a', 'b'], 'string')).toBe(true);
  });
  it("arrayHas(['abc', 'xyz'], arr => arr.join('').includes('x')) = true", () => {
    expect(arrayHas<string>(['abc', 'xyz'], arr => arr.join('').includes('x'))).toBe(true);
  });
  it('arrayHas([1, 2, 3], 2) = true', () => {
    expect(arrayHas([1, 2, 3], 2)).toBe(true);
  });
});
