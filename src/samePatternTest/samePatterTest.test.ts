it.each([
  [1, 2, 3],
  [2, 3, 5],
])(
  "같은 패턴의 테스트를 한번에 실행 like array.map %i 더하기 %i ",
  (a, b, c) => {
    expect(a + b).toBe(c);
  }
);

it.each([
  { a: 1, b: 2, c: 3 },
  {
    a: 2,
    b: 3,
    c: 5,
  },
])("같은 패턴의 테스트를 한번에 실행 like array.map $a 더하기 $b ", (obj) => {
  expect(obj.a + obj.b).toBe(obj.c);
});
