import readlineSync from 'readline-sync';

export const hello = () => {
	return readlineSync.question('May I have your name? ');
}

