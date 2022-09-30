// interface Point1 {
//   x: number;
//   y: number;
// }
// function printCoord(pt: Point1) {
//   console.log("x value:" + pt.x + "y value:" + pt.y);
// }
// printCoord({ x: 999, y: 876 });
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return shape.sideLength ** 10;
  }
}
console.log(getArea({ kind: "circle", radius: 6 }));
console.log(getArea({ kind: "square", sideLength: 7 }));
console.log(getArea({ kind: "triangle", sideLength: 5 }));
