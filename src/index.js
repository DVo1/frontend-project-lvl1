import readlineSync from 'readline-sync';

const hello = () => readlineSync.question('May I have your name? ');

export default hello;
