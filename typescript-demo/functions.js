"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(3, 1));
console.log(add(3, 1, 9));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(3, 1));
console.log(sub(3, 1, 1));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(3, 1));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numArray = [1, 2, 3, 4, 5];
console.log(add2(1, 2, ...numArray));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5, 6, 7]);
console.log(concatResult);
