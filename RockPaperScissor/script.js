console.log("Hello World");

let human = document.querySelector("#humanScore");
let computer = document.querySelector("#computerScore");

function getComputerChoice() {
    let max = 3;
    let min = 0;
    return Math.trunc(Math.random() * (max - min) + min + 1);
}

function getHumanChoice() {
    let word = prompt(`Enter your choice in lowercase letters: "rock", "paper", or "scissor"`)

    switch(word){
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "scissor":
            return 3;
            break;
        default:
            return -1;
    }
}

function updateScoreboard(humanScore, computerScore) {
    human.textContent = `Human: ${humanScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "fair";
    }

    if (humanChoice === 3 && computerChoice === 1) {
        return "computer";
    }

    if (humanChoice === 1 && computerChoice === 3) {
        return "human";
    }

    if (humanChoice > computerChoice) {
        return "human";
    }

    return "computer";
}

function main() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let result;

    let currentRound = 0;
    const MAX_ROUND = 5;

    do {
        currentRound++;

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        if (result === "fair") {
            continue;
        } else if (result === "human") {
            humanScore++; 
        } else if (result === "computer") {
            computerScore++;
        }

        updateScoreboard(humanScore, computerScore);
    } while (currentRound < MAX_ROUND);
}

main();