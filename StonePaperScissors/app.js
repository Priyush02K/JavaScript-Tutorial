let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice =() =>{
    //rock,paper scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

  
const playGame =() =>{

}


choices.forEach((Choice)=>{
    
    Choice.addEventListener("Click", ()=>{
        console.log("choice was clicked");
    });
});