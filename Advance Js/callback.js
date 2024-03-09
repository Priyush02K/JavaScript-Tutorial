//function
function greet(name ,callback){
    console.log('hi'+ ' '+name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

//passing function as an argument
greet('Priyush', callMe);


function name(){
    console.log("Hello World");

}

function sayname(naam){
    console.log('hello '+ ' ' +naam);
}

//calling function
setTimeout(name,2000);
sayname('Priyush');