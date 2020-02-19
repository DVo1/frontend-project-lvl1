import getRandomNum from '../math.js';
import gameEngine from '../index.js';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getGameData = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => gameEngine(rule, getGameData);
export default start;
