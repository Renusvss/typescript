//console.log("welcome to Ts world");
// function greet(person: string, date: Date) {
//   console.log(`hi:${person}welocme to ts world:${date}`);
// }
// greet("renu", new Date());
// function greet1(name:string) {
//   console.log("hello:" + name.toUpperCase());
// }
// greet1("renu");
//greet1(42);
//object
// function printCoordinates(pt: { x: number; y: number }) {
//   console.log("values of x:" + pt.x + "value of y" + pt.y);
// }
// printCoordinates({ x: 3, y: 4 });

function printName(obj: { firstName: string; lastName?: string }) {
  console.log(`first name:` + obj.firstName + `lastname:` + obj.lastName);
  console.log(`firstname:` + obj.firstName.toUpperCase());
  if (obj.lastName !== undefined) {
    console.log(`lastname:` + obj.lastName);
  }
}
printName({ firstName: "renu", lastName: "svss" });
printName({ firstName: "renu" });
