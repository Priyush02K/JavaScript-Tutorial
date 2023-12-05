//String  method in js

// defining string
let string1 = "JavaScript";

// returns the number of characters in 'JavaScript'
let len = string1.length;

console.log(len);

console.log(string1[2]);



// JavaScript String toUpperCase() Method

let Upper=string1.toUpperCase();
console.log(Upper);

let lower=string1.toLowerCase();
console.log(lower);

//JavaScript String concat(str) Method

let nam="priyush";
let sirname="khobragade";

let fullname=nam.concat(sirname)
console.log(fullname);

// JavaScript String slice(beginIndex, endIndex) Method
let c=nam.slice(2,5);
console.log(c);

// JavaScript String trim() Method
var s1="     javascript trim    ";  
var s2=s1.trim();  
console.log(s2);

//replace 
console.log(nam.replace("priyush", "Ritesh"));

// JavaScript String charAt(index) Method
console.log(nam.charAt(2));