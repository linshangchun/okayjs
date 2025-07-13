/**
 * 字符串类型判断函数集
 */

/**
 * 判断字符串是否为指定值，若未传 match 则判断是否为字符串类型
 * @group stringIs
 * @param str - 输入值
 * @param match - 可选的匹配值，可为字符串、正则或自定义函数
 * @returns 是否匹配
 * @example
 * stringIs('abc'); // true
 * stringIs('abc', 'abc'); // true
 * stringIs('abc', /^a/); // true
 * stringIs('abc', s => s.length === 3); // true
 */
export function stringIs(
  str: unknown,
  match?: string | RegExp | ((s: string) => boolean)
): boolean {
  if (match === undefined) return typeof str === 'string';
  if (typeof str !== 'string') return false;
  if (typeof match === 'string') return str === match;
  if (match instanceof RegExp) return match.test(str);
  if (typeof match === 'function') return match(str);
  return false;
}

/**
 * 判断字符串是否为邮箱格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法邮箱
 */
export function stringIsEmail(str: unknown): boolean {
  return stringIs(str, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

/**
 * 判断字符串是否为 URL 格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 URL
 */
export function stringIsUrl(str: unknown): boolean {
  return stringIs(str, /^(https?:\/\/)[\w\\-]+(\.[\w\\-]+)+[/#?]?.*$/);
}

/**
 * 判断字符串是否为中国大陆手机号格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为手机号
 */
export function stringIsPhone(str: unknown): boolean {
  return stringIs(str, /^1[3-9]\d{9}$/);
}

/**
 * 判断字符串是否为纯数字
 * @group stringIs
 * @param str 输入值
 * @returns 是否为纯数字字符串
 */
export function stringIsNumber(str: unknown): boolean {
  return stringIs(str, /^\d+$/);
}

/**
 * 判断字符串是否为 JSON 格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 JSON 字符串
 */
export function stringIsJson(str: string): boolean {
  if (!stringIs(str)) return false;
  try {
    const parsed = JSON.parse(str);
    return typeof parsed === 'object' && parsed !== null;
  } catch {
    return false;
  }
}

/**
 * 判断字符串是否为 UUID 格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 UUID 格式字符串
 */
export function stringIsUUID(str: unknown): boolean {
  return stringIs(
    str,
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  );
}

/**
 * 判断字符串是否为十六进制格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法十六进制颜色字符串
 */
export function stringIsHex(str: unknown): boolean {
  return stringIs(str, /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
}

/**
 * 判断字符串是否为日期格式 (YYYY-MM-DD)
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法日期字符串
 */
export function stringIsDate(str: unknown): boolean {
  return stringIs(str, /^\d{4}-\d{2}-\d{2}$/);
}

/**
 * 判断字符串是否为时间格式 (HH:mm:ss)
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法时间字符串
 */
export function stringIsTime(str: unknown): boolean {
  return stringIs(str, /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/);
}

/**
 * 判断字符串是否为 IPv4 地址格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 IPv4 地址字符串
 * @example
 * stringIsIPv4('192.168.1.1'); // true
 */
export function stringIsIPv4(str: unknown): boolean {
  return stringIs(
    str,
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/
  );
}

/**
 * 判断字符串是否为 IPv6 地址格式
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 IPv6 地址字符串
 * @example
 * stringIsIPv6('2001:0db8:85a3::8a2e:0370:7334'); // true
 */
export function stringIsIPv6(str: unknown): boolean {
  return stringIs(
    str,
    /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,7}:)|(::([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4})$/
  );
}

/**
 * 判断字符串是否为 IP 地址（IPv4 或 IPv6）
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 IP 地址
 * @example
 * stringIsIp('127.0.0.1'); // true
 */
export function stringIsIp(str: unknown): boolean {
  return stringIsIPv4(str) || stringIsIPv6(str);
}

/**
 * 判断字符串是否包含 HTML 标签
 * @group stringIs
 * @param str 输入值
 * @returns 是否包含 HTML 标签
 */
export function stringIsHtml(str: unknown): boolean {
  return stringIs(str, /<[^>]+>/);
}

/**
 * 判断字符串是否为 URL slug（短路径）
 * @group stringIs
 * @param str 输入值
 * @returns 是否为合法 URL slug 格式字符串
 * @example
 * stringIsSlug('my-article-title') // true
 * stringIsSlug('hello-world-2024') // true
 * stringIsSlug('Hello-World')      // false，大写不允许
 * stringIsSlug('hello_world')      // false，下划线不允许
 * stringIsSlug('hello world')      // false，空格不允许
 * stringIsSlug('')                 // false
 */
export function stringIsSlug(str: unknown): boolean {
  return stringIs(str, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
}
