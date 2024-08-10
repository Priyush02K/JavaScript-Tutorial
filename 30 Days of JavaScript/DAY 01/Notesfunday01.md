//normal fun
function f(a ,b){
    const sum=a+b;
    return sum;
}
console.log(f(2.4))

//Anonymous fun
let f=function(a,b){
    const sum=a+b;
    return sum;
}
console.log(f(2.4))

// Immediate invoke
let f=function(a,b){
        const sum=a+b;
        return sum;
    }(2.6)
console.log(f);

//array function

let f=(a,b)=>{
    const sum=a+b;
    return sum;
}
console.log(f(2.4))

function fun(){
   return function f(a,b){
        const sum=a+b;
        return sum
    }
    
}
var numsum=fun()
console.log(numsum(2,3))
