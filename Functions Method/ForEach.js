let arr =[1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
});

let city =["mumbai","pune","hyderabad"];

city.forEach( (val, idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});

//Q 2  print square

let num = [1,2,3,4,5,6];

num.forEach((num)=>{
    console.log(num*num)
});