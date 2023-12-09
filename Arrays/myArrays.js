let Array =[19,44,66,64,89,100];
console.log(Array);
console.log(Array.length);//property

Array[3];

let hero =["ironman","thor","hulk"];
console.log(hero);

//loop in array
for (let index = 0; index < hero.length; index++) {
    console.log(hero[index]);
    
}
//for of
for (let heros of hero){
    console.log(heros)
}


let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)


//2) JavaScript Array directly (new keyword)
var i;  
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i=0;i<emp.length;i++){  
console.log(emp[i] + "<br>");  
}  

//JavaScript array constructor (new keyword)
var emp=new Array("Jai","Vijay","Smith");  
for (i=0;i<emp.length;i++){  
    console.log(emp[i] + "<br>");  
}  