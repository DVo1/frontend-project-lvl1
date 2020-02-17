
import { getArithmeticExpression } from '../math.js';
import gameEngine from '../index.js';

const rule = 'What is the result of the expression?';

const getGameData = () => {
  const [question, answer] = getArithmeticExpression();
  return [rule, question, answer];
};

const game = () => gameEngine(getGameData);
export default game;
