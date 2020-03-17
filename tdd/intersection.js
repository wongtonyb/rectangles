/*
input rectangles will be in the form of,

red: {
    tl: {x:val, y:val},
    tr: {x:val, y:val},
    bl: {x:val, y:val},
    br: {x:val, y:val}
}

blue: {
    tl: {x:val, y:val},
    tr: {x:val, y:val},
    bl: {x:val, y:val},
    br: {x:val, y:val},
}

to be more easily integratable with front-end ui

tl represents top-left,
tr represents top-right
bl represents bot-left
br represents bot-right

also to integrate with ui for effectively
x will increase left to right
y will increase top to bot (instead of the usual bot to top)
*/

const intersection = (red, blue) => {
  //check whether red is inside blue or blue is inside red
  //by looking at the relationship of the corners' coordinates
  let pinside = [];
  //check blue in red
  if (
    blue.tl.x > red.tl.x &&
    blue.tl.x < red.br.x &&
    blue.tl.y > red.tl.y &&
    blue.tl.y < red.br.y
  ) {
    pinside.push("tl");
  }
  if (
    blue.tr.x < red.tr.x &&
    blue.tr.x > red.bl.x &&
    blue.tr.y > red.tr.y &&
    blue.tr.y < red.bl.y
  ) {
    pinside.push("tr");
  }
  if (
    blue.bl.x > red.bl.x &&
    blue.bl.x < red.tr.x &&
    blue.bl.y < red.bl.y &&
    blue.bl.y > red.tr.y
  ) {
    pinside.push("bl");
  }
  if (
    blue.br.x < red.br.x &&
    blue.br.x > red.tl.x &&
    blue.br.y < red.br.y &&
    blue.br.y > red.tl.y
  ) {
    pinside.push("br");
  }
  if (pinside.length) pinside.push("blue");
  //check red in blue
  if (!pinside.length) {
    if (
      red.tl.x > blue.tl.x &&
      red.tl.x < blue.br.x &&
      red.tl.y > blue.tl.y &&
      red.tl.y < blue.br.y
    ) {
      pinside.push("tl");
    }
    if (
      red.tr.x < blue.tr.x &&
      red.tr.x > blue.bl.x &&
      red.tr.y > blue.tr.y &&
      red.tr.y < blue.bl.y
    ) {
      pinside.push("tr");
    }
    if (
      red.bl.x > blue.bl.x &&
      red.bl.x < blue.tr.x &&
      red.bl.y < blue.bl.y &&
      red.bl.y > blue.tr.y
    ) {
      pinside.push("bl");
    }
    if (
      red.br.x < blue.br.x &&
      red.br.x > blue.tl.x &&
      red.br.y < blue.br.y &&
      red.br.y > blue.tl.y
    ) {
      pinside.push("br");
    }
    if (pinside.length) pinside.push("red");
  }

  //only 4 possible outcomes of points inside (0, 4, 2, 1)
  if (pinside.length === 0) return false; //"no intersection"
  if (pinside.length - 1 === 4) return false; //"all points in, containment"
  //the -1 is for the additional "blue"/"red" pushed in
  //two points inside
  if (pinside.length - 1 === 2) {
    //blue inside red
    if (pinside.includes("blue")) {
      //bottom intersection
      if (pinside.includes("tl") && pinside.includes("tr")) {
        return [
          [blue.tl.x, red.bl.y],
          [blue.tr.x, red.br.y]
        ];
      }
      //right intersection
      if (pinside.includes("tl") && pinside.includes("bl")) {
        return [
          [red.tr.x, blue.tl.y],
          [red.br.x, blue.bl.y]
        ];
      }
      //left intersection
      if (pinside.includes("tr") && pinside.includes("br")) {
        return [
          [red.tl.x, blue.tr.y],
          [red.bl.x, blue.br.y]
        ];
      }
      //top intersection
      if (pinside.includes("bl") && pinside.includes("br")) {
        return [
          [blue.bl.x, red.tl.y],
          [blue.br.x, red.tr.y]
        ];
      }
    }
    //red inside blue
    if (pinside.includes("red")) {
      if (pinside.includes("tl") && pinside.includes("tr")) {
        return [
          [red.tl.x, blue.bl.y],
          [red.tr.x, blue.br.y]
        ];
      }
      if (pinside.includes("tl") && pinside.includes("bl")) {
        return [
          [blue.tr.x, red.tl.y],
          [blue.br.x, red.bl.y]
        ];
      }
      if (pinside.includes("tr") && pinside.includes("br")) {
        return [
          [blue.tl.x, red.tr.y],
          [blue.bl.x, red.br.y]
        ];
      }
      if (pinside.includes("bl") && pinside.includes("br")) {
        return [
          [red.bl.x, blue.tl.y],
          [red.br.x, blue.tr.y]
        ];
      }
    }
  }
  //one point inside
  if (pinside.length - 1 === 1) {
    if (pinside.includes("blue")) {
      if (pinside.includes("tl")) {
        return [
          [blue.tl.x, red.br.y],
          [red.br.x, blue.tl.y]
        ];
      }
      if (pinside.includes("tr")) {
        return [
          [blue.tr.x, red.bl.y],
          [red.bl.x, blue.tr.y]
        ];
      }
      if (pinside.includes("bl")) {
        return [
          [blue.bl.x, red.tr.y],
          [red.tr.x, blue.bl.y]
        ];
      }
      if (pinside.includes("br")) {
        return [
          [blue.br.x, red.tl.y],
          [red.tl.x, blue.br.y]
        ];
      }
    }
    if (pinside.includes("red")) {
      if (pinside.includes("tl")) {
        return [
          [red.tl.x, blue.br.y],
          [blue.br.x, red.tl.y]
        ];
      }
      if (pinside.includes("tr")) {
        return [
          [red.tr.x, blue.bl.y],
          [blue.bl.x, red.tr.y]
        ];
      }
      if (pinside.includes("bl")) {
        return [
          [red.bl.x, blue.tr.y],
          [blue.tr.x, red.bl.y]
        ];
      }
      if (pinside.includes("br")) {
        return [
          [red.br.x, blue.tl.y],
          [blue.tl.x, red.br.y]
        ];
      }
    }
  }
};

module.exports = intersection;
