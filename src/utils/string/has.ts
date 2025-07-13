/**
 * 字符串特征包含函数集
 */

import { stringIs } from '@/utils/string/is';

/**
 * 判断字符串是否包含指定内容，若未传 part 则判断是否为非空字符串
 * @group stringHas
 * @param str - 输入值
 * @param part - 可选的匹配值，可为字符串、正则表达式或自定义函数
 * @returns 是否满足包含逻辑
 * @example
 * stringHas('hello', 'ell'); // true
 * stringHas('hello', /ell/); // true
 * stringHas('hello', s => s.startsWith('h')); // true
 * stringHas(''); // false
 */
export function stringHas(str: string, part?: string | RegExp | ((s: string) => boolean)): boolean {
  if (!stringIs(str)) return false;
  if (part === undefined) return str.length > 0;
  if (stringIs(part)) return str.includes(part as string);
  if (part instanceof RegExp) return part.test(str);
  if (typeof part === 'function') return part(str);
  return false;
}

/**
 * 判断字符串中是否包含数字
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含数字字符
 */
export function stringHasNumber(str: string): boolean {
  return stringHas(str, /\d/);
}

/**
 * 判断字符串中是否包含字母
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含字母字符
 */
export function stringHasAlpha(str: string): boolean {
  return stringHas(str, /[a-zA-Z]/);
}

/**
 * 判断字符串中是否包含中文
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含中文字符
 */
export function stringHasChinese(str: string): boolean {
  return stringHas(str, /[\u4e00-\u9fa5]/);
}

/**
 * 判断字符串中是否包含空格
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含空格字符
 */
export function stringHasSpace(str: string): boolean {
  return stringHas(str, /\s/);
}

/**
 * 判断字符串中是否包含大写字母
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含大写字母
 */
export function stringHasUppercase(str: string): boolean {
  return stringHas(str, /[A-Z]/);
}

/**
 * 判断字符串中是否包含小写字母
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含小写字母
 */
export function stringHasLowercase(str: string): boolean {
  return stringHas(str, /[a-z]/);
}

/**
 * 判断字符串中是否包含符号字符
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含符号字符
 */
export function stringHasSymbol(str: string): boolean {
  return stringHas(str, /[!@#$%^&*(),.?":{}|<>\-+=\\[\]~]/);
}

/**
 * 判断字符串中是否包含 emoji 表情
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含 emoji 表情
 */
export function stringHasEmoji(str: string): boolean {
  return stringHas(str, /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/u);
}

/**
 * 判断字符串中是否包含换行符
 * @group stringHas
 * @param str 输入值
 * @returns 是否包含换行符
 */
export function stringHasLineBreak(str: string): boolean {
  return stringHas(str, /[\r\n]/);
}
