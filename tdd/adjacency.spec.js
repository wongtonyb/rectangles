//type "mocha adjacency.spec.js" to run test

const { expect } = require("chai");
const adjacency = require("./adjacency");

describe("adjacency", () => {
  describe("False Cases", () => {
    it("Returns false if not touching", () => {
      expect(
        adjacency(
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
    it("Returns false if overlaping and sharing sides", () => {
      expect(
        adjacency(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 1 },
            br: { x: 1, y: 1 }
          },
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 1 },
            br: { x: 1, y: 1 }
          }
        )
      ).to.equal(false);
    });
    it("Returns false if aligned along x axis but not touching", () => {
      expect(
        adjacency(
          {
            tl: { x: 0, y: 0 },
            tr: { x: 1, y: 0 },
            bl: { x: 0, y: 1 },
            br: { x: 1, y: 1 }
          },
          {
            tl: { x: 1, y: 2 },
            tr: { x: 2, y: 2 },
            bl: { x: 1, y: 3 },
            br: { x: 2, y: 3 }
          }
        )
      ).to.equal(false);
    });
    it("Returns false if aligned along y axis but not touching", () => {
      expect(
        adjacency(
          {
            tl: { x: 2, y: 0 },
            tr: { x: 3, y: 0 },
            bl: { x: 2, y: 1 },
            br: { x: 3, y: 1 }
          },
          {
            tl: { x: 0, y: 1 },
            tr: { x: 1, y: 1 },
            bl: { x: 0, y: 2 },
            br: { x: 1, y: 2 }
          }
        )
      ).to.equal(false);
    });
  });
  describe("True Cases", () => {
    it("True for Proper Adjacency", () => {
      expect(
        adjacency(
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
      ).to.equal(`There is proper adjacency along x = 1`);
    });
    it("True for Sub-line Adjacency, small blue big red", () => {
      expect(
        adjacency(
          {
            tl: { x: 1, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 1, y: 4 },
            br: { x: 2, y: 4 }
          },
          {
            tl: { x: 2, y: 2 },
            tr: { x: 3, y: 2 },
            bl: { x: 2, y: 3 },
            br: { x: 3, y: 3 }
          }
        )
      ).to.equal(`There is subline adjacency along x = 2`);
    });
    it("True for Sub-line Adjacency, small red big blue", () => {
      expect(
        adjacency(
          {
            tl: { x: 2, y: 2 },
            tr: { x: 3, y: 2 },
            bl: { x: 2, y: 3 },
            br: { x: 3, y: 3 }
          },
          {
            tl: { x: 1, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 1, y: 4 },
            br: { x: 2, y: 4 }
          }
        )
      ).to.equal(`There is subline adjacency along x = 2`);
    });
    it("True for Partial Adjacency", () => {
      expect(
        adjacency(
          {
            tl: { x: 1, y: 1 },
            tr: { x: 2, y: 1 },
            bl: { x: 1, y: 3 },
            br: { x: 2, y: 3 }
          },
          {
            tl: { x: 2, y: 2 },
            tr: { x: 3, y: 2 },
            bl: { x: 2, y: 4 },
            br: { x: 3, y: 4 }
          }
        )
      ).to.equal(`There is partial adjacency along x = 2`);
    });
  });
});
