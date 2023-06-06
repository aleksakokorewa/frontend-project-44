import startGame from '../index.js';
import generateRandomNumber from '../randomNumberGenerator.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2, j = Math.sqrt(number); i <= j; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function quesstionAndAnswer() {
  const number = generateRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
}

export default () => {
  startGame(rules, quesstionAndAnswer);
};
