let btn1=document.querySelector("#btn1");
// btn1.onclick =() =>{
//     let a=25;
//     a++;
//     console.log(a);
// }

//addeventhander
btn1.addEventListener("click" ,()=>{
    console.log("btn click")
});

btn1.addEventListener("click" ,()=>{
    console.log("btn click2")
});

const  handler2 =() =>{
    console.log("btn click3")

}

btn1.addEventListener("click" ,handler2)
btn1.removeEventListener("click" ,handler2);