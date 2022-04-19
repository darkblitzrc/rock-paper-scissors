function computerPlay(){
    let decider = Math.floor(Math.random() * 3);
    let rock = 0
    let scissors = 1
    let paper = 2
    if (decider == 0){
        return 'rock'
    } else if (decider == 1){
        return 'scissors'
    } else {
        return 'paper'
    }
}


function playRound(playerSelection = prompt(), computerSelection = computerPlay()){

    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    console.log('Computer draws... ' + computer);
    console.log('You drew... ' + player)
    if (player == 'scissors' && computer == 'rock'){
        return 'You lost, rock beats scissors!...'
    } else if (player == 'rock' && computer == 'paper'){
        return 'You lost, paper beats rock...'
    } else if (player == 'paper' && computer == 'scissors'){
        return 'You lost, scissors beats paper...'
    } else if (player == 'scissors' && computer == 'paper'){
        return 'You won! Scissors beats paper.'
    } else if (player == 'rock' && computer == 'scissors'){
        return 'You won! Rock beats scissors.'
    } else if (player == 'paper' && computer == 'rock'){
        return 'You won! Paper beats rock.'
    } else if (player == 'scissors' && computer == 'scissors'){
        return 'It\'s a tie!'
    } else if (player == 'rock' && computer == 'rock'){
        return 'It\'s a tie!'
    } else if (player == 'paper' && computer == 'paper'){
        return 'It\'s a tie!'
    } else {
        return 'Invalid choice, please write either: rock, paper or scissors'
    }
}