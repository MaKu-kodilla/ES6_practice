// TASK 1

const firstWord = 'Hello';
const secondWord = 'World';

const helloWorld = `${firstWord} ${secondWord}`;

console.log(helloWorld);

//or

const name = (firstName = 'Maciej', secondName = 'Kubas') => console.log(`${firstName} ${secondName}`);
name();

//TASK 2

const multiply = (number1 = 1, number2 = 1) => number1 * number2;

console.log(multiply(2, `${2 * 5}`));
console.log(multiply(6, 5));
console.log(multiply(5));

//TASK 3

const average = (...args) => {
	let sum=0;
	args.forEach(arg  => {
		sum += arg;
	});
	return (`Average is: ${sum/args.length}`);
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//TASK 4

 const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// TASK 5

const array =  [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = array;

console.log(`My name is: ${firstName} ${lastName}`);
