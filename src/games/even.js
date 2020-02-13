import readlineSync from 'readline-sync';

export const evenGames = () => {
  const getRandomNum = () => Math.floor(Math.random() * 100);
  const isEven = (num) => num % 2 === 0;

  let num = getRandomNum();
  let round = 3;
  let score = 0;

  printTitle(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (round !== 0) {
    num = getRandomNum();
    console.log(`Question: ${num}`);
    const answ = isEven(num) ? 'yes' : 'no';
    const type = readlineSync.question('You answer: ');
    const wrong = `"${type}" is wrong answer ;(. Correct answer was "${answ}".`;
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

export const hello = "Hello";