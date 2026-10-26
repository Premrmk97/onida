let statusCode: 200 | 401 | 300;
statusCode = 200;
statusCode = 401;
statusCode = 300;
console.log(statusCode);

console.log("Arithmetic Operators");
console.log(1+ 0);
console.log(3 - 1);
console.log(1 * 3);
console.log(8 / 2);
console.log(26 % 7); // remainder
console.log(2 ** 3); // 2 power 3

console.log("Assignment Operator");
let a: number = 2;
let b: number = 4;

console.log((b += a)); // b = b + a add and assign
console.log((b -= a)); // b = b - a subtract and assign
console.log((b *= a)); // b = b * a multiply and assign
console.log((b **= a)); // b = b ** a power and assign
console.log((b /= a)); // b = b / a divide and assign
console.log((b %= a)); // b = b % a modulo and assign

console.log("Comparative Operator");
console.log(1 < 2); // less than
console.log(1 > 8); // greater than
console.log(9 <= 9); // less than or equal to
console.log(5 >= 2); // greater than or equal to

console.log("===========");

let a1: any = 100;
let b1: any = "100";
let c1: any = 1;
let d1: any = true;

console.log(a1 == b1); // loose equality
console.log(a1 === b1); // strict equality
console.log("=======================");

console.log(c1 != d1); // loose inequality
console.log(c1 !== d1); // strict inequality
console.log("==========HW1=============");
let q: number|string|null;
q = 10;
q = "Prem";
q = 0;
q= null;
console.log(q);
console.log("==========HW2=============");
type SuccessFailurePending = "success" | "failure" | "pending";
let status: SuccessFailurePending;
status = "success";
status = "failure";
console.log(status);
// Ternary Operator
console.log("Replacement of if else");
console.log((4 < 2) ? "4 is Lesser" : "4 is Greater");

// Unary Operators
console.log("===============Unary Operator===============");
let aa = false;
console.log(-(-5));
console.log(+aa);
console.log(typeof +aa);

console.log("============");
let bb: number = 10;

console.log(bb++); // Post-Fix (10)
console.log(bb);

console.log(++bb); // Pre-Fix (12)
console.log(bb);

console.log(bb--); // Post-Fix (12)
console.log(bb);

console.log(--bb); // Pre-Fix (10)
console.log(bb);

// Bitwise Operators
console.log("===================");
console.log(10 & 15);
console.log(10 | 15);
console.log(3 ^ 7);
console.log(~7);


export{};