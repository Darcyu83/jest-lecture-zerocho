import MyClass from "../myClass";
import myModule from "../myModule";

jest.mock("../myClass");

// src/myModule.ts
// src/__mocks__/myModule.ts

// 원본 파일과 같은 레벨 위치에 __mocks__가 있다면
// __mocks__ / myModule.ts에서 불러옴.
jest.mock("../myModule");

// customized
// jest.mock("../myModule", () => {
//   return {
//     obj: { a: { b: "haha" } },
//     myProps: "hello",
//   };
// });

// customized partially
// jest.mock("../myModule", () => {
//   return {
//     ...jest.requireActual("../myModule"), // 기존 프로퍼티 유지 (spy X)
//     myProps: "olleh",
//   };
// });

test("모듈전체를 Mocking ", () => {
  // 함수 수정할때는
  // jest.spyOn()
  // .mockImplementationOnce(() => 11)
  // .mockImplementation(myFnToRun);

  // 프로퍼티 수정할때는 jest.replaceProperty(object, property_name, new_values)

  jest.replaceProperty(myModule, "myProps", { haha: "replaced" });
  console.log(myModule);

  jest.replaceProperty(myModule.myProps, "haha", "replaced2");
  console.log(myModule);

  console.log(MyClass);

  expect(MyClass).toBeDefined();
});
