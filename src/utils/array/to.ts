/**
 * 数组转换函数集合
 */

import { arrayIs } from '@/utils/array/is';

/**
 * 将数组通过指定函数转换为目标值
 * @group arrayTo
 * @param value - 输入值
 * @param fn - 用于处理数组的转换函数
 * @returns 转换后的结果，如果输入不是数组则返回 undefined
 * @example
 * arrayTo([1, 2, 3], arr => arr.join('-')); // '1-2-3'
 * arrayTo(['a', 'b'], arr => arr.length); // 2
 * arrayTo([1, 2, 3], arr => arr.reduce((sum, n) => sum + n, 0)); // 6
 * arrayTo(['a', 'b'], arr => arr.join('&')); // 'a&b'
 * arrayTo('not array', arr => arr.length); // undefined
 */
export function arrayTo<T = unknown, R = unknown>(
  value: unknown,
  fn: (arr: T[]) => R
): R | undefined {
  if (!arrayIs(value)) return undefined;
  return fn(value as T[]);
}

/**
 * 将数组转换为字符串，使用指定分隔符
 * @group arrayTo
 * @param value - 任意值
 * @param separator - 分隔符，默认为 ','
 * @returns 字符串结果，异常时返回空字符串
 * @example
 * arrayToString([1, 2, 3]); // '1,2,3'
 * arrayToString([1, 2, 3], '-'); // '1-2-3'
 */
export function arrayToString(value: unknown, separator = ','): string {
  return arrayIs(value) ? value.join(separator) : '';
}

/**
 * 将数组转换为 Set（去重）
 * @group arrayTo
 * @param value - 任意值
 * @returns Set 对象，异常时返回空 Set
 * @example
 * arrayToSet([1, 2, 2]); // Set { 1, 2 }
 */
export function arrayToSet<T = unknown>(value: unknown): Set<T> {
  return arrayIs(value) ? new Set(value as T[]) : new Set();
}

/**
 * 将数组转换为 Map，使用项中的某个键作为 key
 * @group arrayTo
 * @param value - 任意值
 * @param keyField - 指定作为 key 的字段名
 * @returns Map 对象，异常时返回空 Map
 * @example
 * arrayToMap([{ id: 'a', x: 1 }], 'id'); // Map { 'a' => { id: 'a', x: 1 } }
 *
 * const users = [
 *  { id: 'u1', name: 'Alice' },
 *  { id: 'u2', name: 'Bob' }
 * ];
 * const map = arrayToMap(users, 'id');
 * console.log(map.get('u1')?.name); // Alice
 */
export function arrayToMap<T = Record<string, unknown>>(
  value: unknown,
  keyField: keyof T & string
): Map<string, T> {
  const map = new Map<string, T>();
  if (arrayIs(value)) {
    for (const item of value) {
      if (typeof item === 'object' && item !== null && keyField in item) {
        const obj = item as T;
        map.set(String(obj[keyField]), obj);
      }
    }
  }
  return map;
}

/**
 * 将数组转换为对象，索引为 key
 * @group arrayTo
 * @param value - 任意值
 * @returns 索引键的对象
 * @example
 * arrayToObject(['a', 'b']); // { '0': 'a', '1': 'b' }
 */
export function arrayToObject<T = unknown>(value: unknown): Record<string, T> {
  if (!arrayIs(value)) return {};
  return Object.fromEntries(value.map((item, index) => [index, item])) as Record<string, T>;
}

/**
 * 将数组转换为 JSON 字符串
 * @group arrayTo
 * @param value - 任意值
 * @returns JSON 字符串，失败时返回空字符串
 * @example
 * arrayToJson(['x', 123]); // '["x",123]'
 */
export function arrayToJson(value: unknown): string {
  try {
    return arrayIs(value) ? JSON.stringify(value) : '';
  } catch {
    return '';
  }
}
