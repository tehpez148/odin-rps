

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


let compAns = getComputerChoice();
let playerAns = prompt("Rock,Paper,Scissors?")

function playRound(compAns, playerAns){
    if (compAns === playerAns)
        {return("Tie");}
    else if 
        ((compAns ==="rock" && playerAns ==="scissors")||
        (compAns ==="paper" && playerAns === "rock")||
        (compAns ==="scissors" && playerAns ==="paper")) {return "Computer wins!"}
    else if
        ((playerAns==="rock" && compAns ==="scissors")||(playerAns==="paper" && compAns==="scissors")||(playerAns==="scissors"&&compAns==="paper")){
            return "Player wins!"
        }
}

console.log(playRound(compAns,playerAns));