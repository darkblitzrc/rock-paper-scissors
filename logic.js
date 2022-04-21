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


function playRound(playerSelection = prompt('Please type: \'rock\', \'paper\' or \'scissors\'!'), computerSelection = computerPlay()){

    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    console.log('You drew... ' + player)
    console.log('Computer draws... ' + computer);
    if (player == 'scissors' && computer == 'rock'){
        console.log('You lost, rock beats scissors!...')
        return ++computer_score
    } else if (player == 'rock' && computer == 'paper'){
        console.log('You lost, paper beats rock...')
        return ++computer_score
    } else if (player == 'paper' && computer == 'scissors'){
        console.log('You lost, scissors beats paper...')
        return ++computer_score
    } else if (player == 'scissors' && computer == 'paper'){
        console.log('You won! Scissors beats paper.')
        return ++player_score
    } else if (player == 'rock' && computer == 'scissors'){
        console.log('You won! Rock beats scissors.')
        return ++player_score
    } else if (player == 'paper' && computer == 'rock'){
        console.log('You won! Paper beats rock.')
        return ++player_score
    } else if (player == 'scissors' && computer == 'scissors'){
        console.log('It\'s a tie!')
    } else if (player == 'rock' && computer == 'rock'){
        console.log('It\'s a tie!')
    } else if (player == 'paper' && computer == 'paper'){
        console.log('It\'s a tie!')
    } else {
        console.log('Invalid choice, please write either: rock, paper or scissors')
    }
}
let player_score = 0
let computer_score = 0

function game(){
    player_score = 0
    computer_score = 0
    rounds = parseInt(prompt('Please input the number of rounds you would like to play.'));
    for (let i = 0; i < rounds; i++){
        playRound();
    }
    if (player_score > computer_score){
        return 'You won! Your score was: ' + player_score;
    } else if (computer_score > player_score){
        return 'You lost your score was ' + player_score + ' but the computer score was ' + computer_score;
    } else{
        return 'It\'s a tie between you and the computer, Final Score: Player ' + player_score + ', Computer ' + computer_score;
    }
}
