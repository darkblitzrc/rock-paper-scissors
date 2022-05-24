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

let divMain = document.createElement('div');
divMain.className = 'main-menu';
divMain.style.padding = '1rem'
divMain.style.height = '25rem';
divMain.style.width = '25rem';
divMain.style.background = '#14C38E';
divMain.style.borderRadius = '8px';
divMain.style.display = 'flex';
divMain.style.alignItems = 'center';
divMain.style.justifyContent = 'center';
divMain.style.flexDirection = 'column';

let divResults = document.createElement('div');
divResults.className = 'results';
divResults.style.display = 'flex';
divResults.style.flexDirection = 'column';
divResults.style.justifyContent = 'center';
divResults.style.margin = '2rem';
divResults.style.height = '12rem';
divResults.style.width = '30rem';
divResults.style.background = '#B8F1B0';
divResults.style.borderRadius = '8px';

let body = document.querySelector('body');
body.appendChild(divMain);
body.appendChild(divResults);
body.style.background = '#00FFAB';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.minHeight = '100vh';
body.style.alignItems = 'center';

let choiceText = document.createElement('h2');
choiceText.className = 'title';
choiceText.textContent = 'Please Select your Choice';
choiceText.style.fontSize = '32px'
choiceText.style.textAlign = 'center';
choiceText.style.fontFamily = 'Courier new';
choiceText.style.color = '#E3FCBF';
divMain.appendChild(choiceText);

let currentRound = document.createElement('h2');
currentRound.style.textAlign = 'center';
currentRound.style.fontFamily = 'Courier new';
currentRound.style.color = '#E3FCBF';
divMain.appendChild(currentRound);

let pScore = document.createElement('h2');
pScore.textContent = 'Your score is: 0';
pScore.style.textAlign = 'center';
pScore.style.fontFamily = 'Courier new';
pScore.style.color = '#E3FCBF';
divMain.appendChild(pScore);


let cDraw = document.createElement('p')
cDraw.className = 'computer-draw';
cDraw.style.fontSize = '22px'
cDraw.style.textAlign = 'center';
cDraw.style.fontFamily = 'Courier new';
cDraw.style.color = '#14C38E';
divResults.appendChild(cDraw);

let roundResult = document.createElement('p');
roundResult.className = 'round-result';
roundResult.style.fontSize = '14px'
roundResult.style.textAlign = 'center';
roundResult.style.fontFamily = 'Courier new';
roundResult.style.color = '#025e42';
divResults.appendChild(roundResult);

let rockButton = document.createElement('button');
rockButton.className = 'button'
rockButton.textContent = 'Rock'
divMain.appendChild(rockButton);

let paperButton = document.createElement('button');
paperButton.className = 'button';
paperButton.textContent = 'Paper';
divMain.appendChild(paperButton);

let scissorsButton = document.createElement('button');
scissorsButton.className = 'button';
scissorsButton.textContent = 'Scissors';
divMain.appendChild(scissorsButton);

let buttons = document.getElementsByClassName('button');

let buttonsList = Array.from(buttons);

let round = 0

buttonsList.forEach(button =>{
    button.addEventListener('click', (e)=>{
        playRound(e.target.innerText.toLowerCase(),computerPlay());
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
    });
    button.style.justifyContent = 'center';
    button.style.margin = '8px';
    button.style.width = '12rem'; 
    button.style.height = '2rem';
    button.style.background = '#B8F1B0';
    button.style.borderRadius = '8px';
    button.style.border = 'none';
    button.style.boxShadow = '0px 8px 10px 0px #00825b';
    button.style.cursor = 'pointer';
    button.style.fontFamily = 'Courier New';
    button.style.color = '#045c41'
});
