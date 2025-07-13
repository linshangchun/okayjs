/**
 * 字符串转换函数集
 */

/**
 * 通用字符串转换函数，传入转换函数处理字符串
 * @group stringTo
 * @param str 输入字符串
 * @param convert 转换函数
 * @returns 转换后的结果
 */
export function stringTo<T>(str: string, convert: (s: string) => T): T {
  return convert(str);
}

/**
 * 转换为大写字符串
 * @group stringTo
 * @param str 输入字符串
 * @returns 大写后的字符串
 */
export function stringToUpper(str: string): string {
  return stringTo(str, s => s.toUpperCase());
}

/**
 * 将字符串转换为数字类型
 * @group stringTo
 * @param str 输入字符串
 * @returns 转换后的数字或 NaN
 */
export function stringToNumber(str: string): number {
  return stringTo(str, s => Number(s));
}

/**
 * 将字符串转换为布尔值
 * 支持 true: "true", "1", "yes", "on", "ok", "success"
 * 支持 false: "false", "0", "no", "off", "fail", "error"
 * @group stringTo
 * @param str 输入字符串
 * @returns 转换后的布尔值，转换失败返回null，控制台会打印异常
 */
export function stringToBoolean(str: string): boolean | null {
  return stringTo(str, s => {
    const lowered = s.toLowerCase();
    const trueValues = ['true', '1', 'yes', 'on', 'ok', 'success'];
    const falseValues = ['false', '0', 'no', 'off', 'fail', 'error'];
    if (trueValues.includes(lowered)) return true;
    if (falseValues.includes(lowered)) return false;
    console.error(new Error(`Invalid boolean string: ${s}`));
    return null;
  });
}

/**
 * 将字符串转换为日期对象
 * @group stringTo
 * @param str 输入字符串
 * @returns 转换后的日期对象，转换失败返回null，控制台会打印异常
 */
export function stringToDate(str: string): Date | null {
  return stringTo(str, s => {
    const d = new Date(s);
    if (isNaN(d.getTime())) {
      console.error(new Error(`Invalid date: ${s}`));
      return null;
    }
    return d;
  });
}

/**
 * 将字符串按分隔符转换为字符串数组
 * @group stringTo
 * @param str 输入字符串
 * @param delimiter 分隔符（默认 ,）
 * @returns 字符串数组
 */
export function stringToArray(str: string, delimiter = ','): string[] {
  return stringTo(str, s => s.split(delimiter));
}

/**
 * 将 JSON 字符串转换为对象
 * @group stringTo
 * @param str JSON 字符串
 * @returns 对象，转换失败返回null，控制台会打印异常
 */
export function stringToJson<T = unknown>(str: string): T {
  return stringTo(str, s => {
    try {
      return JSON.parse(s);
    } catch (e) {
      console.error(new Error(`Invalid JSON string: ${s}`), e);
      return null;
    }
  });
}

/**
 * 将字符串转换为驼峰形式（camelCase）
 * @group stringTo
 * @param str 输入字符串
 * @returns 驼峰字符串
 */
export function stringToCamelCase(str: string): string {
  return stringTo(str, s =>
    s
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
      .replace(/^(.)/, (_, c) => c.toLowerCase())
  );
}

/**
 * 将字符串转换为短横线连接形式（slug-case）
 * @group stringTo
 * @param str 输入字符串
 * @returns slug 字符串
 */
export function stringToSlug(str: string): string {
  return stringTo(str, s =>
    s
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  );
}

/**
 * 将字符串转换为常量命名（大写下划线）
 * @group stringTo
 * @param str 输入字符串
 * @returns CONST_NAME
 */
export function stringToConstant(str: string): string {
  return stringTo(str, s =>
    s
      .trim()
      .replace(/[-\s]+/g, '_')
      .replace(/[a-z]/g, c => c.toUpperCase())
  );
}

/**
 * 将字符串转换为标题形式（每个单词首字母大写）
 * @group stringTo
 * @param str 输入字符串
 * @returns Title Case 字符串
 */
export function stringToTitleCase(str: string): string {
  return stringTo(str, s =>
    s.toLowerCase().replace(/(?:^|\s|[-_])\w/g, match => match.toUpperCase())
  );
}
