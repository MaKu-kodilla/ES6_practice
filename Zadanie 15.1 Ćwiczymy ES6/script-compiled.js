'use strict';

// TASK 1

var firstWord = 'Hello';
var secondWord = 'World';

var helloWorld = firstWord + ' ' + secondWord;

console.log(helloWorld);

//or

var name = function name() {
	var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Maciej';
	var secondName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Kubas';
	return console.log(firstName + ' ' + secondName);
};
name();

//TASK 2

var multiply = function multiply() {
	var number1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return number1 * number2;
};

console.log('2 * 5:' + multiply(2, 5));
console.log(multiply(6, 5));
console.log(multiply(5));

//TASK 3

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return 'Average is: ' + sum / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//TASK 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// TASK 5

var array = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = array[2],
    lastName = array[4];


console.log('My name is: ' + firstName + ' ' + lastName);
