//Example 1: Program with a Promise
const count =true;
let countValue = new Promise(function (resolve, reject) {
    if(count){
        resolve("There is a count value.");
    }else{
        reject("There is no count value.")
    }
});
console.log(countValue);
