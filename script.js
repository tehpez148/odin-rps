

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

console.log(getComputerChoice());
