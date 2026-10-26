// --- 1. Object Mutation (Update, Delete, Add) ---
const User = {
    name: "Aishwarya",
    age: 35,
    address: "Chennai",

    getDetails: function() {
        console.log(`Your Name is ${this.name} and age is ${this.age} and ${this.address}`);
    },

    printDetails: () => {
        console.log(`Your Name is ${User.name} and age is ${User.age} and ${User.address}`);
    }
}; 

// Updating
User.name = "Asma";
console.log(User);

// Deleting
delete User.age;
console.log(User);

// Adding to a new object
let obj: { name?: string; age?: number } = {};
obj.name = "Prem";
obj.age = 20;
console.log(obj);


// --- 2. Iterating with For-In Loop ---
/*
for (let i in User) {
    console.log(User[i]);
}
*/


// --- 3. TypeScript Intersection Types (&) ---
type Marks = {
    English: number;
    Tamil: number;
    Math: number;
}

type BasicProfile = {
    name: string;
    age: number;
    address?: string;
}

const User1: BasicProfile & Marks = {
    name: "Vaishnav",
    age: 10,
    English: 20,
    Tamil: 30,
    Math: 40
};


// --- 4. Complex Nested Objects, Arrays, and Methods ---
type DetailedProfile = {
    name: string;
    age: number;
    address?: string;
    marks: number[];
    getDetails: () => void;
    getExtraCurriculamDetails: {  
        sports: string;
        yoga: boolean;
        swimming: boolean;
        getInfo: () => void;
    }; 
}

const Student1: DetailedProfile = {
    name: "Ravi",
    age: 13,
    marks: [10, 20, 30, 40, 50, 60],
    
    getDetails: function() {
        console.log(`Ravi's Marks are ${this.marks}`);
    },
    
    getExtraCurriculamDetails: {
        sports: "Cricket",
        yoga: true,
        swimming: false,

        getInfo: function(): void {
            // Note: 'this' inside a regular function refers to 'getExtraCurriculamDetails', 
            // while Student1.age accesses the outer object property.
            console.log(`Ravi Extra Activities are ${this.sports} and ${this.swimming} and age is ${Student1.age}`);
        }
    }
};

console.log(Student1);
console.log("====");
console.log(Student1.getExtraCurriculamDetails);
console.log("====");
Student1.getDetails();
console.log("====");
Student1.getExtraCurriculamDetails.getInfo();

export {};