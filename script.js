function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];  
    const pick = Math.floor(Math.random()*rps.length); 
    return rps[pick]; 
}

//Write a function that plays a game of rock, paper, scissors
function getPlayerChoice () {
    const choice = prompt("Rock, paper or scissors?").toLowerCase(); 
    return choice
}

//A function to evaluate the winner
function evalWinner (client, computer) {
    if (client === computer) {
        alert(`Draw. Computer also chooses ${client}.`)
    } else {
        if ((client === 'rock' && computer === 'paper') ||
            (client === 'paper' && computer === 'scissors') ||
            (client === 'scissors' && computer === 'rock')) {
                alert(`You lose because ${computer} beats ${client}`);
            }
        else if ((client === 'rock' && computer === 'scissors') ||
                 (client === 'paper' && computer === 'rock') ||
                 (client === 'scissors' && computer === 'paper')) {
                    alert(`You won because ${client} beats ${computer}`)
                 }
        else {
            alert("Please check your spelling. Especially the spelling of scissors");
        }
    }
}

function playRound () {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    evalWinner(playerSelection, computerSelection);
}

function game() {
   
}