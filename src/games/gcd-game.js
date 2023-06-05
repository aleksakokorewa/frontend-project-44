import startGame from '../index.js';
import generateRandomNumber from '../randomNumberGenerator.js';

const rules = 'Find the greatest common divisor of given numbers.';

function getGcd(x, y) {
  if (y > x) {
    return getGcd(y, x);
  } if (!y) {
    return x;
  }
  return getGcd(y, x % y);
}

function questionAndAnswer() {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [question, correctAnswer];
}

export default () => {
  startGame(rules, questionAndAnswer);
};
