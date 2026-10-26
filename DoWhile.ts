/* 
do..while - exit check loop
Syntax:
do {
    Body of the Loop;
} while (condition);
*/

// 1. odd numbers from 1 to 50
let i = 1;
do {
    console.log(i);
    i += 2; // i = i + 2
} while (i <= 50);

// 2. Voting Eligibility
let x1: number = 24;

if (x1 >= 18) {
    console.log("You are Eligible to Vote");
} else {
    console.log("You have to wait till 18 gets Complete");
}

// 3. Cricket Score (If-Else Chain)
let score: number = 156;

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

// 4. Grade Evaluation (Fixed Logical Conditions & Missing Range)
let marks = 101;

if (marks >= 91 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 81 && marks <= 90) {
    console.log("Grade B");
} else if (marks >= 71 && marks <= 80) {
    console.log("Grade C");
} else if (marks >= 61 && marks <= 70) {
    console.log("Grade D");
} else if (marks >= 51 && marks <= 60) {
    console.log("Grade E");
} else {
    console.log("Fail");
}

