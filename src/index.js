
import readlineSync from 'readline-sync';

const gameEngine = (rule, data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = data();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('You answer: ');
    if (userInput === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
