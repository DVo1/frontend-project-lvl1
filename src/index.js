
import readlineSync from 'readline-sync';

const gameEngine = (data) => {
  let round = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const loose = `Let's try again, ${name}!`;
  const win = `Congratulations, ${name}!`;
  const wrong = (num, answr) => `"${num}" is wrong answer ;(. Correct answer was "${answr}".`;
  console.log(`Hello, ${name}`);


  do {
    const [qst, answ] = data();
    console.log(`Question: ${qst}`);
    const type = readlineSync.question('You answer: ');
    const isAnswer = (str) => str === answ;
    if (isAnswer(type)) {
      console.log('Correct!');
      round += 1;
      if (round === 3) console.log(win);
    } else {
      round = 3;
      console.log(wrong(type, answ));
      console.log(loose);
      return;
    }
  } while (round !== 3);
};
export default gameEngine;
