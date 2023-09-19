let winner = ["tie", "player", "computer"]
let scoreArr = [0,0]


const choicePara = document.querySelector('#choice')
const scorePara = document.querySelector('#score')
const winnerPara = document.querySelector('#winner')

const controls = document.querySelectorAll('button');
controls.forEach(control => control.addEventListener('click',playRound))


function getComputerChoice() {
    possibleChoices = ["Rock", "Paper", "Scissors"];
    return possibleChoices[Math.floor(Math.random()*3)];
}


function playRound(btn) {
    if(scoreArr[0] == 5 || scoreArr[1] == 5) {
        winnerPara.textContent = "";
        scoreArr = [0,0]
    }

    let computerChoice = getComputerChoice().toLowerCase();
    playerChoice = this.getAttribute("id");

    roundWinner = findWinner(computerChoice,playerChoice);
    calcScore(roundWinner);

    choicePara.textContent = `You picked ${playerChoice}, the computer picked ${computerChoice}.\n `
    scorePara.textContent = `You ${scoreArr[0]} : ${scoreArr[1]} Computer`
    
    if(scoreArr[0] == 5 || scoreArr[1] == 5) {
        if (roundWinner == winner[0]) {
            winnerPara.textContent = "Tie!"
        } else if (roundWinner == winner[1]) {
            winnerPara.textContent = "You won! :)"
        } else {
            winnerPara.textContent = "You lost :("
        }

    }
}


function findWinner(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return winner[0]
    } else if ((playerChoice == "rock" && computerChoice == "scissors") ||
                (playerChoice == "scissors" && computerChoice == "paper") ||
                (playerChoice == "paper" && computerChoice == "rock")) {
        return winner[1]
    } else {
        return winner[2]
    }
}


function calcScore(roundWinner) {
    switch (roundWinner) {
        case winner[1]:
            scoreArr[0]++;
            break;
        case winner[2]:
            scoreArr[1]++;
            break;
    }
    
}



