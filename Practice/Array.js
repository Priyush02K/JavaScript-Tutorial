//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let marks =[85, 97, 44, 37, 76, 60];
let sum=0;
for (let val of marks){
    sum +=val;
}
let avg =sum/marks.length;
console.log(`avg marks of the class =${avg}`);

//s. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after
//applying offer.

let items =[250, 645, 300, 900, 50];

let i=0;

for(let val of items){
    console.log(`value at index= ${val}`);
  let  offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value of after offer= ${items[i]}`);
    i++;
    
    
}