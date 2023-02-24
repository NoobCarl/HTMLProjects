let wins;
let i;
function findChoice(number){
    if(number == 1) return "Rock";
    else if(number == 2) return "Paper";
    else return "Scissor";
}
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
function getPlayerChoice(){
    let humanChoice =  prompt("Choose your weapon: ");
    if(humanChoice == "Rock"){
        return 1;
    }else if(humanChoice == "Paper"){
        return 2;
    }else{
        return 3;
    }
}
function playRound(playerSelection, computerSelection){
    let playerChoice = findChoice(playerSelection);
    let aiChoice = findChoice(computerSelection);
    if(computerSelection > playerSelection){
        console.log("Computer beat player. " + aiChoice + " beat " + playerChoice);
        wins++;
    }else if(computerSelection < playerSelection){
        console.log("Player beat computer. " + playerChoice + " beat " + aiChoice);
    }else{
        console.log("Both player and computer choose " + playerChoice);
        i--;
    }
}
function game(){
    wins = 0
    i = 0;
    for(i = 0; i < 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
    let lost = 5 - wins;
    console.log("Player won: " + wins + " Computer won: " + lost);
    return 0;
}