
import readlineSync from 'readline-sync';

const gameEngine = (data) => {
  let round = 0;
  console.log('Welcome to the Brain Games!');
  const [rule] = data();
  const name = readlineSync.question('May I have your name? ');
  const displayLoose = `Let's try again, ${name}!`;
  const displayWin = `Congratulations, ${name}!`;
  const displayWrong = (wrongAnswer, correctAnswer) => `"${wrongAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;

  console.log(`Hello, ${name}`);
  console.log(rule);
  do {
    const [, question, answer] = data();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('You answer: ');
    if (userInput === answer) {
      console.log('Correct!');
      round += 1;
      if (round === 3) console.log(displayWin);
    } else {
      round = 3;
      console.log(displayWrong(userInput, answer));
      console.log(displayLoose);
      return;
    }
  } while (round !== 3);
};

export default gameEngine;
