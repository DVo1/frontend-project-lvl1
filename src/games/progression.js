import getRandomNum from '../math.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;


const getQueastion = (firstMember, difference, progressionLength, indexHiddeMember) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let currentValue = firstMember + i * difference;
    if (i === indexHiddeMember) currentValue = '..';
    result = `${result} ${currentValue}`;
  }
  return result;
};

const getGameData = () => {
  const indexHiddeMember = getRandomNum(1, 10);
  const firstMember = getRandomNum(1, 100);
  const difference = getRandomNum(1, 100);
  const question = getQueastion(firstMember, difference, lengthProgression, indexHiddeMember);
  const answer = String(firstMember + indexHiddeMember * difference);
  return [question, answer];
};

const start = () => runGame(description, getGameData);
export default start;
