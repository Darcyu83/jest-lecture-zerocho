import { mockFnObj } from "../mockObjWithFunction";

// 부득이하게 테스트 스킵해야하는 경우
// test.skip() || describe.skip() || it.skip()
// xtest() || xit();

test.skip("before / after group 1 test", () => {});

// 나중에 만들어야하는 경우
// test.todo() || it.todo()

// 각각의 before / after 적용할때
describe("before / after group 1", () => {
  beforeAll(() => {});

  beforeEach(() => {});

  afterEach(() => {});
  test("before / after group 1 test", () => {});
});

describe("before / after group 2", () => {
  beforeAll(() => {});

  beforeEach(() => {});

  afterEach(() => {});
  test("before / after group 2 test", () => {});
});

beforeAll(() => {
  // 테스트 준비사항
  // DB커넥션 등등
});

beforeEach(() => {
  // 각 테스트 전에 실행됨
  // 초기화 등등
});

afterEach(() => {
  // 각 테스트 후에 실행됨
  // DB커넥션 종료 또는 초기화 등등

  // jest.resetAllMocks();
  jest.restoreAllMocks();
});

// spyOn several times effects others
// spy.mockRestore() // clear all
// spy.mockClear() // Times, with
// spy.mockRest() // mockClear + mockImplementation(() => {})
test("Check the Mock function and spy on mockFnObj.minus fn", () => {
  const spy = jest.spyOn(mockFnObj, "minus");
  const result = mockFnObj.minus(1, 2);
  expect(mockFnObj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
  spy.mockRestore();
});

test("Check the Mock function and spy on mockFnObj.minus fn and not run", () => {
  const myFnToRun = () => 5;
  const spy1 = jest
    .spyOn(mockFnObj, "minus")
    .mockImplementationOnce(() => 10)
    .mockImplementationOnce(() => 11)
    .mockImplementation(myFnToRun);

  const resultRunning1 = mockFnObj.minus(1, 2);
  const resultRunning2 = mockFnObj.minus(1, 2);
  const resultRunning3 = mockFnObj.minus(1, 2);
  const resultRunning4 = mockFnObj.minus(1, 2);

  expect(resultRunning1).toBe(10);
  expect(resultRunning2).toBe(11);
  expect(resultRunning3).toBe(5);
  expect(resultRunning4).toBe(5);

  expect(mockFnObj.minus).toHaveBeenCalledTimes(4);
  spy1.mockRestore();

  const spy2 = jest
    .spyOn(mockFnObj, "minus")
    .mockImplementationOnce(() => 10)
    .mockReturnValue(99);

  const resultRunning6 = mockFnObj.minus(1, 2);
  const resultRunning7 = mockFnObj.minus(1, 2);
  const resultRunning8 = mockFnObj.minus(1, 2);

  expect(resultRunning6).toBe(10);
  expect(resultRunning7).toBe(99);
  expect(resultRunning8).toBe(99);
  spy2.mockRestore();
});
