//type "mocha containment.spec.js" to run test

const { expect } = require("chai");
const containment = require("./containment");

describe("Containment", () => {
  it("Returns false if not contain", () => {
    expect(containment().to.equal(false));
  });
  it("Returns false if same size", () => {
    expect(containment().to.equal(false));
  });
  it("Returns false for partial containment", () => {
    expect(containment().to.equal(false));
  });
  it("Returns true if rect2 wholly contained within rect1", () => {
    expect(containment().to.equal(["blue", "red"]));
  });
  it("Returns true if rect1 wholly contained within rect2", () => {
    expect(containment().to.equal(["red", "blue"]));
  });
});
