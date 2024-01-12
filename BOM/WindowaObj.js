//javaScript BOM
//Example of alert() in javascript
function msg(){  
    alert("Hello Alert Box");  
   }  
     
//confirm()
function conf(){
    var v =confirm("are u sure?");
    if(v==true){
        alert("ok");
    }
    else{
        alert("cancel");
    }
}

//prompt
function prom(){
    let c=prompt("who are you?");
    alert("i am "+c);

}

//open
function side(){
    open("https://twitter.com/Priyush02");
}

//close
function openWin() {
    myWindow = window.open("https://twitter.com/Priyush02", "_blank", "width=200, height=100");
  }
  
  function closeWin() {
    myWindow.close();
  }

  //timeout
  function time(){
    setTimeout(() => {
        alert("time 2 Seconds");
    }, 2000);
  }