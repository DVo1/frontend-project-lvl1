
import { getArifmetics } from '../math.js';
import gameEngine from '../index.js';

const rule = 'What is the result of the expression?';

const getQstAnsw = () => {
  console.log(rule);
  const qst = getArifmetics();
  const answ = String(eval(qst)); // FIXME: Remove Eval function as bad practice
  return [qst, answ];
};


export default gameEngine(getQstAnsw);
