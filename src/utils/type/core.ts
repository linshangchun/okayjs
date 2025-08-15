/**
 * 判断值是否为 null
 * @group type
 * @param val - 任意值
 * @returns 是否为 null
 */
export function isNull(val: unknown): val is null {
  return val === null;
}

/**
 * 判断值是否为 undefined
 * @group type
 * @param val - 任意值
 * @returns 是否为 undefined
 */
export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined';
}

/**
 * 判断值是否为字符串类型
 * @group type
 * @param val - 任意值
 * @returns 是否为字符串
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

/**
 * 判断值是否为数字类型（包括 NaN）
 * @group type
 * @param val - 任意值
 * @returns 是否为数字
 */
export function isNumber(val: unknown): val is number {
  return typeof val === 'number';
}

/**
 * 判断值是否为布尔类型
 * @group type
 * @param val - 任意值
 * @returns 是否为布尔值
 */
export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean';
}

/**
 * 判断值是否为符号类型
 * @group type
 * @param val - 任意值
 * @returns 是否为 symbol
 */
export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol';
}

/**
 * 判断值是否为 bigint 类型
 * @group type
 * @param val - 任意值
 * @returns 是否为 bigint
 */
export function isBigInt(val: unknown): val is bigint {
  return typeof val === 'bigint';
}

/**
 * 判断值是否为函数
 * @group type
 * @param val - 任意值
 * @returns 是否为函数
 * @example
 * isFunction(() => {}); // true
 * isFunction(123); // false
 */
export function isFunction<
  T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown
>(val: unknown): val is T {
  return typeof val === 'function';
}

/**
 * 判断值是否为普通对象（非 null、非数组）
 * @group type
 * @param val - 任意值
 * @returns 是否为普通对象
 */
export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * 判断值是否为数组
 * @group type
 * @param val - 任意值
 * @returns 是否为数组
 */
export function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val);
}

/**
 * 判断值是否为 Date 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 Date
 */
export function isDate(val: unknown): val is Date {
  return val instanceof Date;
}

/**
 * 判断值是否为 RegExp 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为正则表达式
 */
export function isRegExp(val: unknown): val is RegExp {
  return val instanceof RegExp;
}

/**
 * 判断值是否为 Map 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 Map
 */
export function isMap(val: unknown): val is Map<unknown, unknown> {
  return val instanceof Map;
}

/**
 * 判断值是否为 Set 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 Set
 */
export function isSet(val: unknown): val is Set<unknown> {
  return val instanceof Set;
}

/**
 * 判断值是否为 WeakMap 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 WeakMap
 */
export function isWeakMap(val: unknown): val is WeakMap<object, unknown> {
  return val instanceof WeakMap;
}

/**
 * 判断值是否为 WeakSet 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 WeakSet
 */
export function isWeakSet(val: unknown): val is WeakSet<object> {
  return val instanceof WeakSet;
}

/**
 * 判断值是否为 Error 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 Error
 */
export function isError(val: unknown): val is Error {
  return val instanceof Error;
}

/**
 * 判断值是否为 Promise 实例
 * @group type
 * @param val - 任意值
 * @returns 是否为 Promise
 */
export function isPromise(val: unknown): val is Promise<unknown> {
  return val instanceof Promise;
}

/**
 * 判断值是否为 File 对象（浏览器环境）
 * @group type
 * @param val - 任意值
 * @returns 是否为 File 实例
 * @example
 * isFile(new File([], 'test.txt')); // true
 * isFile('file'); // false
 */
export function isFile(val: unknown): val is File {
  return !isUndefined(File) && val instanceof File;
}

/**
 * 判断值是否为 Blob 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 Blob 实例
 * @example
 * isBlob(new Blob()); // true
 */
export function isBlob(val: unknown): val is Blob {
  return !isUndefined(Blob) && val instanceof Blob;
}

/**
 * 判断值是否为 FormData 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 FormData 实例
 * @example
 * isFormData(new FormData()); // true
 */
export function isFormData(val: unknown): val is FormData {
  return !isUndefined(FormData) && val instanceof FormData;
}

/**
 * 判断值是否为 URLSearchParams 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 URLSearchParams 实例
 * @example
 * isURLSearchParams(new URLSearchParams()); // true
 */
export function isURLSearchParams(val: unknown): val is URLSearchParams {
  return !isUndefined(URLSearchParams) && val instanceof URLSearchParams;
}

/**
 * 判断值是否为 ArrayBuffer 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 ArrayBuffer 实例
 * @example
 * isArrayBuffer(new ArrayBuffer(8)); // true
 */
export function isArrayBuffer(val: unknown): val is ArrayBuffer {
  return val instanceof ArrayBuffer;
}

/**
 * 判断值是否为 DataView 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 DataView 实例
 * @example
 * isDataView(new DataView(new ArrayBuffer(8))); // true
 */
export function isDataView(val: unknown): val is DataView {
  return val instanceof DataView;
}

/**
 * 判断值是否为 Uint8Array 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 Uint8Array 实例
 * @example
 * isUint8Array(new Uint8Array([1, 2, 3])); // true
 */
export function isUint8Array(val: unknown): val is Uint8Array {
  return val instanceof Uint8Array;
}

/**
 * 判断值是否为 Node.js 中的 Buffer 对象
 * @group type
 * @param val - 任意值
 * @returns 是否为 Buffer 实例
 * @example
 * isBuffer(Buffer.from('abc')); // true
 */
export function isBuffer(val: unknown): val is Buffer {
  return !isUndefined(Buffer) && Buffer.isBuffer(val);
}
