
//assert
let x = 5;
let y = 5;
const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
console.assert(x + y == 11, myArr);
//clear
console.clear();

//cout
for (let i = 0; i < 5; i++) {
    console.count();
}

console.error("You made a mistake");
//group
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
//info
console.info("Hello world!");

//table
console.table(["Audi", "Volvo", "Ford"]);

//time
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();


console.warn("This is a warning!");
