export function throwError() {
  throw new Error();
}

export class CustomError extends Error {}
export function throwCustomError() {
  throw new CustomError();
}
