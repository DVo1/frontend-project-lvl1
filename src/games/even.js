import getRandomNum from '../math.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(1,100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => runGame(rule, getGameData);
export default start;
