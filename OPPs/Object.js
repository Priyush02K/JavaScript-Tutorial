//1) JavaScript Object by object literal
emp={
    id:102,name:"Priyush Khobragade",
    salary:100
}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  


//2) By creating instance of Object
var emp=new Object();  
emp.id=101;  
emp.name="Dadas Hardik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary);  

//3) By using an Object constructor
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"Kishore Jaiswal",30000);  
      
    document.write(e.id+" "+e.name+" "+e.salary);  