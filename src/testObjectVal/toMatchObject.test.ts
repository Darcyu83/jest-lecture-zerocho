import returnClass from "../returnClass";
import returnObj from "../returnObj";

test("test Normal object values with toMatchObject", () => {
  expect(returnObj()).toMatchObject({ text: "ABC" });
});

test("test Class object values with toMatchObject", () => {
  expect(returnClass()).toMatchObject({ text: "ABC" });
});

test("test Class object values with toMatchObject", () => {
  expect([1, 2, 3]).toMatchObject([1, 2, 3]);
});
