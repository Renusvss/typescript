//user definedntypes
type Point = {
  x: number;
  y: number;
};
function printCoord(pt: Point) {
  console.log("x value:" + pt.x + "y value:" + pt.y);
}
printCoord({ x: 1212, y: 12121 });
