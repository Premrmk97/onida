//reverse the string using a for loop

let input: string = "TypeScript";
let reversed: string = "";

for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
}

console.log("Original string: " + input);
console.log("Reversed string: " + reversed);