const gameButton = document.querySelector('#game-button');

gameButton.addEventListener('click', startGame);

function deleteNode(event) {
    event.target.remove();
}

function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];  
    const pick = Math.floor(Math.random()*rps.length); 
    return rps[pick]; 
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


function startGame(event) {
    deleteNode(event);
    createButtons();
    document.querySelector('#restart-button').addEventListener('click',() => location.reload());

    const selections = document.querySelectorAll('.selection');
    selections.forEach((selection) => {
        selection.addEventListener('click', playOneGame);
    })
}

function evalWinner (client, computer) {
    if (client === computer) {
        console.log(`Draw. Computer also chooses ${client}.`)
    } else {
        if ((client === 'rock' && computer === 'paper') ||
            (client === 'paper' && computer === 'scissors') ||
            (client === 'scissors' && computer === 'rock')) {
                console.log(`You lose because ${computer} beats ${client}`);
            }
        else if ((client === 'rock' && computer === 'scissors') ||
                 (client === 'paper' && computer === 'rock') ||
                 (client === 'scissors' && computer === 'paper')) {
                    console.log(`You won because ${client} beats ${computer}`)
                 }
    }
}

function playOneGame(event) {
    let playerChoice = event.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    evalWinner(playerChoice, computerChoice);
}