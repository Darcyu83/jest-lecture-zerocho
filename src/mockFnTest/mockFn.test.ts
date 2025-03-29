import { mockFnObj } from "../mockObjWithFunction";

test("Check the Mock function and spy on mockFnObj.minus fn", () => {
  jest.spyOn(mockFnObj, "minus");
  const result = mockFnObj.minus(1, 2);
  expect(mockFnObj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});

test("Check the Mock function and spy on mockFnObj.minus fn and not run", () => {
  const myFnToRun = () => 5;
  jest
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

  jest
    .spyOn(mockFnObj, "minus")
    .mockImplementationOnce(() => 10)
    .mockReturnValue(99);

  const resultRunning6 = mockFnObj.minus(1, 2);
  const resultRunning7 = mockFnObj.minus(1, 2);
  const resultRunning8 = mockFnObj.minus(1, 2);

  expect(resultRunning6).toBe(10);
  expect(resultRunning7).toBe(99);
  expect(resultRunning8).toBe(99);
});
