import readlineSync from 'readline-sync';


export const name = readlineSync.question('May I have your name? ');

export const printTitle = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${str}`);
};

export const win = `Congratulations, ${name}!`;

export const evenGames = () => {
  const getRandomNum = () => Math.floor(Math.random() * 100);
  const isEven = (num) => num % 2 === 0;

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const type = readlineSync.question('You answer: ');

  let num = getRandomNum();
  let round = 3;
  let score = 0;

  console.log(printTitle(name));
  console.log(rule);

  while (round !== 0) {
    const answ = isEven(num) ? 'yes' : 'no';
    const wrong = `"${type}" is wrong answer ;(. Correct answer was "${answ}".`;
    const qst = `Question: ${num}`;
    num = getRandomNum();
    console.log(qst);
    if (type === answ) {
      round -= 1;
      score += 1;
      console.log('Correct!');
    } else {
      console.log(wrong);
      round = 0;
    }
  }
  if (score === 3) console.log(win);
};

evenGames();
