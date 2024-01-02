
// Game state variables
let gameScore = 0;
let matchesPlayed = 0;

// Utility functions
function getComputerChoice() {
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let playerSelectionCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelectionCase === "Rock" && computerSelection === "Rock") {
        //console.log("Tie! Let's play again!");
        gameResult.textContent = gameResult.textContent + `
        Tie! Let's play again!`;
        return playRound("Rock");
    } else if (playerSelectionCase === "Rock" && computerSelection === "Paper") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`;
        return 0;
    } else if (playerSelectionCase === "Rock" && computerSelection === "Scissors") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`;
        return 1;
    } else if (playerSelectionCase === "Paper" && computerSelection === "Rock") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`;
        return 1;
    } else if (playerSelectionCase === "Paper" && computerSelection === "Paper") {
        gameResult.textContent = gameResult.textContent + `
        Tie! Let's play again!`;
        return playRound("Paper");
    } else if (playerSelectionCase === "Paper" && computerSelection === "Scissors") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`;
        return 0;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Rock") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You lost!`;
        return 0;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Paper") {
        gameResult.textContent = gameResult.textContent + `
        Your choice was ${playerSelectionCase}. Computer choice was ${computerSelection}. You won!`;
        return 1;
    } else if (playerSelectionCase === "Scissors" && computerSelection === "Scissors") {
        gameResult.textContent = gameResult.textContent + `
        Tie! Let's play again!`;
        return playRound("Scissors");
    }
}

function updateGameScore() {
    showGameScore.textContent = `Score: You ${gameScore} vs ${matchesPlayed - gameScore} Computer`;
    if (gameScore >= 5 || matchesPlayed - gameScore >= 5) {
        let resultText = gameScore >= 5 ? "You won!" : "You lost!";
        gameResult.textContent = "";
        showGameScore.textContent = "";
        gameFinalResult.textContent = `Final Score: You ${gameScore} vs ${matchesPlayed - gameScore} Computer. ${resultText}`;
        divFinalResult.appendChild(gameFinalResult);
        divFinalResult.appendChild(btnResetGame);
        disableGameButtons(true);
    }
}

function disableGameButtons(disable) {
    btnSelectedRock.disabled = disable;
    btnSelectedPaper.disabled = disable;
    btnSelectedScissors.disabled = disable;
}

// DOM elements
const btnSelectedRock = document.querySelector("#Rock");
const btnSelectedPaper = document.querySelector("#Paper");
const btnSelectedScissors = document.querySelector("#Scissors");
const gameResult = document.querySelector("#gameResult");
const showGameScore = document.querySelector("#gameScore");
const divFinalResult = document.querySelector("#gameFinalResult");
const gameFinalResult = document.createElement("h3");
const btnResetGame = document.createElement('button');
btnResetGame.textContent = "Play new game!";

// Event listeners
btnSelectedRock.addEventListener('click', () => {
    gameScore += playRound(btnSelectedRock.id);
    matchesPlayed++;
    updateGameScore();
});

btnSelectedPaper.addEventListener('click', () => {
    gameScore += playRound(btnSelectedPaper.id);
    matchesPlayed++;
    updateGameScore();
});

btnSelectedScissors.addEventListener('click', () => {
    gameScore += playRound(btnSelectedScissors.id);
    matchesPlayed++;
    updateGameScore();
});

btnResetGame.addEventListener("click", () => {
    gameScore = 0;
    matchesPlayed = 0;
    showGameScore.textContent = '';
    gameResult.textContent = '';
    gameFinalResult.textContent = '';
    divFinalResult.removeChild(gameFinalResult);
    divFinalResult.removeChild(btnResetGame);
    disableGameButtons(false);
});


