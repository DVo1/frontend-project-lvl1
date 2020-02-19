import getRandomNum from '../math.js';
import gameEngine from '../index.js';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const rule = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const x = getRandomNum();
  const y = getRandomNum();
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));
  return [question, answer];
};

const start = () => gameEngine(rule, getGameData);
export default start;
