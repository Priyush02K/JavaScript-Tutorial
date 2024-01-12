function loc(){
    location.assign("https://www.w3schools.com");
}

let host = location.host;
document.getElementById("demo").innerHTML = host;

let hostname = location.hostname;
document.getElementById("demo").innerHTML = hostname;

//herf
function link(){
    location.href="https://www.w3schools.com";
}