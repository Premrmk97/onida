let n1: number = 10;
console.log(typeof n1);

let n2: bigint = 6566567587575756767676767677n;
console.log(typeof n2);
console.log(n2);
let m: string = "Welcome";

function add(): void {
  let a: number = 10;
  const b: number = 20;
  var c: number = 30;

  if (a + b === 30) {
    let x: string = "Welcome";
    const y: string = "To the TypeScript";
    var z: string = "Tutorial";
    console.log(x + y + z);
  }

  console.log(m);
  console.log(a + b + c);
}

add();
console.log(m);

console.log("Hoisted=================");

var num1;
console.log(num1);

let num2;
console.log(num2);

console.log("Redeclaration and Reinitialization ============================");

var num3 = 100;
num3 = 200;
console.log(num3);

let num4 = 100;
num4 = 200;
console.log(num3);

const num5 = 100;
export {};