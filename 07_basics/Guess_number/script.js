let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let guessSlot = document.querySelector('.guesses');
let userInput = document.querySelector('#guessField');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
   submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
     validateGuess(guess);

   })
}

//function to check if the value entered by user is a valid number or not

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please provide a valid number')
   }else if(guess < 1){
    alert('Please provide a value greater than 1')
   }else if(guess > 100){
    alert('Please provide a value less than 100')
   }else{
    preGuess.push(guess);
    if(numGuess === 10){
        displayGuess(guess);
        displayMessage(`Game Over, Random Number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}

//function to check if the provided number matches with random no. or is less or is greater

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Congratulations, you're winner. You guessed it right`)
    endGame();
  }else if(guess < randomNumber)
    {
        displayMessage('Number is Low');
    }
    else if(guess > randomNumber){
        displayMessage('Number is High');
    }
}

//function to reset the value of input field, and update the values of array and remaining by chances by DOM manipulation

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

//function to display value is less, high or matches exactly

function displayMessage(message){
   lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

//function to end the Game, here values will be resetted and any further entry by user side will not be allowed, also a display button is provided to start over the game

function endGame(){
    userInput.value = ''
   userInput.setAttribute('disabled', '');
   p.classList.add('button');
   p.innerHTML = `<h3 id='newGame'>Start New Game</h3>`
   startOver.appendChild(p);
   playGame = false
    startGame()
}

//function to start over the game

function startGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
     
    randomNumber = parseInt(Math.random() * 100 + 1);
    lowOrHi.textContent = "Hello";
    preGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild('p');
    
    playGame = true;
  });
}