/*
For the case of this function,
Containment will be defined as smaller rectangle to be within (not touching)
the border of the bigger rectangle
*/

const containment = (red, blue) => {
  //check blue inside red
  if (
    //top-left corner
    blue.tl.x > red.tl.x &&
    blue.tl.x < red.br.x &&
    blue.tl.y > red.tl.y &&
    blue.tl.y < red.br.y &&
    //top-right  corner
    blue.tr.x < red.tr.x &&
    blue.tr.x > red.bl.x &&
    blue.tr.y > red.tr.y &&
    blue.tr.y < red.bl.y &&
    //bot-left corner
    blue.bl.x > red.bl.x &&
    blue.bl.x < red.tr.x &&
    blue.bl.y < red.bl.y &&
    blue.bl.y > red.tr.y &&
    //bot-right corner
    blue.br.x < red.br.x &&
    blue.br.x > red.tl.x &&
    blue.br.y < red.br.y &&
    blue.br.y > red.tl.y
  ) {
    //returning this instead of just true for more convienent UI integration
    return ["blue", "red"];
  }
  //check red inside blue
  if (
    //top-left corner
    red.tl.x > blue.tl.x &&
    red.tl.x < blue.br.x &&
    red.tl.y > blue.tl.y &&
    red.tl.y < blue.br.y &&
    //top-right  corner
    red.tr.x < blue.tr.x &&
    red.tr.x > blue.bl.x &&
    red.tr.y > blue.tr.y &&
    red.tr.y < blue.bl.y &&
    //bot-left corner
    red.bl.x > blue.bl.x &&
    red.bl.x < blue.tr.x &&
    red.bl.y < blue.bl.y &&
    red.bl.y > blue.tr.y &&
    //bot-right corner
    red.br.x < blue.br.x &&
    red.br.x > blue.tl.x &&
    red.br.y < blue.br.y &&
    red.br.y > blue.tl.y
  ) {
    return ["red", "blue"];
  }
  //default
  return false;
};
module.exports = containment;
