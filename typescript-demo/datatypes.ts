let lname: string = "Velarde";

lname = "Charles";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;
// age = "25";
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];

empList = ["Velarde", "Velarde1", "Velarde2"];

let depList: Array<number>;

depList = [1, 2, 3, 4, 5];

let results = depList.filter((num) => num > 2);

let num = depList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "Velarde2");

let sum = depList.reduce((acc, num) => acc + num);

console.log(results);
console.log(num);
console.log(emp);
console.log(sum);

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num1, num2];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

let department: any;

department = "IT";
department = 10;
