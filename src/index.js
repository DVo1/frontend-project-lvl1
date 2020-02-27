
import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(.Correct answer was "${answer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
