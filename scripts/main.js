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
    playerSelection = playerSelection.toLowerCase();
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

function playerPlay(){
    let ans=prompt('Choose rock,paper or scissors').toLowerCase();
    while(ans!=='rock'&&ans!=='paper'&&ans!=='scissors'){
        ans=prompt('Enter a valid answer sucko').toLowerCase();
    }
    return ans;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=1;i>0;i++){
        console.log(`Round ${i}`);
        let pc=computerPlay();
        let player=playerPlay();
        switch (playRound(player,pc)){
            case 'win':
                console.log(`You win! Computer chose ${pc}.`);
                playerScore++;
                break;
            case 'lose':
                console.log(`You lose! ${pc} beats ${player}`);
                computerScore++;
                break;
            case 'draw':
                console.log("It's a draw!");
                break;
        }
        console.log(`Score: ${playerScore}:${computerScore}`);
        switch (3){
            case playerScore:
                console.log("Congratulations! You won the game!");
                return;
            case computerScore:
                console.log('Oh no... You lost the game.');
                return;
        }

    }
}

game();