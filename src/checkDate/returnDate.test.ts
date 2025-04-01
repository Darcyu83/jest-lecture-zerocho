import { returnDate } from "../returnDate";

// 시간 원복 afterAll afterEach
afterAll(() => {
  jest.useRealTimers();
});

test("check 3 days ", () => {
  // 임의 시간 설정: 2025, 03, 31
  jest.useFakeTimers().setSystemTime(new Date(2024, 2, 31));

  const date = new Date();
  date.setDate(date.getDate() + 3);

  const date2 = returnDate();
  console.log(date);
  console.log(date2);


  expect(date2).toStrictEqual(date);
});
