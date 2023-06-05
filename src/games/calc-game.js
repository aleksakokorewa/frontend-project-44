import generateRandomNumber from '../randomNumberGenerator.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const countsOfOperators = operators.length - 1;
  const indexRandom = Math.round((Math.random() * countsOfOperators));
  return operators[indexRandom];
}

const calculate = (userOperator, firstNumber, secondNumber) => {
  let answer = '';
  switch (userOperator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return answer;
};

function questionAndAnswer() {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const operator = generateRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(operator, number1, number2);
  return [question, correctAnswer];
}

export default () => {
  startGame(rules, questionAndAnswer);
};
