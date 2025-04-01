it("dynamically import ", async () => {
  const maModule = await import("../myModule");

  // would be cached
  (maModule as any).tempProp = "just added";

  expect(maModule).toBeDefined();
});

// 앞에 정의한 .tempProp = "just added" 가
// 다음 테스트에 영향이 가는것은 좋지않다.
it("dynamically import same module object without beforeEach ", async () => {
  const maModule = await import("../myModule");

  // (maModule as any).tempProp = "just added";

  expect((maModule as any).tempProp).toBe("just added");
});

beforeEach(() => {
  // delete cache
  jest.resetModules();
});
