import axios from "axios";

// node_modules 와 같은 레벨에 __mocks__폴더가 있다면
// node_modules안에 있는 라이브러리를 mocking할 수 있다.
jest.mock("axios");

// jest.mock("axios", () => {
//   return {
//     from: "rootDir/node_modules/axios/",
//     post: () => {},
//     get: () => {},
//     delete: () => {},
//   };
// });

test("axios 라이브러리 mocking", () => {
  console.log(axios);
});
