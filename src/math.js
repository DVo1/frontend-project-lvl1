export const isEven = (num) => num % 2 === 0;

export const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const randomSing = arrSign[Math.floor(Math.random() * arrSign.length)];
  return randomSing;
};
export const getRandomNum = () => Math.floor(Math.random() * 100);

export const getArifmetics = () => {
  const a = getRandomNum();
  const b = getRandomNum();
  const sing = getRandomSign();
  const print = `${a} ${sing} ${b}`;
  return print;
};
