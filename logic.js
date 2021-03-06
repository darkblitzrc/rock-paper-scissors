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
    computerDraw = computerSelection;
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

let cScore = document.querySelector('.computer-score');

let cDraw = document.querySelector('.computer-draw')

let roundResult = document.querySelector('.round-result');

let computerImage = document.querySelector('.computer-image');
computerImage.style.display = 'flex';
computerImage.style.justifyContent = 'center';

let rock = document.createElement('img');
rock.src = './images/harvestable-resources-rock-dullite-2.svg';
rock.height = '100'
rock.width = '100'

let scissors = document.createElement('img');
scissors.src = './images/Metal-Scissors.svg';
scissors.height = '100'
scissors.width = '100'

let paper = document.createElement('img');
paper.src = './images/Paper-Roll-.svg';
paper.height = '100'
paper.width = '100'

let choices = document.getElementsByClassName('choice');

let choicesList = Array.from(choices);

let round = 0

choicesList.forEach(choice => {
    choice.addEventListener('click', (e) =>{
        playRound(e.target.id,computerPlay());
            pScore.textContent = 'Your score is: \r\n' + player_score;
            cScore.textContent = 'Computer score is: \r\n' + computer_score;
            currentRound.textContent = 'Round ' + ++round;
            cDraw.textContent = 'Computer draws...'
            if (computerDraw == 'rock'){
                computerImage.appendChild(rock);
                paper.remove();
                scissors.remove();
            } else if (computerDraw == 'scissors'){
                computerImage.appendChild(scissors);
                paper.remove();
                rock.remove();
            } else{
                computerImage.appendChild(paper);
                rock.remove();
                scissors.remove();
            }
            roundResult.textContent = result;

            if (player_score == 5 || computer_score == 5){
                if (player_score == 5){
                    roundResult.textContent = 'YOU WON THE GAME! Good job!'
                } else {
                    roundResult.textContent = 'YOU LOST THE GAME, better luck next time!'
                }
                player_score = 0
                computer_score = 0
                round = 0  
            }
    })
})

