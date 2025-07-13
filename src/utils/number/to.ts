/**
 * 数字转换相关函数集合
 */

import { numberIs } from '@/utils/number/is';

/**
 * 将数字转换为指定函数处理的结果
 * @group numberTo
 * @param value - 输入值（应为数字）
 * @param transform - 自定义转换函数，默认为原值返回
 * @returns 转换后的结果
 * @example
 * numberTo(10, n => n * 2); // 20
 * numberTo(10, n => n.toString()); // '10'
 * numberTo('10', n => n.toString()); // null
 */
export function numberTo<T = number>(
  value: unknown,
  transform: (n: number) => T = n => n as T
): T | null {
  return numberIs(value) ? transform(value) : null;
}

/**
 * 将值转换为整数类型
 * @group numberTo
 * @param value - 输入值
 * @param fallback - 转换失败时的默认值
 * @returns 转换后的整数
 * @example
 * numberToInt('42'); // 42
 * numberToInt('abc', 5); // 5
 */
export function numberToInt(value: unknown, fallback = 0): number {
  const n = parseInt(String(value), 10);
  return isNaN(n) ? fallback : n;
}

/**
 * 将值转换为浮点数
 * @group numberTo
 * @param value - 输入值
 * @param fallback - 转换失败时的默认值
 * @returns 转换后的浮点数
 * @example
 * numberToFloat('3.14'); // 3.14
 * numberToFloat(undefined, 1.1); // 1.1
 */
export function numberToFloat(value: unknown, fallback = 0): number {
  const n = parseFloat(String(value));
  return isNaN(n) ? fallback : n;
}

/**
 * 将数字格式化为固定小数位
 * @group numberTo
 * @param value - 输入值
 * @param digits - 小数位数（默认为 2）
 * @returns 格式化后的字符串
 * @example
 * numberToFixed(3.14159); // '3.14'
 * numberToFixed('abc'); // '0.00'
 */
export function numberToFixed(value: unknown, digits = 2): string {
  const n = numberToFloat(value);
  return n.toFixed(digits);
}

/**
 * 将数字转换为百分比格式字符串
 * @group numberTo
 * @param value - 输入值
 * @param digits - 小数位数（默认为 0）
 * @returns 百分比字符串
 * @example
 * numberToPercent(0.12); // '12%'
 * numberToPercent(0.1234, 2); // '12.34%'
 */
export function numberToPercent(value: unknown, digits = 0): string {
  const n = numberToFloat(value);
  return `${(n * 100).toFixed(digits)}%`;
}
