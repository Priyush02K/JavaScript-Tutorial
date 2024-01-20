// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText +"learn";

//Q2\\
let divs =document.querySelectorAll(".box") ;

let idx=1;
for(div of divs){
div.innerText=`the new unique value ${idx}`;
idx++;
}
// divs[0].innerText ="The new value 1";
// divs[1].innerText ="The new value 2";
// divs[2].innerText ="The new value 3";

