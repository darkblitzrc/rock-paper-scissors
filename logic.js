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

//DOM methods

let currentRound = document.querySelector('.current-round');

let pScore = document.querySelector('.player-score');

let cDraw = document.querySelector('.computer-draw')

let roundResult = document.querySelector('.round-result');

let buttons = document.getElementsByClassName('button');

let buttonsList = Array.from(buttons);

let test = document.querySelector('.rock')

test.addEventListener('click', () =>{
    type = 'rock'
    playRound(type,computerPlay());
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

let round = 0

// buttonsList.forEach(button =>{
//     button.addEventListener('click', (e)=>{
//         playRound(e.target.innerText.toLowerCase(),computerPlay());
//         pScore.textContent = 'Your score is: ' + player_score;
//         currentRound.textContent = 'Round ' + ++round;
//         cDraw.textContent = computerDraw;
//         roundResult.textContent = result;
//         if (round == 5){
//             cDraw.textContent = computerDraw;
//             if (player_score > computer_score){
//                 roundResult.textContent = 'YOU WON THE GAME! Your score was: ' + player_score;
//             } else if (computer_score > player_score){
//                 roundResult.textContent = 'YOU LOST THE GAME! Computer Score was: ' + computer_score;
//             } else{
//                 roundResult.textContent =  'It\'s a tie between you and the computer!'
//             }
//             player_score = 0
//             computer_score = 0
//             round = 0  
//         }
//     });
// });
