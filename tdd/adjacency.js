/*
adjacency will be defined as no overlapping and only one side touching
*/

const adjaceny = (red, blue) => {
  //proper adjacent
  if (
    red.tr.x === blue.tl.x &&
    red.tr.y === blue.tr.y &&
    red.br.x === blue.bl.x &&
    red.br.y === blue.bl.y
  ) {
    return `There is proper adjacency along x = ${red.tr.x}`;
  }
  if (
    blue.tr.x === red.tl.x &&
    blue.tr.y === red.tl.y &&
    blue.br.x === red.bl.x &&
    blue.br.y === red.bl.y
  ) {
    return `There is proper adjacency along x = ${blue.tr.x}`;
  }
  if (
    red.bl.x === blue.tl.x &&
    red.bl.y === blue.tl.y &&
    red.br.x === blue.tr.x &&
    red.br.y === blue.tr.y
  ) {
    return `There is proper adjacency along y = ${red.bl.x}`;
  }
  if (
    blue.bl.x === red.tl.x &&
    blue.bl.y === red.tl.y &&
    blue.br.x === red.tr.x &&
    blue.br.y === red.tr.y
  ) {
    return `There is proper adjacency along y = ${blue.bl.x}`;
  }
  //sub-line adjacent
  if (
    (red.tr.x === blue.tl.x &&
      red.tr.y <= blue.tr.y &&
      red.br.x === blue.bl.x &&
      red.br.y >= blue.bl.y) ||
    (red.tr.x === blue.tl.x &&
      red.tr.y >= blue.tr.y &&
      red.br.x === blue.bl.x &&
      red.br.y <= blue.bl.y)
  ) {
    return `There is subline adjacency along x = ${red.tr.x}`;
  }
  if (
    (blue.tr.x === red.tl.x &&
      blue.tr.y >= red.tl.y &&
      blue.br.x === red.bl.x &&
      blue.br.y <= red.bl.y) ||
    (blue.tr.x === red.tl.x &&
      blue.tr.y <= red.tl.y &&
      blue.br.x === red.bl.x &&
      blue.br.y >= red.bl.y)
  ) {
    return `There is subline adjacency along x = ${red.tl.x}`;
  }
  if (
    (red.bl.x <= blue.tl.x &&
      red.bl.y === blue.tl.y &&
      red.br.x >= blue.tr.x &&
      red.br.y === blue.tr.y) ||
    (red.bl.x >= blue.tl.x &&
      red.bl.y === blue.tl.y &&
      red.br.x <= blue.tr.x &&
      red.br.y === blue.tr.y)
  ) {
    return `There is subline adjacency along y = ${blue.tl.y}`;
  }
  if (
    (blue.bl.x <= red.tl.x &&
      blue.bl.y === red.tl.y &&
      blue.br.x >= red.tr.x &&
      blue.br.y === red.tr.y) ||
    (blue.bl.x >= red.tl.x &&
      blue.bl.y === red.tl.y &&
      blue.br.x <= red.tr.x &&
      blue.br.y === red.tr.y)
  ) {
    return `There is subline adjacency along y = ${red.tl.y}`;
  }
  //partial adjacent
  //if (shared side && (corner1 within side boundary || corner2 within side boundary))
  if (
    red.tr.x === blue.tl.x &&
    ((blue.tl.y > red.tr.y && blue.tl.y < red.br.y) ||
      (blue.bl.y > red.tr.y && blue.bl.y < red.br.y))
  ) {
    return `There is partial adjacency along x = ${red.tr.x}`;
  }
  if (
    red.tl.x === blue.tr.x &&
    ((blue.tr.y > red.tl.y && blue.tr.y < red.bl.y) ||
      (blue.br.y > red.tl.y && blue.br.y < red.bl.y))
  ) {
    return `There is partial adjacency along x = ${red.tl.x}`;
  }
  if (
    red.tl.y === blue.bl.y &&
    ((blue.bl.x > red.tl.x && blue.bl.x < red.tr.x) ||
      (blue.br.x > red.tl.x && blue.br.x < red.tr.x))
  ) {
    return `There is partial adjacency along y = ${red.tl.y}`;
  }
  if (
    red.bl.y === blue.tl.y &&
    ((blue.tl.x > red.bl.x && blue.tl.x < red.br.x) ||
      (blue.tr.x > red.bl.x && blue.tr.x < red.br.x))
  ) {
    return `There is partial adjacency along y = ${red.bl.y}`;
  }
  //no adjacency
  return false;
};
module.exports = adjaceny;
