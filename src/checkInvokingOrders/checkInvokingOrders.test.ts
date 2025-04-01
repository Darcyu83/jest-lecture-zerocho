import { invokeFirst, invokeSecond, invokeThird } from "../invokingOrder";

test("함수 호출 순서 체크 : first -> second -> third", () => {
  const spy1 = jest.fn(invokeFirst);
  const spy2 = jest.fn(invokeSecond);
  const spy3 = jest.fn(invokeThird);

  spy1(); // spy.mock.invocationCallOrder[0]
  spy2();
  // spy1의 실행오더 1 이 spy2의 실행오더 2 보다 작은지 체크(먼저 실행되었는지)
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );

  spy3();

  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );
  // console.log(spy1.mock.invocationCallOrder, spy2.mock.invocationCallOrder);
});

test("with jest-extended 함수 호출 순서 체크 : first -> second -> third", () => {
  const spy1 = jest.fn(invokeFirst);
  const spy2 = jest.fn(invokeSecond);
  const spy3 = jest.fn(invokeThird);

  spy1(); // spy.mock.invocationCallOrder[0]
  spy2();

  // jest-extended
  // spy1의 실행오더 1 이 spy2의 실행오더 2 보다 작은지 체크(먼저 실행되었는지)
  expect(spy1).toHaveBeenCalledBefore(spy2);

  spy3();

  expect(spy3).toHaveBeenCalledAfter(spy2);
  // console.log(spy1.mock.invocationCallOrder, spy2.mock.invocationCallOrder);
});

test("with jest-extended 함수 전달인수 체크", () => {
  const fn = jest.fn();

  fn({
    a: {
      b: {
        c: { d: "bye" },
      },
    },
    e: ["f"],
  });

  // 전체 비교
  expect(fn).toHaveBeenCalledWith({
    a: {
      b: {
        c: { d: "bye" },
      },
    },
    e: ["f"],
  });

  // 부분 비교
  expect(fn.mock.calls[0][0].a.b.c.d).toBe("bye");
});
