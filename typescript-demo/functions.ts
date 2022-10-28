function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(3, 1));
console.log(add(3, 1, 9));

const sub = (num1: number, num2: number, num3: number = 10): number =>
  num1 - num2 - num3;
console.log(sub(3, 1));
console.log(sub(3, 1, 1));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(3, 1));

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numArray: number[] = [1, 2, 3, 4, 5];

console.log(add2(1, 2, ...numArray));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5, 6, 7]);
console.log(concatResult);
