//type "mocha intersection.spec.js" to run test

const { expect } = require("chai");
const intersection = require("./intersection");

describe("Intersection", () => {
  describe("No Intersections", () => {
    it("Returns false for no overlaps", () => {
      expect(
        intersection(
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
    it("Returns false for containment, rect2 inside rect1", () => {
      expect(
        intersection(
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
      ).to.equal(false);
    });
    it("Returns false for containment, rect1 inside rect2", () => {
      expect(
        intersection(
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
      ).to.equal(false);
    });
    it("Returns false for outside and aligned", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 1 },
            br: { x: 1, y: 1 }
          },
          {
            tl: { x: 1, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 1, y: 1 },
            br: { x: 2, y: 2 }
          }
        )
      ).to.equal(false);
    });
    it("Returns false for outside partial-alignment", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 1 },
            br: { x: 1, y: 1 }
          },
          {
            tl: { x: 1, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 1, y: 4 },
            br: { x: 2, y: 4 }
          }
        )
      ).to.equal(false);
    });
    it("Returns false for overlapping, but aligned on two sides", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 2 },
            br: { x: 1, y: 2 }
          },
          {
            tl: { x: 0, y: 1 },
            tr: { x: 1, y: 1 },
            bl: { x: 0, y: 3 },
            br: { x: 1, y: 3 }
          }
        )
      ).to.equal(false);
    });
  });
  //two points
  describe("Intersection with Two corners overlap", () => {
    it("Top Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 1 },
            tr: { x: 3, y: 1 },
            bl: { x: 0, y: 3 },
            br: { x: 3, y: 3 }
          },
          {
            tl: { x: 1, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 1, y: 2 },
            br: { x: 2, y: 2 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [2, 1]
      ]);
    });
    it("Top Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 1, y: 2 },
            br: { x: 2, y: 2 }
          },
          {
            tl: { x: 0, y: 1 },
            tr: { x: 3, y: 1 },
            bl: { x: 0, y: 3 },
            br: { x: 3, y: 3 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [2, 1]
      ]);
    });
    it("Bottom Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 0, y: 2 },
            br: { x: 3, y: 2 }
          },
          {
            tl: { x: 1, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 1, y: 3 },
            br: { x: 2, y: 3 }
          }
        )
      ).to.have.deep.members([
        [1, 2],
        [2, 2]
      ]);
    });
    it("Bottom Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 1, y: 3 },
            br: { x: 2, y: 3 }
          },
          {
            tl: { x: 0, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 0, y: 2 },
            br: { x: 3, y: 2 }
          }
        )
      ).to.have.deep.members([
        [1, 2],
        [2, 2]
      ]);
    });
    it("Left Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 1, y: 3 },
            br: { x: 3, y: 3 }
          },
          {
            tl: { x: 0, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 0, y: 2 },
            br: { x: 2, y: 2 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [1, 2]
      ]);
    });
    it("Left Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 0, y: 2 },
            br: { x: 2, y: 2 }
          },
          {
            tl: { x: 1, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 1, y: 3 },
            br: { x: 3, y: 3 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [1, 2]
      ]);
    });
    it("Right Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 0, y: 3 },
            br: { x: 2, y: 3 }
          },
          {
            tl: { x: 1, y: 1 },
            tr: { x: 3, y: 1 },
            bl: { x: 1, y: 2 },
            br: { x: 3, y: 2 }
          }
        )
      ).to.have.deep.members([
        [2, 1],
        [2, 2]
      ]);
    });
    it("Right Intersection", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 1 },
            tr: { x: 3, y: 1 },
            bl: { x: 1, y: 2 },
            br: { x: 3, y: 2 }
          },
          {
            tl: { x: 0, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 0, y: 3 },
            br: { x: 2, y: 3 }
          }
        )
      ).to.have.deep.members([
        [2, 1],
        [2, 2]
      ]);
    });
  });
  //one point
  describe("Intersection with One corner overlap", () => {
    it("Returns intersections for top-left corner overlap", () => {
      expect(
        intersection(
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
      ).to.have.deep.members([
        [2, 1],
        [1, 2]
      ]);
    });
    it("Returns intersections for bottom-right corner overlap", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 1 },
            tr: { x: 3, y: 1 },
            bl: { x: 1, y: 3 },
            br: { x: 3, y: 3 }
          },
          {
            tl: { x: 0, y: 0 },
            tr: { x: 2, y: 0 },
            bl: { x: 0, y: 2 },
            br: { x: 2, y: 2 }
          }
        )
      ).to.have.deep.members([
        [2, 1],
        [1, 2]
      ]);
    });
    it("Returns intersections for top-right corner overlap", () => {
      expect(
        intersection(
          {
            tl: { x: 0, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 0, y: 3 },
            br: { x: 2, y: 3 }
          },
          {
            tl: { x: 1, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 1, y: 2 },
            br: { x: 3, y: 2 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [2, 2]
      ]);
    });
    it("Returns intersections for bottom-left corner overlap", () => {
      expect(
        intersection(
          {
            tl: { x: 1, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 1, y: 2 },
            br: { x: 3, y: 2 }
          },
          {
            tl: { x: 0, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 0, y: 3 },
            br: { x: 2, y: 3 }
          }
        )
      ).to.have.deep.members([
        [1, 1],
        [2, 2]
      ]);
    });
  });
});
