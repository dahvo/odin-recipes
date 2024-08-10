function getComputerChoice() {
    let randomNumber = Math.random();
    let choice;
    if (randomNumber >= .66) {
        choice = "scissors";
    } else if (randomNumber >= .33) {
        choice = "paper";
    } else {
        choice = "rock";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("What is your choice? (rock, paper, scissors)");
    //console.log(choice, " entered");
    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
        choice = prompt("Please try again, what is your choice? (rock, paper, scissors)");
    }
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = 0;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                result = -1;
            } else if (computerChoice === "scissors") {
                result = 1;
            } else {
                result = 0;
            }
            //return result;
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = 1;
            } else if (computerChoice === "scissors") {
                result = -1;
            } else {
                result = 0;
            }
            //return result;
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = -1;
            } else if (computerChoice === "paper") {
                result = 1;
            } else {
                result = 0;
            }
            //return result;
            break;
    }
    if (result === -1) {
        console.log("You lose!", computerChoice, "beats", humanChoice, "!")
    } else if (result === 1) {
        console.log("You win!, ", humanChoice, "beats", computerChoice, "!")
    } else {
        console.log("You both picked", humanChoice, "and", computerChoice)
    }
    return result;


}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result === -1) {
            computerScore++
        } else if (result === 1) {
            humanScore++
        }
    }
}

playGame()
console.log("Your score is", humanScore, "to", computerScore)