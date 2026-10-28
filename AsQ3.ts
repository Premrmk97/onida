/* Write a TypeScript program to count the number of vowels in the given string.
let input: string = "Automation Testing"; */

let input1: string = "Automation Testing";
let vowelCount: number = 0;
let vowels: string = "aeiouAEIOU";

for (let i = 0; i < input1.length; i++) {
    if (vowels.includes(input1[i])) {
        vowelCount++;
    }
}

console.log("Number of vowels are: " + vowelCount);