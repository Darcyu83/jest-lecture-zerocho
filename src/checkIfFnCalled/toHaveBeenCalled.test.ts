import returnObj from "../returnObj";
import sum from "../sum";

test("Check if Sum function called", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test("Check the Sum function called 1 time", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  sumSpy(3, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("Check arguments of the Sum function called", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalledWith(3, 2);
});

test("Check the Sum function in Object called 1 time", () => {
  // const sumSpy = jest.fn(returnObj().sum);
  jest.spyOn(returnObj(), "sum");
  const sum = returnObj().sum;
  const result = sum(1, 2);
  expect(sum).toHaveBeenCalledTimes(1);
  expect(result).toBe(2);
});
