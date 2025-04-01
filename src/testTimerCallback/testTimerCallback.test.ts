import { returnTimerCallback } from "../returnTimerCallback";

// callback timer 함수는 done을 사용
// callback함수 보다는 Promise를 사용
test("testTimerCallback ==== 타이머 시간 흐름 조절(느리게/빠르게) ", (done) => {
  // timer 커스텀 컨트롤을 위해서
  jest.useFakeTimers();

  // expect 문  실행 횟수 체크
  expect.assertions(1);

  returnTimerCallback((message: string) => {
    expect(message).toBe("SUCCESS");
    done();
  });

  // 타이머 시간 빠르게 (3s)
  jest.advanceTimersByTime(3_000);

  // 타이머 시간 빠르게
  // jest.runAllTimers();
});
