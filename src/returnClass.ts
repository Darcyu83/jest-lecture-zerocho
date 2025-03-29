class ObjClass {
  text: string;

  constructor(str: string) {
    this.text = str;
  }
}
export default function returnClass() {
  return new ObjClass("ABC");
}
