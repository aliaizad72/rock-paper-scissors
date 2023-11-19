const gameButton = document.querySelector('#game-button');
let round = 1;
let userWin = 0;
let computerWin = 0;

gameButton.addEventListener('click', startGame);

function startGame(event) {
    initiatePage(event)
    addButtonListeners();
    createScoreboard();
    createResults();
}

function initiatePage(event) {
    deleteNode(event);
    createButtons();
}

function addButtonListeners() {
    const selections = document.querySelectorAll('.selection');
    selections.forEach((selection) => {
        selection.addEventListener('click', playGame);
    })
    document.querySelector('#restart-button').addEventListener('click',() => location.reload());
}

function deleteNode(event) {
    event.target.remove();
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

function createScoreboard() {
    const scoreboard = document.querySelector('#scoreboard');
    scoreboard.textContent = `${userWin}  -  ${computerWin}`;
}

function createResults() {
    const results = document.querySelector('#results')
    results.textContent = `Rock, paper or scissors?`;
}

function playGame(event) {
    if (userWin < 2 && computerWin < 2) {
        let playerChoice = event.target.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        evalWinner(playerChoice, computerChoice);
    } else {
        console.log('Press restart!')
    }
}

function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];  
    const pick = Math.floor(Math.random()*rps.length); 
    return rps[pick]; 
}

function evalWinner (client, computer) {
    if (client === computer) {
        console.log(`Draw. Computer also chooses ${client}.`)
    } else {
        if ((client === 'rock' && computer === 'paper') ||
            (client === 'paper' && computer === 'scissors') ||
            (client === 'scissors' && computer === 'rock')) {
                computerWin += 1
                console.log(`You lose because ${computer} beats ${client}`);
            }
        else if ((client === 'rock' && computer === 'scissors') ||
                 (client === 'paper' && computer === 'rock') ||
                 (client === 'scissors' && computer === 'paper')) {
                    userWin += 1
                    console.log(`You won because ${client} beats ${computer}`)
                 }
    }
}



