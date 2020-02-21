import runGame from '../index.js';
import getRandomNum from '../math.js';

const rule = 'What is the result of the expression?';
const sings = ['+', '-', '*'];

const getAnswer = (sing, a, b) => {
  switch (sing) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return false;
  }
};
const getGameData = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const sing = sings[getRandomNum(0, sings.length - 1)];
  const question = `${a} ${sing} ${b}`;
  const answer = String(getAnswer(sing, a, b));
  return [question, answer];
};

const start = () => runGame(rule, getGameData);
export default start;
