// Login Input Validation
let username: string = '  Aishu  ';
let expected: string = 'aishu';
console.log(username.trim().toLowerCase() === expected);

// File Extension Validation
let fileName: string = 'TestReport.PDF';
console.log(fileName.toLowerCase().endsWith('.pdf'));

// Email User Name Extraction
let email: string = 'aishu.testing@gmail.com';
console.log(email.substring(0, email.indexOf('@')));

// Character Count
let inputText: string = 'selenium automation';
let count: number = 0;
for (let i = 0; i < inputText.length; i++) { 
    if (inputText.charAt(i) === 'a') count++; 
}
console.log(count);

// Reverse String
let word: string = 'TypeScript';
let reversed: string = '';
for (let i = word.length - 1; i >= 0; i--) { 
    reversed += word.charAt(i); 
}
console.log(reversed);