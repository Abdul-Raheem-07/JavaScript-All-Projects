// Rock-Paper-Scissor with scoring system

const choices = ["Rock", "Paper", "Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

let score = 0; // ✅ Track player score

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = `Both chose ${playerChoice}. It's a tie!`;
        // no score change
    } else {
        switch (playerChoice) {
            case "Rock":
                if (computerChoice === "Scissor") {
                    result = "Rock smashes Scissor. You win!";
                    score += 2;
                } else {
                    result = "Paper covers Rock. You lose!";
                    score -= 1;
                }
                break;

            case "Paper":
                if (computerChoice === "Rock") {
                    result = "Paper covers Rock. You win!";
                    score += 2;
                } else {
                    result = "Scissor cuts Paper. You lose!";
                    score -= 1;
                }
                break;

            case "Scissor":
                if (computerChoice === "Paper") {
                    result = "Scissor cuts Paper. You win!";
                    score += 2;
                } else {
                    result = "Rock smashes Scissor. You lose!";
                    score -= 1;
                }
                break;
        }
    }

    // Update displays
    playerDisplay.textContent = `Player: ${playerChoice}`;
    compDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Score: ${score}`;

    // Reset classes
    resultDisplay.classList.remove("greentext", "redtext");

    // Apply win/lose color
    if (result.includes("You win")) {
        resultDisplay.classList.add("greentext");
    } else if (result.includes("You lose")) {
        resultDisplay.classList.add("redtext");
    }
}
