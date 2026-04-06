// Basic Variable Declaration and Assignment
  
// Variables are containers that store values. There are two steps: declaration (let) and assignment (=). 
  
  
// Declaration
let x;

// Assignment
x = 100;

// Both together
let y = 123;

console.log(x); // 100
console.log(y); // 123

// Variable 

// Basic variable declaration
let fullName = "Tony Stark";
let age = 24;
let price = 99.99;
let x = null;
let y = undefined;
let isFollow = true;

// Variable naming rules (Case Sensitive) 
let full_name = "Shradha Khapra";
let FullName = "Aman Dhattarwal"; 

// Using let (Updated, but not re-declared) 
let currentAge = 24;
currentAge = 25; // Allowed

// Using const (Fixed value) 
const PI = 3.14;
// PI = 3.15; // This would cause an error

// Objects (Non-Primitive Data Types)

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
};

// Accessing and updating object keys 
console.log(student.fullName); // Using dot notation
console.log(student["age"]);    // Using square brackets

student.age = student.age + 1; // Updating a value
console.log(student.age); // Result: 21




