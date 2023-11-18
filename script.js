function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];  
    const pick = Math.floor(Math.random()*rps.length); 
    return rps[pick]; 
}

