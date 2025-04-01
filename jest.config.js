/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },

  // rootDir: ".",
  setupFilesAfterEnv: ["./testSetup.js"],
  // "setupFilesAfterEnv": ["jest-extended/all"]
};
