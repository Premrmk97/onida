let arrowF = (): number => {
    let a: number = 20;
    let b: number = 20;
    let result: number = a + b;
    return result;
};

console.log(arrowF());


console.log("========Reusable values============");

let arrowF1 = (a: number = 27, b: number = 23): number => {
    let result: number = a + b;
    return result;
};
console.log(arrowF1());
console.log(arrowF1(11, 22));

console.log("============ Optional Parameter =============================");
let arrowF3 = (a: number, b?: number): number => {
    let result: number = a + b; 
    return result;
};
console.log(arrowF3(33, 44));
console.log(arrowF3(55, 88));
console.log(arrowF3(11));

console.log("==================== Void =============================");
let arrowF4 = (a: string, b: string): void => {
    console.log(a + b);
};

arrowF4("Prem", "kumar");

console.log("========== Rest Parameter ===========");
let arrowF5 = (...args: string[]): void => {
    console.log(args);
};

arrowF5("Js", "Ts", "Python");
arrowF5("Js", "Ts", "Python", "Java", "CSharp");

console.log("==================== Rest Parameter with Normal Parameter =============================");
let arrowF6 = (a: number, ...args: string[]): void => {
    console.log(a, args);
};

arrowF6(1, "Js", "Ts", "Python");
arrowF6(2, "Js", "Ts");
arrowF6(1, "Js", "Ts", "Python", "Java", "CSharp");