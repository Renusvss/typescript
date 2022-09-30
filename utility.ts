interface w {
  id: number;
  name: string;
  category: string;
  country: string;
}
type plrPick = Pick<w, "name" | "id">;
type plrOmit = Omit<w, "name" | "id">;
const p1: w = { id: 1, name: "virat", category: "batter", country: "india" };
const p2: plrPick = { id: 2, name: "renu" };
const p3: plrOmit = { category: "batter", country: "india" };
console.log(p1);
console.log(p2);
console.log(p3);
