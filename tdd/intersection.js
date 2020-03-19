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

For the case of this function,
Intersection will be defined as when a horizontal edge crosses a vertical edge and vice-versa
*/

const intersection = (red, blue) => {
  let sol = [];
  //horizontal blue lines intersecting vertical red lines
  //top blue line
  //within red top/bot y axis
  if (blue.tl.y > red.tl.y && blue.tl.y < red.bl.y) {
    //blue left side left of red left side
    if (blue.tl.x < red.tl.x) {
      //blue right side right of red right side
      if (blue.tr.x > red.tr.x) {
        sol.push([red.tl.x, blue.tl.y]);
        sol.push([red.tr.x, blue.tr.y]);
      }
      //blue right side inside red rect
      else if (blue.tr.x <= red.tr.x && blue.tr.x > red.tl.x) {
        sol.push([red.tl.x, blue.tl.y]);
      }
    }
    //blue left side not left of red left
    //check if blue right right of red right ride
    else if (blue.tr.x > red.tr.x) {
      //check if blue left side within red rect
      if (blue.tl.x >= red.tl.x && blue.tl.x < red.tr.x) {
        sol.push([red.tr.x, blue.tr.y]);
      }
    }
  }
  //bot blue line
  if (blue.bl.y > red.tl.y && blue.bl.y < red.bl.y) {
    if (blue.bl.x < red.tl.x) {
      if (blue.br.x > red.tr.x) {
        sol.push([red.tl.x, blue.bl.y]);
        sol.push([red.tr.x, blue.br.y]);
      } else if (blue.br.x <= red.tr.x && blue.br.x > red.tl.x) {
        sol.push([red.tl.x, blue.bl.y]);
      }
    } else if (blue.br.x > red.tr.x) {
      if (blue.bl.x >= red.tl.x && blue.bl.x < red.tr.x) {
        sol.push([red.tr.x, blue.br.y]);
      }
    }
  }
  //vertical blue lines intersecting horiztontal red lines
  //left blue line
  if (blue.tl.x > red.tl.x && blue.tl.x < red.tr.x) {
    if (blue.tl.y < red.tl.y) {
      if (blue.bl.y > red.bl.y) {
        sol.push([blue.tl.x, red.tl.y]);
        sol.push([blue.tl.x, red.bl.y]);
      } else if (blue.bl.y <= red.bl.y && blue.bl.y > red.tl.y) {
        sol.push([blue.tl.x, red.tl.y]);
      }
    } else if (blue.bl.y > red.bl.y) {
      if (blue.tl.y >= red.tl.y && blue.tl.y < red.bl.y) {
        sol.push([blue.tl.x, red.bl.y]);
      }
    }
  }
  //right blue line
  if (blue.tr.x > red.tl.x && blue.tr.x < red.tr.x) {
    if (blue.tr.y < red.tl.y) {
      if (blue.bl.y > red.bl.y) {
        sol.push([blue.tr.x, red.tl.y]);
        sol.push([blue.tr.x, red.bl.y]);
      } else if (blue.bl.y <= red.bl.y && blue.bl.y > red.tl.y) {
        sol.push([blue.tr.x, red.tl.y]);
      }
    } else if (blue.bl.y > red.bl.y) {
      if (blue.tr.y >= red.tl.y && blue.tr.y < red.bl.y) {
        sol.push([blue.tr.x, red.bl.y]);
      }
    }
  }
  return sol.length ? sol : false;
};

module.exports = intersection;
