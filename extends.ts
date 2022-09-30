interface P {
  x: number;
}
interface Q extends P {
  y: number;
}
interface R extends Q {
  z: number;
}
const abc: R = { x: 1, y: 2, z: 4 };
console.log(abc.x + "" + abc.y + "" + abc.z);
