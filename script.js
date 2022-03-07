'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😊 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 33;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.highscore').textContent = 23100;

// ----------------------------------------------------------- //

let messageDoc = document.querySelector('.message');
let scoreDoc = document.querySelector('.score');
let numberDoc = document.querySelector('.number');
let guessDoc = document.querySelector('.guess');
let bodyDoc = document.querySelector('body');
let highscoreDoc = document.querySelector('.highscore');
let again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageDoc.textContent = message;
};

const displayScore = function (scoreDisplay) {
  scoreDoc.textContent = scoreDisplay;
};

again.addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 10) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  numberDoc.textContent = '?';
  guessDoc.value = '';
  numberDoc.style.width = '15rem';
  bodyDoc.style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessDoc.value);
  // console.log(typeof guess, guess);

  if (!guess) {
    displayMessage('😒 No number selected!');
  } else if (guess === secretNumber) {
    displayMessage('😍 Correct Number');
    bodyDoc.style.backgroundColor = '#60b347';
    numberDoc.style.width = '30rem';
    numberDoc.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreDoc.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👀 To High' : '👀 To Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      scoreDoc.textContent = 0;
    }
  }
});
