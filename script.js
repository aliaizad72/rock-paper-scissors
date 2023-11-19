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

function createButtons() {
    const buttonDiv = document.querySelector('#button-container');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    rock.setAttribute('class', 'selection');
    paper.setAttribute('class', 'selection');
    scissors.setAttribute('class', 'selection');
    rock.textContent = 'ROCK';
    paper.textContent = 'PAPER';
    scissors.textContent = 'SCISSORS';

    buttonDiv.appendChild(rock);
    buttonDiv.appendChild(paper);
    buttonDiv.appendChild(scissors);

    const restartDiv = document.querySelector('#restart-div');
    const restart = document.createElement('button');
    restart.setAttribute('id', 'restart-button')
    restart.textContent = 'RESTART'
    restartDiv.appendChild(restart);
}




function startGame() {
    deleteNode();
    createButtons();
    document.querySelector('#restart-button').addEventListener('click',() => location.reload());
}