import getRandomNum from '../math.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;


const getProgression = (beginNum, stepOfNum, progressionLength, randomNum) => {
  let answer = '';
  let result = '';
  let currentValue = beginNum;
  for (let i = 0; i < progressionLength; i += 1) {
    currentValue += stepOfNum;
    if (i === randomNum) {
      result = `${result} ${'..'}`;
      answer = `${+result.substr(0, 3) + i * stepOfNum}`;
      console.log(answer);
    } else {
      result = `${result} ${currentValue}`;
    }
  }
  return [result, answer];
};

const getGameData = () => {
  const randomNum = getRandomNum(1, 10);
  const beginNum = getRandomNum(1, 100);
  const stepOfNum = getRandomNum(1, 100);
  const [question, answer] = getProgression(beginNum, stepOfNum, lengthProgression, randomNum);
  return [question, answer];
};

const start = () => runGame(description, getGameData);
export default start;
