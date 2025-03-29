export function promiseResolve() {
  return Promise.resolve("OK");
}

export function promiseReject() {
  return Promise.reject("NG");
}

export async function asyncFnOk() {
  return "OK";
}

export async function asyncFnNG() {
  return "NG";
}
