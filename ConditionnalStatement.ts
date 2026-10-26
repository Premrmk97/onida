
// Conditional Statements
let x1: number = 24;

if (x1 > 18) {
    console.log("Your Eligible to Vote");
} else {
    console.log("You have to wait till 18 gets Complete");
}

let score: number = 100;

if (score === 0) {
    console.log("You are Duck Out");
} else if (score === 50) {
    console.log("You are half Century Now");
} else if (score === 100) {
    console.log("You are Century Now");
} else if (score === 200) {
    console.log("You are Double Century Now");
} else {
    console.log(`Your Runs are : ${score}`);
}
export {};

console.log("=====HW======");

console.log("----1----");
console.log(10 % 3); 

console.log("----2----");
console.log(2 + 4 * 3); 

console.log("----3----");
console.log((2 + 4) * 3);

console.log("----4----");
let x: number = 10;
console.log(x++); 
console.log(x);   

console.log("----5----");
console.log(0 || 'Guest');

console.log("----6----");
let guestName: string | null = null;
console.log(guestName ?? 'Guest');