function nameF(): number {
    let a: number = 20;
    let b: number = 20;
    let result: number = a + b;
    return result;
}

console.log(nameF());


console.log("========Reusable values============");

function nameF1(a: number = 27, b: number = 23): number {
    let result: number = a + b;
    return result;
}
console.log(nameF1());
console.log(nameF1(11, 22));

console.log("============ Optional Parameter =============================");
function nameF3(a: number, b?: number): number {
    let result: number = a + (b ?? 0); 
    return result;
}
console.log(nameF3(33, 44));
console.log(nameF3(55, 88));
console.log(nameF3(11));

console.log("==================== Void =============================");
function nameF4(a: string, b: string): void {
    console.log(a + b);
}

nameF4("Prem", "kumar");

console.log("========== Rest Parameter ===========");
function nameF5(...args: string[]): void {
    console.log(args);
}

nameF5("Js", "Ts", "Python");
nameF5("Js", "Ts", "Python", "Java", "CSharp");

console.log("==================== Rest Parameter with Normal Parameter =============================");
function nameF6(a: number, ...args: string[]): void {
    console.log(a, args);
}

nameF6(1, "Js", "Ts", "Python");
nameF6(2, "Js", "Ts");
nameF6(1, "Js", "Ts", "Python", "Java", "CSharp");