function getComputerChoice() {
    const randomNumber = Math.random();
    let choice;
    if (randomNumber >= (2/3)) {
        choice = "scissors";
    } else if (randomNumber >= (1/3)) {
        choice = "paper";
    } else {
        choice = "rock";
    }
    return choice;
}

function getHumanChoice() {
    // Create a new button element
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    const paper = document.createElement('button');
    paper.textContent = 'Paper'
    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors'

    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissors.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissors);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { rock: 0, paper: -1, scissors: 1 },
        paper: { rock: 1, paper: 0, scissors: -1 },
        scissors: { rock: -1, paper: 1, scissors: 0 },
    };

    const result = outcomes[humanChoice][computerChoice];
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

    if (result === -1) {
        resultsDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    } else if (result === 1) {
        resultsDiv.innerText = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        resultsDiv.innerText = `You both picked ${humanChoice} and ${computerChoice}`;
    }

    if(humanScore > computerScore){
        scoreDiv.innerText = `You are winning! ${humanScore} to ${computerScore}`;
    }else if(humanScore < computerScore){
        scoreDiv.innerText = `You are Losing! ${humanScore} to ${computerScore}`;
    }else {
        scoreDiv.innerText = `You are Tied! ${humanScore} to ${computerScore}`;
    }
    return result;

}


getHumanChoice()
