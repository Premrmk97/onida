let n1: number = 10;
console.log(typeof n1);

let n2: bigint = 6566567587575756767676767677n;
console.log(typeof n2);
console.log(n2);

let userName: string = "Prem";
console.log(`You ${userName} are most Welcome to ts Tutorial`);

let n3: boolean = true;
console.log(typeof n3);

let n4: bigint | string = 17861n;
n4 = "true";
console.log(typeof n4);

let n5: undefined;
console.log(n5);

let str1: any = "TypeScript";
console.log(str1.toUpperCase());

let str2: unknown = "TypeScript";
if (typeof str2 === "string") 
    {
  console.log(str2.toUpperCase());
}

export {};