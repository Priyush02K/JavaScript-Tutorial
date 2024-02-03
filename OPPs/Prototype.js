function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee1=new Employee("Priyush","Khobragade");  
var employee2=new Employee("Roy", "William");  
document.writeln(employee1.fullName()+"<br>");  
document.writeln(employee2.fullName());  