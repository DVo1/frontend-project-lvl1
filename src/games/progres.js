import getRandomNum from '../math.js';
import gameEngine from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (begin, step, length, rnd) => {
  let answer = '';
  let result = '';
  let currentValue = begin;
  for (let i = 0; i < length; i += 1) {
    currentValue += step;
    if (i === rnd) {
      result += '.. ';
      answer += currentValue;
    } else {
      result += `${currentValue} `;
    }
  }
  return [result, answer];
};

const getGameData = () => {
  const lengthProgression = 10;
  const randomNum = Math.floor(getRandomNum() / 10);
  const beginNum = getRandomNum();
  const stepOfNum = getRandomNum();
  const [question, answer] = getProgression(beginNum, stepOfNum, lengthProgression, randomNum);
  return [question, answer];
};

const start = () => gameEngine(rule, getGameData);
export default start;
