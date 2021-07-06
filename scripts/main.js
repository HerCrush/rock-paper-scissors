let playerScore = 0;
let computerScore = 0;
let i = 1;

const scoreContainer = document.querySelector('#score_container');
const container = document.querySelector('#container');

const round = document.createElement('p');
scoreContainer.appendChild(round);

const results = document.createElement('p');
container.appendChild(results);

const gameOver = document.createElement('p');
container.appendChild(gameOver);

const score = document.createElement('p');
container.appendChild(score);

function computerPlay() {
    let random3 = Math.floor(Math.random()*3)+1;
    switch (random3){
        case 1: return "rock";
        break;
        case 2: return "paper";
        break;
        case 3: return "scissors";
        break;
    }
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection==="rock" && computerSelection==="paper" 
    || playerSelection==="paper" && computerSelection==="scissors" 
    || playerSelection==="scissors" && computerSelection==="rock"){
        return 'lose';
    }
    else if(playerSelection===computerSelection){
        return 'draw';
    }
    else{
        return 'win';
    }
}

function game(player) {
    gameOver.textContent = '';
    round.textContent = `Round ${i}`;
    console.log(`Round ${i}`);
    let pc = computerPlay();
    switch (playRound(player,pc)){
        case 'win':
            results.textContent = `You win! Computer chose ${pc}.`;
            console.log(`You win! Computer chose ${pc}.`);
            playerScore++;
            break;
        case 'lose':
            results.textContent = `You lose! ${pc} beats ${player}`;
            console.log(`You lose! ${pc} beats ${player}`);
            computerScore++;
            break;
        case 'draw':
            results.textContent = "It's a draw!";
            console.log("It's a draw!");
            break;
    }
    i++;
    score.textContent = `Score: ${playerScore}:${computerScore}`
    console.log(`Score: ${playerScore}:${computerScore}`);
    switch (3){
        case playerScore:
            gameOver.textContent = "Congratulations! You won the game!";
            console.log("Congratulations! You won the game!");
            playerScore=0;
            computerScore=0;
            i=1;
            return;
        case computerScore:
            gameOver.textContent = "Oh no... You lost the game.";
            console.log("Oh no... You lost the game.");
            playerScore=0;
            computerScore=0;
            i=1;
            return;
    }
}

const btns = document.querySelectorAll('.sel');
btns.forEach( btn => btn.addEventListener('click', () => game(btn.id) ) );