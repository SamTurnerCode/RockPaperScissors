// The user will choose either rock, paper, or scissors
function getPlayerChoice() {
    let playerChoice = prompt("Choose Scissors, Paper, Rock").toLowerCase()
    if (playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper") {
        return playerChoice
    } else {
        playerChoice = "error"
        return playerChoice
    }
    
}
// The computer will randomly choose rock, paper, or scissors
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice = ""
    if (randomInt == 0) {
        computerChoice= "rock"
    } else if (randomInt == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    let result = ""
// If the player choses rock and the computer chose paper - they lose
    if (playerChoice == "rock" && computerChoice == "paper") {
        result = "lose"
    } 
// If the player choses paper and the computer chose scissors - they lose
    else if (playerChoice == "paper" && computerChoice == "scissor"){
        result = "lose"
    }
// If the player choses scissors and the computer chose rock - they lose
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        result = "lose"
    }
// If the player choses the same option as the computer - they tie
    else if (playerChoice == computerChoice) {
        result = "tie"
    }
// Else the player wins
    else {
        result = "win"
    }
// The program should tell the user if they won, lost or tied
    return result
}
// The user can then play a best of five
function game() {
    let playerPoint = 0;
    let computerPoint = 0;
    gameWon = false;
    winner = "none"

    while (gameWon == false) {
        const computerChoice = getComputerChoice()
        const playerChoice = getPlayerChoice()
        if (playerChoice == "error") {
            console.log("Mmm that didn't look right, try again")
            continue
        }
        
        roundResult = playRound(playerChoice,computerChoice)

        if (roundResult == "win") {
            playerPoint += 1;
            console.log("You won the round, congrats!")
        } else if (roundResult == "lose") {
            computerPoint += 1;
            console.log("You lost to a computer?")
        } else {
            console.log("It's a tie!")
        }

        console.log("player points:" + playerPoint)
        console.log("computer points:" + computerPoint)

        if (playerPoint >= 5) {
            winner = "Player"
            gameWon = true;
        } else if (computerPoint >= 5) {
            winner = "Computer"
            gameWon = true;
        } 
    } 

    return winner
}
winner = game()
console.log(winner)

