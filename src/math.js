export const isEven = (num) => num % 2 === 0;
export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const gcd = (x, y) => (!y ? x : gcd(y, x % y));
export const getRandomNum = () => Math.floor(Math.random() * 100);

export const getArithmeticExpression = () => {
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

export const getProgression = (begin, step, length, rnd) => {
  let answer = '';
  let result = '';
  let currentValue = begin;
  for (let i = 0; i < length; i += 1) {
    currentValue += step;
    if (i === rnd) {
      result += '.. ';
      answer += currentValue;
    } else {
      result += `${currentValue} `;
    }
  }
  return [result, answer];
};
