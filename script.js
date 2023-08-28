let playerScore = 0;
let compScore = 0;


function getComputerChoice(){
    let randomNo = Math.floor(Math.random() *3);
    switch(randomNo){
        case 0:
            return "rock"
        case 1:
            return "scissors"
        case 2:
            return "paper"
    }
}




function playRound(compAns, playerAns){
    if (compAns === playerAns)
        {return("Tie");}
    else if 
        ((compAns ==="rock" && playerAns ==="scissors")||
        (compAns ==="paper" && playerAns === "rock")||
        (compAns ==="scissors" && playerAns ==="paper")) {
            compScore++;
            return "Computer wins!";}
    else if
        ((playerAns==="rock" && compAns ==="scissors")||
        (playerAns==="paper" && compAns==="scissors")||
        (playerAns==="scissors"&&compAns==="paper")){
            playerScore++;
            return "Player Wins!";
            
        }
}

/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
        button.addEventListener('click', () =>{console.log(button.id);
        });
    });
// works as expected, logs either "rock", "paper" or "scissor" as pressed.
*/

 function getPlayerChoice() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{return(button.id);
        });
    });
 }; 
 console.log(getPlayerChoice());
 // logs undefined




/*
function game (){
    while (compScore != 5 && playerScore != 5){
        let compAns = getComputerChoice();
        let playerAns = buttonPressed;

       
        console.log(playRound(compAns,playerAns));
        console.log(`Scores are, Computer:${compScore} Player:${playerScore}`);
    }
    results();
}


function results(){
    if (playerScore ===5){
        alert("You did it!");
    }
    else if (compScore === 5){
        alert("All your base are belong to us");
    }

}

game();
*/
