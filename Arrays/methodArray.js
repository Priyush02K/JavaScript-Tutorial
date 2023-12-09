let num=[1,2,3,4,5,6];
//toStrting
let b = num.toString() // b is now a string 
console.log(b, typeof b)

//join
let c = num.join(" and ")
console.log(c, typeof c);


//push +pop
let city = ["New York", "Madrid", "Kathmandu"];

city.push("London");
city.pop()
console.log(city);

//unshift shitft
city.unshift("mumbai");
console.log(city);
city.shift("mumbai");
console.log(city);

//length

let citys = ["California", "Barcelona", "Paris", "Kathmandu"];

// find the length of the city array
let len = citys.length;
console.log(len);

// concat
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8] 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

//reverse
let reversedArray = primeNumbers.reverse();
console.log(reversedArray);

//sort
let gav = ["California", "Barcelona", "Paris", "Kathmandu"];

// sort the city array in ascending order
let sortedArray = gav.sort();
console.log(sortedArray);

let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

let newarry=primeNumbers.slice(3,6);
console.log(newarry);

let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log(square_numbers);

//filter method
let item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumberss = item.filter(checkEven);
console.log(evenNumbers);

//reduce()
const red_fun=(h1,h2)=>{
    return h1+h2;
}
let res =item.reduce(red_fun)
console.log(res);