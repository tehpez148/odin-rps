let playerScore = 0;
let compScore = 0;

const playerS = document.getElementById('playerS');
const compS = document.getElementById('compS');
const roundOut = document.getElementById('roundOut');

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
        (playerAns==="scissors" && compAns==="paper")||
        (playerAns === 'paper' && compAns === "rock")
        ){
            playerScore++;
            return "Player Wins!";
            
        }
}


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function() {
    (game('rock'));
});

paper.addEventListener('click', function() {
    (game('paper'));
});

scissors.addEventListener('click', function() {
    (game('scissors'));
});



function game (weapon){
    if (compScore != 5 && playerScore != 5){
        let compAns = getComputerChoice();
        let playerAns = weapon;

        roundOut.textContent = (playRound(compAns,playerAns));

        compS.textContent = (`Comp Score: ${compScore}`);
        playerS.textContent = (`Player Score: ${playerScore}`);
        if (compScore === 5 || playerScore ===5){
            results();

        }
        
        
    } else {
        location.reload();
    }
}

function results(){
    if (playerScore === 5){
        roundOut.textContent=("You did it! Pick a weapon to reset!");
    }
    else if (compScore === 5){
        roundOut.textContent=("All your base are belong to us! Pick a weapon to reset!");
    }

}

