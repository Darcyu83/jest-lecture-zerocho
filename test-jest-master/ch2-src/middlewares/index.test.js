const { isLoggedIn, isNotLoggedIn } = require("./");

describe("isLoggedIn", () => {
  const res = {
    status() {
      return this;
    },
    status1: jest.fn(() => res),

    send: jest.fn(),
    redirect: jest.fn(),
  };
  const next = jest.fn();

  const statusSpy = jest.spyOn(res, "status");

  test("로그인 됬으면 next() 호출", () => {
    const req = {
      isAuthenticated() {
        // 로그인시 true 반환
        return true;
      },
    };

    isLoggedIn(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("로그인 안됬으면  403 + 메시지", () => {
    const req = {
      isAuthenticated() {
        // 로그인시 true 반환
        return false;
      },
    };

    isLoggedIn(req, res, next);
    expect(next).not.toHaveBeenCalledTimes(1);
    expect(statusSpy).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});

describe("isNotLoggedIn ", () => {
  test("로그인 안됬으면 next() 호출 ", () => {
    const req = {
      isAuthenticated() {
        // 로그인 안한 상태면 false 반환
        return false;
      },
    };

    const res = {
      redirect: jest.fn(),
    };

    const next = jest.fn();

    isNotLoggedIn(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  test("로그인 됬으면 redirect() 호출 with 메시지 ", () => {
    const req = {
      isAuthenticated() {
        // 로그인 안한 상태면 false 반환
        return true;
      },
    };

    const res = {
      redirect: jest.fn(),
    };

    const next = jest.fn();

    isNotLoggedIn(req, res, next);
    expect(next).not.toHaveBeenCalledTimes(1);
    expect(res.redirect).toHaveBeenCalledTimes(1);
  });
});
