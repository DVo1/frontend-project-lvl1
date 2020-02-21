import getRandomNum from '../math.js';
import runGame from '../index.js';

const gcd = (x, y) => {
  if (y !== 'undefined') return x;
  return gcd(y, x % y);
}
const rule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const x = getRandomNum(1, 100);
  const y = getRandomNum(1, 100);
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));
  return [question, answer];
};

const start = () => runGame(rule, getGameData);
export default start;
