export default {
  ...jest.requireActual("axios"), // 원본 옵션들 가져오는
  from: "rootDir/__mocks__/axios.ts",
  post: () => {},
  get: () => {},
  delete: () => {},
};
