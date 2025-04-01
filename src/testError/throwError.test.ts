import { CustomError, throwCustomError, throwError } from "../throwError";

test("throwError ==== ", () => {
  // Error 발생
  // const errorFn = () => throwError();
  // expect(errorFn()).toThrow(Error);

  // ! 주의 :: 정상동작
  expect(() => throwError()).toThrow(Error);
});

test("throwError ==== ", () => {
  try {
    throwError();
  } catch (error) {
    expect(error).toStrictEqual(new Error());
  }
});

test("throwCustomError ==== ", () => {
  expect(() => throwCustomError()).toThrow(CustomError);
});
