/* Write a TypeScript program to find the largest number in an array without using the built-in Math.max() method.
let numbers: number[] = [25, 10, 45, 8, 60, 32]; */

let numbers: number[] = [25, 10, 45, 8, 60, 32];
let largest: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is: " + largest);