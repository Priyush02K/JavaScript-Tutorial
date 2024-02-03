class Student  
  {  
    constructor()  
    {  
       let name;  
       let marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
      this.marks=marks;  
    }  
  
    }  
    var stud=new Student();  
     stud.setName("Priyush");  
     stud.setMarks(80);  
     document.writeln(stud.getName()+" "+stud.getMarks());  

  