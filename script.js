'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 111;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let canPlay = true;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (canPlay) {
    if (!guess) {
      displayMessage('No number');
    } else if (guess === secretNumber) {
      //Player win
      displayMessage('Correct number');

      document.querySelector('body').style.backgroundColor = '#60b347';

      displayNumber(secretNumber);

      document.querySelector('.number').style.width = '30rem';

      if (score > hightScore) {
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
      }
    } else if (guess > secretNumber) {
      //When guess is to high
      displayMessage('Too hight!');
      score--;
      displayScore(score);
    } else if (guess < secretNumber) {
      //When guess is to low
      displayMessage('To low!');
      score--;
      displayScore(score);
    }
  }

  if (score <= 0) {
    score = 0;
    displayMessage('You lose the game');
    document.querySelector('body').style.backgroundColor = '#fc0356';
    canPlay = false;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  canPlay = true;
  score = 20;
  displayNumber('?');
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
