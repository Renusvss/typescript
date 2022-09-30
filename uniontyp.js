//union types
// function printId(id) {
//   console.log("your ID:" + id);
// }
// printId(1321312);
// function printId(id: number | string) {
//   console.log("your ID:" + id);
// }
// printId(1321312);
// printId("123renu");
//the values is specified and cannot be null,undefined,or any other type other than specified and null as well
//printId();
// function printId(id: number | string) {
//   if (typeof id === "string") {
//     console.log("your id:" + id.toUpperCase());
//   } else {
//     console.log("your ID:" + id);
//   }
// }
// printId(1321312);
// printId("123renu");
// function welcomePeople(people: string | string[]) {
//   if (Array.isArray(people)) {
//     console.log("Hello" + people.join("&"));
//   } else {
//     console.log("welcome to world lone traveller" + people);
//   }
// }
// const people = ["kavya", "Renu", "Avinash", "raju"];
// const user = "Affruddin";
// welcomePeople(user);
// welcomePeople(people);
function logValue(msg) {
    if (msg instanceof Date) {
        console.log("date-->" + msg.toUTCString());
    }
    else {
        console.log("string-->" + msg.toUpperCase());
    }
}
logValue(Date());
logValue(new Date());
