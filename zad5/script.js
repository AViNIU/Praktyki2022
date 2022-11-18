const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

let laczenie = (arr1, arr2) => arr1.concat(arr2);

let last = (arr1) => (arr1.reverse())[0];

let filter1 = (arr1) => arr1.filter(arr1 => (arr1.length == 5) && (arr1.slice(-2) == "ek"));

let filter2 = (arr1) => arr1.filter(arr1 => arr1 % 2 == 0);

let iniVal = 0;
let sum = numbers.reduce((acc, curVal) => acc + curVal, iniVal);

let min = (arr1) => Math.min(...arr1);

let power = (arr1) => (arr1.map(n => Math.pow(n, 2) + 3)).reverse()


console.log(laczenie(arr1, arr2));
console.log(last(numbers));
console.log(filter1(arr2));
console.log(filter2(numbers));
console.log(sum);
console.log(min(numbers));
console.log(power(numbers));