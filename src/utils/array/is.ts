/**
 * 字符串类型判断函数集
 */

import { TypeOfString } from '@/types';

/**
 * 判断数据是否是数组类型，或是否满足自定义数组判断函数
 * @group arrayIs
 * @param value - 任意值
 * @param predicate - 可选的判断函数，接收整个数组进行处理
 * @returns 是否为数组，若提供判断函数则继续判断是否满足自定义条件
 * @example
 * arrayIs([]); // true
 * arrayIs('123'); // false
 * arrayIs([1, 2, 3], arr => arr.length === 3); // true
 */
export function arrayIs<T = unknown>(
  value: unknown,
  predicate?: (arr: T[]) => boolean
): value is T[] {
  return Array.isArray(value) && (typeof predicate === 'function' ? predicate(value) : true);
}

/**
 * 判断数组是否为空
 * @group arrayIs
 * @param value - 任意值
 * @returns 是否为空数组
 * @example
 * arrayIsEmpty([]) // true
 * arrayIsEmpty([1, 2, 3]) // false
 * arrayIsEmpty("123") // false
 */
export function arrayIsEmpty(value: unknown): boolean {
  return arrayIs(value) && value.length === 0;
}

/**
 * 判断数组是否所有项满足指定的类型或判断条件
 * @group arrayIs
 * @param value - 待检测的值
 * @param predicate - 类型字符串或断言函数
 * @returns 是否所有元素满足条件
 * @example
 * arrayIsEvery(['a', 'b'], 'string'); // true
 * arrayIsEvery([1, 2, 3], (x): x is number => typeof x === 'number'); // true
 * arrayIsEvery([{ id: 1 }], item => typeof item === 'object'); // true
 */
export function arrayIsEvery<T = unknown>(
  value: unknown,
  predicate: ((item: unknown) => item is T) | ((item: unknown) => boolean) | TypeOfString
): value is T[] {
  if (!arrayIs(value)) return false;

  if (typeof predicate === 'string') {
    return value.every(item => typeof item === predicate);
  }

  if (typeof predicate === 'function' && predicate.length <= 1) {
    return value.every(predicate);
  }

  return false;
}
