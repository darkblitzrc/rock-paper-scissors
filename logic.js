function computerPlay(){
    let decider = Math.floor(Math.random() * 3);
    if (decider == 0){
        return 'rock'
    } else if (decider == 1){
        return 'scissors'
    } else {
        return 'paper'
    }
}


function playRound(playerSelection, computerSelection){
    playerDraw = 'You drew... ' + playerSelection
    computerDraw = 'Computer draws... ' + computerSelection
    if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper'){
        console.log('Invalid choice, please write either: rock, paper or scissors')
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        result = 'You lost this round, rock beats scissors...'
        return computer_score++
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        result = 'You lost this round, paper beats rock...'
        return computer_score++
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        result = 'You lost this round, scissors beats paper...'
        return computer_score++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'You won this round! Scissors beats paper.'
        return player_score++
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You won this round! Rock beats scissors.'
        return player_score++
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You won this round! Paper beats rock.'
        return player_score++
    } else {
        result = 'It\'s a tie!'
    }
}
let player_score = 0
let computer_score = 0

//DOM methods

let currentRound = document.querySelector('.current-round');

let pScore = document.querySelector('.player-score');

let cDraw = document.querySelector('.computer-draw')

let roundResult = document.querySelector('.round-result');

let choices = document.getElementsByClassName('choice');

let choicesList = Array.from(choices)

let round = 0

choicesList.forEach(choice => {
    choice.addEventListener('click', (e) =>{
        playRound(e.target.id,computerPlay());
            pScore.textContent = 'Your score is: ' + player_score;
            currentRound.textContent = 'Round ' + ++round;

            cDraw.textContent = computerDraw;
            roundResult.textContent = result;
            if (round == 5){
                cDraw.textContent = computerDraw;
                if (player_score > computer_score){
                    roundResult.textContent = 'YOU WON THE GAME! Your score was: ' + player_score;
                } else if (computer_score > player_score){
                    roundResult.textContent = 'YOU LOST THE GAME! Computer Score was: ' + computer_score;
                } else{
                    roundResult.textContent =  'It\'s a tie between you and the computer!'
                }
                player_score = 0
                computer_score = 0
                round = 0  
            }
        
    })
})
