// function getComputerChoice () {
//     const rps = ["rock", "paper", "scissors"];  
//     const pick = Math.floor(Math.random()*rps.length); 
//     return rps[pick]; 
// }

const gameButton = document.querySelector('#game-button');

gameButton.addEventListener('click', startGame);

function deleteNode() {
    gameButton.remove();
}

function createSelections() {
    const buttonDiv = document.querySelector('#button-container');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    rock.textContent = 'ROCK';
    paper.textContent = 'PAPER';
    scissors.textContent = 'SCISSORS';

    buttonDiv.appendChild(rock);
    buttonDiv.appendChild(paper);
    buttonDiv.appendChild(scissors);
}


function startGame() {
    deleteNode();
    createSelections();
}