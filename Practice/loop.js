//print 1 to 100 even number

//Q 1
for( let num =0; num<=100;num++ ){
    console.log("num =",num);

    if (num % 2 == 0) {
        console.log("num" ,num);
    }
}

// create number guessing number
//Q 2

let gamenum =25;

let usernum = prompt ("Guess the game number :");
console.log(usernum);

while(usernum != gamenum){

    usernum =prompt("You Entered wrong number ,guess again");
}

console.log("congratulation , you entered  right number ");
