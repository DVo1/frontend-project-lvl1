import { gcd, getRandomNum } from '../math.js';
import gameEngine from '../index.js';


const getGameData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const x = getRandomNum();
  const y = getRandomNum();
  const question = `${x} ${y}`;
  const answer = String(gcd(x, y));
  return [rule, question, answer];
};

const game = () => gameEngine(getGameData);
export default game;
