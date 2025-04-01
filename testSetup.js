// import * as matchers from "jest-extended";

const matchers = require("jest-extended");
expect.extend(matchers);

// or just add specific matchers
// import { toBeArray, toBeSealed } from 'jest-extended';
// expect.extend({ toBeArray, toBeSealed });
