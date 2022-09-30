// interface A {
//   age: number;
// }
// interface B {
//   age: number;
// }
// let a: A = { age: 21 };
// console.log(a.age);

// let b: B = a;
// console.log("b-->age" + b.age);
// interface Profile {
//   readonly name: string;
//   age?: number;
// }
// let profile: Profile = {
//   name: "sachin",
//   age: 49,
// };
// console.log(profile.name + "" + profile.age);
// //after readonly one time assignment possible
// profile.name = "dhoni";
// console.log(profile.name + "" + profile.age);
interface Sum {
  (a: number, b: number): number;
  city: string;
}
const sum: Sum = (a, b) => a + b;
sum.city = "vizag";
console.log(sum.city);
console.log(sum(80, 30));
