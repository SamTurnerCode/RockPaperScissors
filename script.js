let playerScore = 0;
let computerScore = 0;
let gameFinished = false;

// QUERY SELECTORS

let rockButton = document.querySelector("#rock")
let paperButton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")
let resultSpan = document.querySelector("#result")
let playerSpan = document.querySelector("#playerScore")
let computerSpan = document.querySelector ("#computerScore")

// FUNCTIONS
function getComputerChoice () {
    let computerChoice
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 0) {
        computerChoice = "rock";
    } else if (randomInt == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}

function playRound(playerChoice){
    let computerChoice  = getComputerChoice()
    let result
    if(playerScore >= 5){
        resultSpan.textContent = "Game Finished! Player win"
    } else if (computerScore >= 5) {
        resultSpan.textContent = "Game Finished! Computer win"
    }
    
    else {
        if (
            playerChoice == "rock" && computerChoice == "paper" ||
            playerChoice == "scissors" && computerChoice == "rock" ||
            playerChoice == "paper" && computerChoice == "scissors"){
                result = "loss";
                computerScore++;
                computerSpan.textContent = computerScore
                
        } else if (
            playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "scissors" && computerChoice == "paper" ||
            playerChoice == "paper" && computerChoice == "rock"){
                result = "win";
                playerScore++;
                playerSpan.textContent = playerScore
                
        } else {
                result = "tie"
        } 
        resultSpan.textContent = result
    }
    
}

function playGame() {
    rockButton.addEventListener('click', () => {
        playRound("rock")   
    })
    paperButton.addEventListener('click', () => {
        playRound("paper")
    })
    scissorsButton.addEventListener('click', () => {
        playRound("scissors")
    }) 
}

playGame()

