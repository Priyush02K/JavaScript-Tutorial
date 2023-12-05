//String in js
let str1 ="Priyush";
let str2 = "learn javascript"
console.log(str1,str2);


//By string literal
var str='This is string literal';  
document.write(str);  


//Template Literals for Strings
const name = 'Jack';
console.log(`Hello ${name}`); 

const result = 4 + 5;

// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);

console.log(`${result < 10 ? 'Too low': 'Very high'}`)

//By string object (using new keyword)
var stringname=new String("hello javascript string");  
document.write(stringname);