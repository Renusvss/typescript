type Foods =
  | "veg friedrice"
  | "burger"
  | "alu tikki"
  | "sambar rice"
  | "rice roller"
  | "non-veg sandwich";
let foodies: Foods;
foodies = "burger";
console.log(foodies);
type NonFoodies = "veg sandwich" | "rice roller" | "sambar rice";
let dhoni: Exclude<Foods, NonFoodies>;
dhoni = "alu tikki";
console.log(dhoni);
type dhoniFavouriteFood = "veg sandwich" | "rice roller" | "chicken" | "mutton";
let result: Extract<Foods, dhoniFavouriteFood>;
result = "rice roller"; //only valid both common value
console.log(result);

interface Player {
  age: number;
  name: string;
}
type Categories = "batter" | "bowler" | "keeper";
const players: Record<Categories, Player> = {
  batter: { name: "virat", age: 30 },
  bowler: { name: "shami", age: 29 },
  keeper: { name: "pant", age: 26 },
};
console.log(players.batter);
console.log(players.bowler);
console.log(players.keeper);
