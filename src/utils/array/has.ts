/**
 * 数组内容判断函数
 */

import { arrayIs } from '@/utils/array/is';

/**
 * 判断数组是否包含目标值或满足指定条件（整体判断）
 * @group arrayHas
 * @param value - 任意值
 * @param condition - 条件值：可以是目标值、元素类型字符串、键值条件对象，或用于处理整个数组的自定义函数
 * @returns 是否满足包含逻辑
 * @example
 * arrayHas(['a', 'b'], 'string'); // true（有 string 类型项）
 * arrayHas([1, 2, 3], 2); // true（包含 2）
 * arrayHas(['abc', 'xyz'], arr => arr.join('').includes('x')); // true（整体判断）
 * arrayHas([], undefined); // false（数组为空）
 */
export function arrayHas<T = unknown>(
  value: unknown,
  condition?: T | string | ((arr: T[]) => boolean)
): boolean {
  if (!arrayIs(value)) return false;
  if (condition === undefined) return value.length > 0;
  // 处理函数：整体处理数组
  if (typeof condition === 'function' && condition.length === 1) {
    return (condition as (arr: T[]) => boolean)(value as T[]);
  }
  // 类型匹配：例如 'string' 表示所有项中包含该类型
  if (typeof condition === 'string') {
    return (value as unknown[]).some(item => typeof item === condition);
  }
  // 等值包含判断
  return (value as T[]).includes(condition as T);
}

/**
 * 判断数组是否具有指定长度
 * @group arrayHas
 * @param value - 任意数组
 * @param length - 指定长度,未指定时判断数组长度大于等1
 * @returns 是否为该长度
 * @example
 * arrayHasLength(['a', 'b']); // true
 * arrayHasLength([1, 2, 3], 2); // false
 * arrayHasLength([1, 2, 3], 3); // true
 */
export function arrayHasLength(value: unknown, length?: number): boolean {
  if (!arrayIs(value)) return false;
  if (length === undefined) {
    return value.length >= 1;
  }
  return value.length === length;
}
