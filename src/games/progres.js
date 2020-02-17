import { getProgression, getRandomNum } from '../math.js';
import gameEngine from '../index.js';

export const rule = 'What number is missing in the progression?';

const getQstAnsw = () => {
  console.log(rule);
  const len = 10;
  const rnd = Math.floor(getRandomNum() / 10);
  const start = getRandomNum();
  const step = getRandomNum();
  const [qst, answ] = getProgression(start, step, len, rnd);
  // const answ = String(rnd);
  return [qst, answ];
};

export default gameEngine(getQstAnsw);
