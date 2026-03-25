// Minimal util shim for browser — only inspect() is used by printf
export function inspect(obj, opts) {
  try { return JSON.stringify(obj) } catch (e) { return String(obj) }
}
export default { inspect }
