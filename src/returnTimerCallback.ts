export function returnTimerCallback(callback: (str: string) => void) {
  setTimeout(() => {
    callback("SUCCESS");
  }, 3000);
}
