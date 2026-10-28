/* Write a TypeScript function using rest parameters to add any number of arguments.
addNumbers(10, 20);
addNumbers(1, 2, 3, 4, 5); */

function addNumbers(...numbers: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log("Sum of numbers: " + addNumbers(10, 20));
console.log("Sum of numbers: " + addNumbers(1, 2, 3, 4, 5));