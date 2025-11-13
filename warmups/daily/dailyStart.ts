import { inspect } from "node:util";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------------------------------------------------- //



// ---------------------------------------------------- //

console.log('forLoop()');
forLoop(numbers);
console.log('------------------\n\n');

console.log('whileLoop()');
whileLoop(numbers);
console.log('------------------\n\n');

console.log('map()');
const squares = map(numbers, ((val: number) => val * val));
console.log({ squares });
console.log('------------------\n\n');

console.log('mapInPlace()');
const mapNums = [...numbers];
console.log({ mapNums });
mapInPlace(mapNums, ((val: number) => val * val));
console.log({ mapNums });
console.log('------------------\n\n');

console.log('filter()');
const odds = filter(numbers, ((val: number) => val % 2));
console.log({ odds });
console.log('------------------\n\n');

console.log('filterInPlace()');
const filterNums = [...numbers];
console.log({ filterNums });
filterInPlace(filterNums, ((val: number) => val % 2));
console.log({ filterNums });
console.log('------------------\n\n');

console.log('reduce()');
const sum = reduce(numbers, (acc: number, num: number) => acc += num, 0);
console.log({ sum });
console.log('------------------\n\n');

console.log('reduce()');
const product = reduce(numbers, (acc: number, num: number) => acc *= num, 1);
console.log({ product });
console.log('------------------\n\n');

// ---------------------------------------------------- //

const people = ['Kookla', 'Fran', 'Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda'],
};

// ---------------------------------------------------- //



// ---------------------------------------------------- //

console.log({ people });
console.log('------------------\n\n');

console.log({ newPeople });
console.log('------------------\n\n');

console.log({ stuff });
console.log('------------------\n\n');

console.log({ newStuff });
console.log('------------------\n\n');

console.log("state: ");
console.log(inspect(state));
console.log('------------------\n\n');

console.log("newState: ");
console.log(inspect(newState));
console.log('------------------\n\n');