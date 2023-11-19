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

function createDivs() {
    const buttonDiv = document.querySelector('#button-container');
    const rock = document.createElement('button');
    buttonDiv.appendChild(rock);
}


function startGame() {
    deleteNode();
    createDivs();
}