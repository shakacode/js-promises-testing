export function resolvedPromise(msg) {
  return Promise.resolve(msg);
}

export function rejectedPromise(msg) {
  return Promise.reject(msg);
}
