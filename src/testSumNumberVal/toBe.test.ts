import sum from "../sum";

test("sum 1 + 2 with ts ", () => {
  expect(sum(1, 2)).toBe(3);
  // expect(sum(2, 1)).not.toBe(3);
});
