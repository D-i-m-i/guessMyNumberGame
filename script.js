'use strict';

// document.querySelector('.message').textContent = 'Correct Guess!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 1;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;

// REFACTORING FUNCTIONS
const displayScore = function () {
  document.querySelector('.score').textContent = score;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // document.querySelector('.score').textContent = score;
  displayScore(); //REFACTORED VERSION
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = '?';
  displaySecretNumber('?'); //REFACTORED VERSION
  // document.querySelector('body').style.backgroundColor = '#222';
  changeBackgroundColor('#222'); //REFACTORED VERSION
  // document.querySelector('.number').style.width = '15rem';
  changeNumberWidth('15rem'); //REFACTORED VERSION
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...'); //REFACTORED VERSION
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // CONVERT TO NUMBER TO HELP IMPLEMENTING INTO GAME LOGIC LATER ON

  console.log(guess);

  if (!guess) {
    // INSERTING A 0 OR AN INVALID INPUT CAUSES 0 WHICH IS A FALSY VALUE WITH AN OPPOSITE OF TRUTHY.
    // document.querySelector('.message').textContent =
    //   '** 0, empty or invalid input entered! **';
    displayMessage('** 0, empty or invalid input entered! **'); //REFACTORED VERSION
  }

  // guessing the correct number
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You found it!';
    displayMessage('You found it'); //REFACTORED VERSION
    // document.querySelector('body').style.backgroundColor = 'green';
    changeBackgroundColor('green'); //REFACTORED VERSION
    // document.querySelector('.number').style.width = '30rem';
    changeNumberWidth('30rem'); //REFACTORED VERSION
    // document.querySelector('.number').textContent = secretNumber;
    displaySecretNumber(secretNumber); //REFACTORED VERSION
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //REFACTORED VERSION
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); //REFACTORED VERSION
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(); //REFACTORED VERSION
    } else {
      // document.querySelector('.message').textContent = 'GAME OVER';
      displayMessage('GAME OVER'); //REFACTORED VERSION
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // guessing Higher
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // guessing Lower
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '***** GAME OVER *****';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
