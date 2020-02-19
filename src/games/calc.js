import gameEngine from '../index.js';
import getRandomNum from '../math.js';

const rule = 'What is the result of the expression?';

const getArithmeticExpression = () => {
  const getRandomSign = () => {
    const sings = ['+', '-', '*'];
    return sings[Math.floor(Math.random() * sings.length)];
  };
  const getAnswer = (sing, a, b) => {
    switch (sing) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: return false;
    }
  };
  const a = getRandomNum();
  const b = getRandomNum();
  const sing = getRandomSign();
  const displayQuestion = `${a} ${sing} ${b}`;
  const answer = String(getAnswer(sing, a, b));
  return [displayQuestion, answer];
};

const getGameData = () => {
  const [question, answer] = getArithmeticExpression();
  return [question, answer];
};

const start = () => gameEngine(rule, getGameData);
export default start;
