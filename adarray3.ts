let evenNumbers: number[] = [2, 4, 6, 8, 10, 13, 10];

console.log(evenNumbers.filter((value) => value >= 8));

let result = evenNumbers.reduce((sum, value) => {
   return sum + value;
});
console.log(result);

let result1 = evenNumbers.some((value) => value % 2 === 0);
console.log(result1);

let result2 = evenNumbers.every((value) => value % 2 === 0);
console.log(result2);

console.log(evenNumbers.findLastIndex((value) => value < 10));