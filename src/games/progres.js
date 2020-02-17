import { getProgression, getRandomNum } from '../math.js';
import gameEngine from '../index.js';

const getGameData = () => {
  const rule = 'What number is missing in the progression?';
  const lengthProgression = 10;
  const randomNum = Math.floor(getRandomNum() / 10);
  const beginNum = getRandomNum();
  const stepOfNum = getRandomNum();
  const [question, answer] = getProgression(beginNum, stepOfNum, lengthProgression, randomNum);
  return [rule, question, answer];
};

const game = () => gameEngine(getGameData);
export default game;
