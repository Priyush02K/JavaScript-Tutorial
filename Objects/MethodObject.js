
//assign
const object1 = {  
    a: 11,  
    b: 12,  
    c: 33  
  };  
    
  const object2 = Object.assign({c: 4, d: 5}, object1);  
  console.log(object2.c, object2.d);  

  //create
  function fruits(){
    this.name="Aam"
  }
  function fun(){
    fruits.call(this)
  }

fun.prototype=Object.create(fruits.prototype);
const app=new fun();
console.log(app.name);


//entire
const obj = { 1: 'marrc', 2: 'sort', 3: 'carry' };  
   
   // Displaying the countable property [key, value]   
   // pairs of the object using object.entries() method.   
console.log(Object.entries(obj)[2]);//access obj.  

//freeze
const kam = {  
    property1: 22  
  };  
  const kam1 = Object.freeze(kam);  
  kam1.property1 = 33;  
  // Throws an error in strict mode  
  console.log(kam1.property1); 

  //seal
  const obj1 = { property1: 'Marry'};  
        const obj2 = Object.seal(obj1);  
       // prevents other code from deleting properties of an object.  
        obj2.property1 = 'carry';  
        console.log(obj2.property1);  

  //values
  let car ={
    a:"BMW",
    b:"audi",
    c:"MG"
  };
  console.log(Object.values(car));