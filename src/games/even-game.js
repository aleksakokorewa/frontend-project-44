import generateRandomNumber from '../randomNumberGenerator.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}

function questionAndAnswer() {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default () => {
  startGame(rules, questionAndAnswer);
};
