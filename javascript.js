winner = ["tie", "player", "computer"]

function getComputerChoice() {
    possibleChoices = ["Rock", "Paper", "Scissors"];
    return possibleChoices[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());

function playRound(computerChoice, playerChoice) {
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();

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

function game() { // play five rounds 
    let scoreArr = [0,0] // first slot: player; second slot: computer


    for(i=0;i<5;i++) {
        const playerChoice = window.prompt("Pick rock, paper or scissors","");
        const roundWinner = playRound(getComputerChoice(),playerChoice);
        scoreArr = calcScore(roundWinner,scoreArr);
        console.log(`Player score: ${scoreArr[0]} - computer score ${scoreArr[1]}`);
    }

    if (scoreArr[0] > scoreArr[1]) {
        console.log("You won!")
    } else if (scoreArr[1] > scoreArr[0]) {
        console.log("You lost!")
    } else {
        console.log("Tie!")
    }

}

function calcScore(roundWinner, scoreArr) {
    switch (roundWinner) {
        case winner[0]:
            scoreArr[0]++;
            scoreArr[1]++;
            break;
        case winner[1]:
            scoreArr[0];
            break;
        case winner[2]:
            scoreArr[1]++;
            break;
    }
    return scoreArr;
}

game();

