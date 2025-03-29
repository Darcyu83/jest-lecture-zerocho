import returnClass from "../returnClass";
import returnObj from "../returnObj";
import sum from "../sum";

test("test Normal object values with toStrictEqual", () => {
  expect(returnObj()).toStrictEqual({ text: "ABC", sum: sum });
});

test("test Class object values with toStrictEqual", () => {
  expect(returnClass()).toStrictEqual({ text: "ABC" });
});

test("test object values with toStrictEqual", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  // expect([1, 2, 3]).not.toBe([1, 2, 3]);
  // expect([1, 2, 3]).toBe([1, 2, 3]);
});
