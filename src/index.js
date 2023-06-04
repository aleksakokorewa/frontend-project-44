import readlineSync from 'readline-sync';

export const rounds = 3;

function startGame(rules, questionAndAnswer) {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(userName);
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
