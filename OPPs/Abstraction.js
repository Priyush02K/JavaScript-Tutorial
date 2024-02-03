//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
var vehicle=new Vehicle();  

//Ex 02
//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
document.writeln(bike.display());  