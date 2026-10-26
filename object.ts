// --- 1. Basic JavaScript Object with Methods ---
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

console.log(User);
console.log(User.name); // Dot Notation 
console.log(User["age"]); // Bracket Notation 
User.printDetails();
User.getDetails();


// --- 2. Inline Type Objects (TypeScript) ---
const User1: {
    name: string;
    age: number;
    address: string;
    getDetails: () => void;
    printDetails: () => void;
} = {
    name: "Aishu",
    age: 12,
    address: "Coimbatore",
    getDetails: function () {
        console.log("Function 1");
    },
    printDetails: () => {
        console.log("Function 2");
    }
}

console.log(User1.name);


const User2: {
    name: string;
    age: number;
    address: string;
    getDetails: () => void;
    printDetails: () => number;
} = {
    name: "Aishu12",
    age: 13,
    address: "Chennai",
    getDetails: function() {
        console.log("Function 3");
    },
    printDetails: () => {
        return 2 + 3;
    }
}

console.log(User2.name);


// --- 3. Type Alias (Predefined Object Structure) ---
type BasicInfo = {
    name: string;
    age: number;
    address: string;
    getDetails: () => void;
}

const UserInfo1: BasicInfo = {
    name: "Anu",
    age: 12,
    address: "Trichy",
    getDetails: function() {
        console.log(`Your Details : \n            ${this.name}\n            ${this.age}\n            ${this.address}`);
    }
}

const UserInfo2: BasicInfo = {
    name: "Ammu",
    age: 12,
    address: "Trichy",
    getDetails: function() {
        console.log(`Your Details : \n            ${this.name}\n            ${this.age}\n            ${this.address}`);
    }
}

const UserInfo3: BasicInfo = {
    name: "Ajith",
    age: 12,
    address: "Trichy",
    getDetails: function() {
        console.log(`Your Details : \n            ${this.name}\n            ${this.age}\n            ${this.address}`);
    }
}

// --- Console Logs for Type Alias Objects ---
console.log(UserInfo1);
console.log(UserInfo1.name);
console.log(UserInfo1["age"]);

console.log(UserInfo2);
console.log(UserInfo2.name);
console.log(UserInfo2["age"]);

console.log(UserInfo3);
console.log(UserInfo3.name);
console.log(UserInfo3["age"]);

export {};