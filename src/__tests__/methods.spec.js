import { asyncFunction } from "./dumbModule";
import { withBeforeAfter } from "../methods";

jest.mock("./dumbModule.js");

describe("withBeforeAfter", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    const hookedMethods = withBeforeAfter(
      {
        hookedMethod(params) {
          asyncFunction(params, "pending");
        }
      },
      {
        onBeforeEach: () => asyncFunction("before"),
        onAfterEach: () => asyncFunction("after")
      }
    );
    hookedMethods.hookedMethod("param");
  });

  describe("on empty function list", () => {
    it("should return empty object", () => {
      expect(withBeforeAfter({})).toEqual({});
    });
  });

  describe("on hooked method calls", () => {
    it("should call asyncFunction before", () => {
      expect(asyncFunction).toBeCalledWith("before");
    });

    it("should call hookedMethods with params", () => {
      expect(asyncFunction).toBeCalledWith("param", "pending");
    });

    it("should call asyncFunction after", () => {
      expect(asyncFunction).toBeCalledWith("after");
    });
  });
});
