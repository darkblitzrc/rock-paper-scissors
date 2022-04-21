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
    console.log('You drew... ' + playerSelection)
    console.log('Computer draws... ' + computerSelection);
    if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper'){
        console.log('Invalid choice, please write either: rock, paper or scissors')
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log('You lost, rock beats scissors!...')
        return ++computer_score
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('You lost, paper beats rock...')
        return ++computer_score
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('You lost, scissors beats paper...')
        return ++computer_score
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('You won! Scissors beats paper.')
        return ++player_score
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log('You won! Rock beats scissors.')
        return ++player_score
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log('You won! Paper beats rock.')
        return ++player_score
    } else {
        console.log('It\'s a tie!')
    }
}
let player_score = 0
let computer_score = 0

function game(){
    player_score = 0
    computer_score = 0
    rounds = parseInt(prompt('Please input the number of rounds you would like to play.'));
    for (let i = 0; i < rounds; i++){
        playerSelection = prompt('Please type: \'Rock\', \'Paper\', \'Scissors\' to play!').toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (player_score > computer_score){
        return 'You won! Your score was: ' + player_score;
    } else if (computer_score > player_score){
        return 'You lost your score was ' + player_score + ' but the computer score was ' + computer_score;
    } else{
        return 'It\'s a tie between you and the computer, Final Score: Player ' + player_score + ', Computer ' + computer_score;
    }
}
