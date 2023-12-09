//Q1 add no
let arr=[1,2,3,4,5,6,7];
let a=prompt("Enter the Number");
a=Number.parseInt(a);
arr.push(a);
console.log(a);

//Q2 
let num=[1,2,3,4,5,6,7];
let b;
do{
    b=prompt("Entre the Number");
    b=Number.parseInt(b);
    num.push(b);
}while(a!=0);
console.log(num);

//Q3
let item = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let c=item.filter((x)=>{
    return x%10==0;
})
console.log(c);
//Q4
let data = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let d=data.filter((x)=>{
    return x%10==0;
})
console.log(d);

// Q5
let aik = [1, 2, 3, 4, 5]
let n = aik.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n)