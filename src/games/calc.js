import runGame from '../index.js';
import getRandomNum from '../math.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getAnswer = (operator, a, b) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return false;
  }
};
const getGameData = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const answer = String(getAnswer(operator, a, b));
  return [question, answer];
};

const start = () => runGame(description, getGameData);
export default start;
