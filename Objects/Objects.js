//1) JavaScript Object by object literal
emp={
    id:102,
    name:"priyush",
    salary:"124034"
}
document.write(emp.id+" "+emp.name+" "+emp.salary);
document.write("<br />");
console.log(emp.name);

// 2) By creating instance of Object
let lok=new Object();
lok.id=101;
lok.name="hardik";
lok.salary=26666;
document.write(lok.id+" "+lok.name+" "+lok.salary);  
document.write("<br />");



//3) By using an Object constructor
function human(id, name, salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e =new human(103,"Ram",124646);
document.write(e.id+" "+e.name+" "+e.salary);  
