//Tuple
let arr7 : [number, string] = [12, "Marks"];

for(let i = 0; i < arr7.length; i++)
{
    console.log(arr7[i]);
    
}

console.log("=====================");

for (let i of arr7)
{
    console.log(i);
    
}

console.log("===================");

for (let i in arr7)
{
    console.log(arr7[i]);
    
}