import startGame from '../index.js';
import generateRandomNumber from '../randomNumberGenerator.js';

const rules = 'What number is missing in the progression?';

function generateRandomProgression(firstNumber, step) {
  const progression = [];
  const progressionLength = 10;
  let nextNumber = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber += step;
    progression.push(nextNumber);
  } return progression;
}

function questionAndAnswer() {
  const firstNumber = generateRandomNumber();
  const step = generateRandomNumber();
  const progression = generateRandomProgression(firstNumber, step);
  const hiddenNumberIndex = Math.round(Math.random() * progression.length);
  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';
  return [progression.join(' '), hiddenNumber];
}

export default () => {
  startGame(rules, questionAndAnswer);
};
