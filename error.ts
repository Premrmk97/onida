//Error - Human made mistake that causes the program to terminate

// try, catch, finally and throw
// try - handles risky code 
// catch - caught the error
// finally - always executable block
// throw - creates an error

console.log("Start of the Program");
try {
  let str: string = "Welcome";
  console.log(str.toUpperCase());
}
catch (error) {
  console.log("Please don't include null values or undefined");
}
finally {
  console.log("I am always executable");
}
console.log("End of the Program");

console.log("Code Continues");
try {
  console.log(a);
}
catch (error) {
  throw new Error("Please Declare and Use Variables");
}

console.log("End of Final Code");

