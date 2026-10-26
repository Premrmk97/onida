let anonyF = function (): number {
    let a: number = 20;
    let b: number = 20;
    let result: number = a + b;
    return result;
};

console.log(anonyF());


console.log("========Reusable values============");

let anonyF1 = function (a: number = 27, b: number = 23): number {
    let result: number = a + b;
    return result;
};
console.log(anonyF1());
console.log(anonyF1(11, 22));

console.log("============ Optional Parameter =============================");
let anonyF3 = function (a: number, b?: number): number {
    let result: number = a + (b ?? 0); 
    return result;
};
console.log(anonyF3(33, 44));
console.log(anonyF3(55, 88));
console.log(anonyF3(11));

console.log("==================== Void =============================");
let anonyF4 = function (a: string, b: string): void {
    console.log(a + b);
};

anonyF4("Prem", "kumar");

console.log("========== Rest Parameter ===========");
let anonyF5 = function (...args: string[]): void {
    console.log(args);
};

anonyF5("Js", "Ts", "Python");
anonyF5("Js", "Ts", "Python", "Java", "CSharp");

console.log("==================== Rest Parameter with Normal Parameter =============================");
let anonyF6 = function (a: number, ...args: string[]): void {
    console.log(a, args);
};

anonyF6(1, "Js", "Ts", "Python");
anonyF6(2, "Js", "Ts");
anonyF6(1, "Js", "Ts", "Python", "Java", "CSharp");