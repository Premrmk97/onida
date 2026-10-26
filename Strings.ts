// String Declarations (Single quote, Double quote, Template Literal)
let str: string = 'Welcome';
let str1: string = "TypeScript";
let str2: string = `1
2
3
4
5
`;

console.log(str);
console.log(str1.length);
console.log(str2);

let str4 = "I have an Orange in my Hands.";

// Search, Match & Replace
console.log(str4.includes("Oran", 12));
console.log(str4.startsWith("I", 6));
console.log(str4.endsWith("."));
console.log(str4.replace("a", "aa"));
console.log(str4.replaceAll("a", "aa"));
console.log(str4.split(" ", 3));

console.log("==================");

// Length & Character Access
console.log(str4.length);
console.log(str4.at(0));
console.log(str4.charAt(0));

// Finding Index
console.log(str4.indexOf("a", 5));
console.log(str4.lastIndexOf("a", 5));

// Case Conversion (Standard & Locale-specific)
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

let i: string = "Istanbul";
console.log(i.toLocaleUpperCase("en-US"));
console.log(i.toLocaleLowerCase("tr-TR"));
console.log(i);

// Extraction
console.log(str4.substring(3));
console.log(str4.slice(3));

// Trimming, Padding & Concatenation
let str5 = "     TypeSafety      ";
let str6 = "Type ";

console.log(str5.trimStart());
console.log(str5.trimEnd());
console.log(str5.trim());
console.log(str5 + str6);
console.log(str5.concat("Anything"));
console.log(str6.padStart(13, "123456789"));
console.log(str6.padEnd(10, "*"));
console.log(str6.repeat(12));
console.log(str6);

console.log("===================================");

// Type Conversion
let num: boolean = true;
console.log(typeof num, num);
let str7: string = num.toString();
console.log(typeof str7, str7);
console.log(str7.valueOf());

console.log("======================");

// String Comparison
let str8: string = "a";
let str9: string = "Banana";
console.log(str8.localeCompare("a"));

console.log("===================");

// Unicode / Well-formed String Validation
let str10: string = "Welcome\uD800";
console.log(str10.isWellFormed());
console.log(str10.toWellFormed());

console.log("==================");

// Character Code / Emoji Processing
let str11: string = "😊";
console.log(str11.codePointAt(0));
console.log(str11.charCodeAt(0));