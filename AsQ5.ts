/* Write a TypeScript program to count how many times "India" appears in the following string, without using a built-in counting method.
let message: string = "India is great. India is beautiful. I love India.";    */ 

let message: string = "India is great. India is beautiful. I love India.";
let count: number = 0;
let searchString: string = "India";
let index: number = message.indexOf(searchString);

while (index !== -1) {
    count++;
    index = message.indexOf(searchString, index + 1);
}

console.log("Number of times '" + searchString + "' appears: " + count);