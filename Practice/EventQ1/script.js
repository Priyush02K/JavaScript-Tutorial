let modeBtn =document.querySelector("#mode");
let body=document.querySelector("body")

let currMode= "light";

modeBtn.addEventListener("click",()=>{
if(currMode === "light"){
    currMode ="dark";
    body.classList ="dark";
    body.classList.remove("light")
    }else{
        currMode="light";
        body.classList ="light";
        body.classList.remove("dark")


    }
    console.log(currMode);
});