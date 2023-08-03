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


function game (){
    while (compScore != 5 && playerScore != 5){
        let compAns = getComputerChoice();
        let playerAns = prompt("Rock,Paper,Scissors?").toLowerCase();

       
        console.log(playRound(compAns,playerAns));
        console.log(`Scores are, Computer:${compScore} Player:${playerScore}`);
    }
    results();
}

function results(){
    if (playerScore ===5){
        console.log("You did it!");
    }
    else if (compScore === 5){
        console.log("All your base are belong to us");
    }

}

game();

