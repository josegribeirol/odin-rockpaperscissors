function getComputerChoice() {
    const gameOptions = ["Rock", "Paper", "Scissors"]
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let playerSelectionCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelectionCase === "Rock" && computerSelection === "Rock") {
        console.log("Tie! Let's play again!");
        return playRound("Rock");
    } else if (playerSelectionCase === "Rock" && computerSelection === "Paper") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`);
        return 0;
    } else if (playerSelectionCase === "Rock" && computerSelection === "Scissors") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`);
        return 1;
    } else if (playerSelectionCase === "Paper" && computerSelection === "Rock") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`);
        return 1;
    } else if (playerSelectionCase === "Paper" && computerSelection === "Paper") {
        console.log("Tie! Let's play again!");
        return playRound("Paper");
    } else if (playerSelectionCase === "Paper" && computerSelection === "Scissors") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`);
        return 0;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Rock") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`);
        return 0;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Paper") {
        console.log(`Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`);
        return 1;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Scissors") {
        console.log("Tie! Let's play again!");
        return playRound("Scissors");
    }
}

function game() {
    let gameScore = 0;
    for (let i = 1; i <= 5; i++) {
        gameScore = gameScore + playRound(prompt())
    }

    if (gameScore < 3) {return `Final Score: You ${gameScore} vs ${5 - gameScore} Computer. You lost!`}
    else {return `Final Score: You ${gameScore} vs ${5 - gameScore} Computer. You won!`}
}