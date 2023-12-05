//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.


let fullname=prompt("Entre your Full name without space:")

let username= "@" + fullname +fullname.length;
console.log(username);