const toString = Object.prototype.toString

export function isDate(data: any): data is Date {
  return toString.call(data) === '[object Date]'
}

export function isObject(obj: any): obj is Object {
  return obj !== null && typeof obj === 'object'
}
