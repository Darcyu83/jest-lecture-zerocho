export function returnDate() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date;
}
