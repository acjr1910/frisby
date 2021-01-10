import compose from "./index";

describe("compose", () => {
  it("should return a reversed string", () => {
    const joinString = (str) => str.join("");
    const splitString = (str) => str.split("");
    const reverseString = (str) => str.reverse();
    const uppercaseString = (str) => str.toUpperCase();

    const result = compose(
      uppercaseString,
      joinString,
      reverseString,
      splitString
    )("Hello World!");

    expect(result).toBe("!DLROW OLLEH");
  });
});
