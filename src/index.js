import readlineSync from 'readline-sync';


export const name = readlineSync.question('May I have your name? ');
export const win = `Congratulations, ${name}!`;

export const printTitle = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${str}`);
};
