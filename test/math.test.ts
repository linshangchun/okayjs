import { describe, it, expect } from 'vitest';
import { add, subtract } from '@/utils';

describe('math', () => {
  it('add(1, 2) = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('subtract(5, 3) = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});