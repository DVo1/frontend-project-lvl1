export const isEven = (num) => num % 2 === 0;

export const nod = (x, y) => (!y ? x : nod(y, x % y));

export const getRandomNum = () => Math.floor(Math.random() * 100);

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};


export const getArifmetics = () => { // TODO: Refactor this method
  const getRandomSign = () => {
    const arrSign = ['+', '-', '*'];
    const randomSing = arrSign[Math.floor(Math.random() * arrSign.length)];
    return randomSing;
  };

  const a = getRandomNum();
  const b = getRandomNum();
  const sing = getRandomSign();
  const print = `${a} ${sing} ${b}`;
  return print;
};

export const getProgression = (start, step, n, rnd) => {
  let answer = '';
  let result = '';
  let curr = start;
  for (let i = 0; i < n; i += 1) {
    curr += step;
    if (i === rnd) {
      result += '.. ';
      answer += curr;
    } else {
      result += `${curr} `;
    }
  }
  return [result, answer];
};
