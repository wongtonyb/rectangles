//type "mocha intersection.spec.js" to run test

const { expect } = require("chai");
const intersection = require("./intersection");

describe("intersection", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(intersection("", 10)).to.equal("");
  });
});
