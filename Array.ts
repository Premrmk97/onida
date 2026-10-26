//Mutable
//Way1
let arr : number[]; //Array Declaration 
arr  = [];   // Array Initialized 

arr[0] = 10; //Assigning Values
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log(arr); //Calling the arr to check the elements stored in array

//Way2
let arr2 : number[] = [10, 20, 33, 44, 55, 66, 77]

console.log(arr2);

//Array with Union Types

let arr3 : (number|string|boolean)[] = [1, 1, 11, 22, 33, true, "Ts", "Js", "Java", false]

console.log(arr3);

//Generics <>

let arr4 : Array<string> = ["Python", "Java", "CSharp", "C++"];
console.log(arr4);

//Generics with Union

let arr5 : Array<string|number> = [11, 23, 45, "Welcome" , "to", "Array", "Tutorial"]
console.log(arr5);
console.log(arr5.length);
//iteration 
//traditional for loop

for (let i = 0; i < arr5.length; i++)
{
    console.log(arr5[i]);
    
}
//Advanced for loop
console.log("===================");

for (let i of arr5)
{
    console.log(i);
    
}

console.log("===================");

for (let i in arr5)
{
    console.log(arr5[i]);
    
}

//Array with any type

let arr6 : any[] = [1, "Aim", true, 3476642736238n]
console.log(arr6);

