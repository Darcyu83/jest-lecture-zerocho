# JEST Lecture - ZeroCho

## Installation

npm i -D jest

### typescript(Only ts files from here)

```
npm i -D ts-jest @types/jest
```

- typescript jest config

```
npx ts-jest config:init
```

- If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`)

```
npx -p typescript tsc --init
```

- jest-extended

jest-extended 타입스크립트에서 못찾으면
global.d.ts -> import "jest-extended" 문구 추가
tsconfig.json -> "files" : ["global.d.ts"]

https://jest-extended.jestcommunity.dev/docs/getting-started/setup


```
 npm install -D jest-extended
```

### Extentions

- Jest Or Jest Runner

## Test Coverage

### Comparing with value

expect().toBe()

- comparing with Object

// Check if it is Class or Object

```
expect().toStrictEqual()
```

// just check Object

```
expect().toMatchObject()
```

### Check function invoked times and arguments

- times

```
test("Check the Sum function called 1 time", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  sumSpy(3, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});


```

- arguments

```
test("Check arguments of the Sum function called", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalledWith(3, 2);
});
```
