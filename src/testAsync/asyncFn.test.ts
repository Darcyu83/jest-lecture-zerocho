import {
  asyncFnOk as asyncFnOK,
  promiseReject,
  promiseResolve,
} from "../asyncFn";

async function aFn() {
  return "";
}

jest
  .spyOn({ a: aFn }, "a")
  .mockResolvedValueOnce("OK1")
  .mockRejectedValue("NG1");

test("promiseResolve + async/await", async () => {
  const promiseResolveSpy = jest.fn(promiseResolve);
  const result = await promiseResolveSpy().catch((err) => err);
  expect(result).toBe("OK");
});

test("promiseResolve + resolves", () => {
  const promiseResolveSpy = jest.fn(promiseResolve);

  //!! return 사용할 것
  return expect(promiseResolveSpy()).resolves.toBe("OK");
});

test("promiseResolve + then ", () => {
  const promiseResolveSpy = jest.fn(promiseResolve);
  return promiseResolveSpy().then((str) => expect(str).toBe("OK"));
});

test("promiseReject + async/await", async () => {
  const promiseRejectSpy = jest.fn(promiseReject);
  const result = await promiseRejectSpy().catch((err) => err);
  expect(result).toBe("NG");
});

test("promiseReject ", () => {
  const promiseRejectSpy = jest.fn(promiseReject);

  //!! return 사용할 것
  return expect(promiseRejectSpy()).rejects.toBe("NG");
});

test("promiseReject ", () => {
  const promiseRejectSpy = jest.fn(promiseReject);
  // catch
  return promiseRejectSpy().catch((str) => expect(str).toBe("NG"));
});

test("asyncFnOK ", () => {
  const asyncFnOKSpy = jest.fn(asyncFnOK);

  //!! return 사용할 것
  return expect(asyncFnOKSpy()).resolves.toBe("OK");
});

test("asyncFnOK ", () => {
  const asyncFnOKSpy = jest.fn(asyncFnOK);
  return asyncFnOKSpy().then((str) => expect(str).toBe("OK"));
});
