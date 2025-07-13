/**
 * 数字判断相关函数集合
 */

/**
 * 判断值是否为数字类型（包括 NaN）
 * @group numberIs
 * @param value - 输入值
 * @param predicate - 可选的自定义判断函数
 * @returns 是否为 number 类型或通过自定义函数判断
 * @example
 * numberIs(123); // true
 * numberIs('123'); // false
 * numberIs(5, n => n > 0); // true
 */
export function numberIs(value: unknown, predicate?: (n: number) => boolean): value is number {
  const isNumber = typeof value === 'number';
  return isNumber && (typeof predicate === 'function' ? predicate(value) : true);
}

/**
 * 判断值是否为有限数字（不包含 NaN 和 Infinity）
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为有限数字
 * @example
 * numberIsFinite(123); // true
 * numberIsFinite(Infinity); // false
 */
export function numberIsFinite(value: unknown): boolean {
  return numberIs(value) && isFinite(value);
}

/**
 * 判断值是否为整数
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为整数
 * @example
 * numberIsInteger(42); // true
 * numberIsInteger(3.14); // false
 */
export function numberIsInteger(value: unknown): boolean {
  return numberIs(value) && Number.isInteger(value);
}

/**
 * 判断值是否为正数
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为正数
 * @example
 * numberIsPositive(5); // true
 * numberIsPositive(-5); // false
 */
export function numberIsPositive(value: unknown): boolean {
  return numberIs(value) && value > 0;
}

/**
 * 判断值是否为负数
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为负数
 * @example
 * numberIsNegative(-5); // true
 * numberIsNegative(5); // false
 */
export function numberIsNegative(value: unknown): boolean {
  return numberIs(value) && value < 0;
}

/**
 * 判断值是否为零
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为零
 * @example
 * numberIsZero(0); // true
 * numberIsZero(1); // false
 */
export function numberIsZero(value: unknown): boolean {
  return numberIs(value) && value === 0;
}

/**
 * 判断值是否为偶数
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为偶数
 * @example
 * numberIsEven(4); // true
 * numberIsEven(3); // false
 */
export function numberIsEven(value: unknown): boolean {
  return numberIs(value) && value % 2 === 0;
}

/**
 * 判断值是否为奇数
 * @group numberIs
 * @param value - 输入值
 * @returns 是否为奇数
 * @example
 * numberIsOdd(3); // true
 * numberIsOdd(4); // false
 */
export function numberIsOdd(value: unknown): boolean {
  return numberIs(value) && Math.abs(value % 2) === 1;
}
