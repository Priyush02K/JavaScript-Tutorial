//practice Que 1
class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
  
    }
    get real() {
        return this._real
      }
    
      get imaginary() {
        return this._imaginary
      }
    
      set imaginary(newImaginary) {
        this._imaginary = newImaginary
      }
    
      set real(newReal) {
        this._real = newReal
     }
}




// let a=new Complex(2,4);
// let b=new Complex(6.2);
// a.add(b)
// console.log(`${a.real}+${a.imaginary}i`)


//Q 2
class Human{
    constructor(name,favFood){
        this.name=name;
        this.favFood=favFood;
    }

    walk(){
        console.log(this.name +"Human is walking")
    }
}
class Student extends Human{
    walk(){
        console.log(this.name +": Student is walking")
    }
}

let o =new Student("Priyush" ,"DalBath")
o.walk();


//Q3

console.log(o instanceof Human)