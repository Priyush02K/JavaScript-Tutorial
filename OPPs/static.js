class Test{
    static display(){
        return "static method is invoked"
    }

show(){
    document.writeln(Test.display()+" <br>");
}
}
let t =new Test();
t.show();