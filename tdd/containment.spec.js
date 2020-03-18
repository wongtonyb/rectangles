//type "mocha containment.spec.js" to run test

const { expect } = require("chai");
const containment = require("./containment");

describe("Containment", () => {
  it("Returns false if not contained", () => {
    expect(
      containment(
        {
          tl: { x: 0, y: 0 },
          tr: { x: 1, y: 0 },
          bl: { x: 0, y: 1 },
          br: { x: 1, y: 1 }
        },
        {
          tl: { x: 2, y: 0 },
          tr: { x: 3, y: 0 },
          bl: { x: 0, y: 4 },
          br: { x: 3, y: 4 }
        }
      )
    ).to.equal(false);
  });
  it("Returns false if rectangles are positioned and dimensioned identically", () => {
    expect(
      containment(
        {
          tl: { x: 0, y: 0 },
          tr: { x: 3, y: 0 },
          bl: { x: 0, y: 3 },
          br: { x: 3, y: 3 }
        },
        {
          tl: { x: 0, y: 0 },
          tr: { x: 3, y: 0 },
          bl: { x: 0, y: 3 },
          br: { x: 3, y: 3 }
        }
      )
    ).to.equal(false);
  });
  it("Returns false for partial containment", () => {
    expect(
      containment(
        {
          tl: { x: 0, y: 0 },
          tr: { x: 2, y: 0 },
          bl: { x: 0, y: 2 },
          br: { x: 2, y: 2 }
        },
        {
          tl: { x: 1, y: 1 },
          tr: { x: 3, y: 1 },
          bl: { x: 1, y: 3 },
          br: { x: 3, y: 3 }
        }
      )
    ).to.equal(false);
  });
  it("Returns false for within, but aligned with one or more sides", () => {
    expect(
      containment(
        {
          tl: { x: 0, y: 0 },
          tr: { x: 1, y: 0 },
          bl: { x: 0, y: 1 },
          br: { x: 1, y: 1 }
        },
        {
          tl: { x: 0, y: 0 },
          tr: { x: 2, y: 0 },
          bl: { x: 0, y: 2 },
          br: { x: 2, y: 2 }
        }
      )
    ).to.equal(false);
  });
  it("Returns true if rect2 wholly contained within rect1", () => {
    expect(
      containment(
        {
          tl: { x: 0, y: 0 },
          tr: { x: 3, y: 0 },
          bl: { x: 0, y: 3 },
          br: { x: 3, y: 3 }
        },
        {
          tl: { x: 1, y: 1 },
          tr: { x: 2, y: 1 },
          bl: { x: 1, y: 2 },
          br: { x: 2, y: 2 }
        }
      )
    ).deep.equal(["blue", "red"]);
  });
  it("Returns true if rect1 wholly contained within rect2", () => {
    expect(
      containment(
        {
          tl: { x: 5, y: 1 },
          tr: { x: 6, y: 1 },
          bl: { x: 5, y: 2 },
          br: { x: 6, y: 2 }
        },
        {
          tl: { x: 4, y: 0 },
          tr: { x: 7, y: 0 },
          bl: { x: 4, y: 3 },
          br: { x: 7, y: 3 }
        }
      )
    ).deep.equal(["red", "blue"]);
  });
});
