
//greter >90 Q1
let marks =[98,77,54,98,32,92,45,90];
let newarr =marks.filter((val)=>{
    return val>90;
});
console.log(newarr);


// Q2 Take a number n as input from user. Create an array of numbers from 1 to n

let n =prompt("entre the number :" );
let arr =[];
for (let i=1; i<=n;i++){
    arr[i-1] =i;
}
console.log(arr);

//Q Use the reduce method to calculate sum of all numbers in the array.


let total=arr.reduce((prev ,curr)=>{
    return prev +curr;
});

console.log("total",total);

// Q Use the reduce method to calculate product of all numbers in the array.

let factorial=arr.reduce((prev ,curr)=>{
    return prev *curr;
});
console.log("factorial= ",factorial);