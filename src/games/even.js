import { isEven, getRandomNum } from '../math.js';
import gameEngine from '../index.js';

const getGameData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [rule, question, answer];
};


const game = () => gameEngine(getGameData);
export default game;
