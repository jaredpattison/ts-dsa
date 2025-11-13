import { inspect } from "node:util";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------------------------------------------------- //

const forLoop = (arr: any[]) => {
  for (let i of arr) console.log(i);
}

const whileLoop = (arr: any[]) => {
  const temp = [...arr];
  while (temp.length) console.log(temp.shift());
}

const map = (arr: any[], cb: any) => {
  const res = [];
  for (let i of arr) res.push(cb(i));
  return res;
}

const mapInPlace = (arr: any[], cb: any) => {
  for (let i = 0; i < arr.length; i++) arr[i] = cb(arr[i]);
}

const filter = (arr: any[], cb: any) => {
  const res = [];
  for (let i of arr) {
    if (cb(i)) res.push(i);
  }
  return res;
}

const filterInPlace = (arr: any[], cb: any) => {
  let j = 0;
  for (let i of arr) {
    if (cb(i)) arr[j++] = i;
  }
  arr.length = j;
}

const reduce = (arr: any[], cb: any, acc: number) => {
  for (let i = 0; i < arr.length; i++) acc = cb(acc, arr[i], i);
  return acc;
}

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
const sum = reduce(numbers, (acc: any, num: any) => {
  acc += num;
  return acc;
}, 0);

console.log({ sum });
console.log('------------------\n\n');

console.log('reduce()');
const product = reduce(numbers, (acc: any, num: any) => {
  acc *= num;
  return acc;
}, 1);

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

const state = { people, stuff };
const newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [...stuff.cars, 'Ford'] };
const newState = { people: ['Lola', ...newPeople, 'Lilly'], stuff: { ...stuff, cars: [...stuff.cars, 'Nissan'] } };

// ---------------------------------------------------- //

console.log({ people });
console.log('------------------\n\n');

console.log({ newPeople });
console.log('------------------\n\n');

console.log({ stuff });
console.log('------------------\n\n');

console.log({ newStuff });
console.log('------------------\n\n');

console.log('state: ', inspect(state));
console.log('------------------\n\n');

console.log('newState: ', inspect(newState));
console.log('------------------\n\n');