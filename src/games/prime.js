import { isPrime, getRandomNum } from '../math.js';
import gameEngine from '../index.js';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const getQstAnsw = () => {
  console.log(rule);
  const qst = getRandomNum();
  const answ = isPrime(qst) ? 'yes' : 'no';
  return [qst, answ];
};


export default gameEngine(getQstAnsw);
