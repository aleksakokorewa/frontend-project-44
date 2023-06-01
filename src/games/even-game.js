import readlineSync from 'readline-sync';
import generateRandomNumber from '../randomNumberGenerator.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const userName = readlineSync.question('May I have your name? ');

function isEven(num) {
  return num % 2 === 0;
}

function evenGame() {
  console.log('Welcome to the Brain Games!');
  console.log(userName);
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const number = generateRandomNumber();
  const answer = readlineSync.question(`Question: ${number} \nYour answer: `);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (answer.toLocaleLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
}

function startEvenGame() {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = evenGame();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
}

export default startEvenGame;
