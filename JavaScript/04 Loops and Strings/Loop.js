// JavaScript Loops 

console.log("I am a tutorial on loops");

// 1. THE CLASSICAL FOR LOOP 
// Syntax: for (initialization; condition; iteration)
console.log("--- Classical For Loop ---");
let a = 1;
for (let i = 0; i < 100; i++) {
    // This will print numbers from 1 to 100
    console.log(a + i);
}


// 2. FOR-IN LOOP 
// Best for: Iterating over keys (properties) of an OBJECT
console.log("--- For-In Loop (Objects) ---");
let obj = {
    name: "Prince",
    role: "Programmer",
    company: "Google AI"
};

for (const key in obj) {
    const element = obj[key];
    console.log(key, ":", element);
}


// 3. FOR-OF LOOP 
// Best for: Iterating over values of an ITERABLE (String, Array)

console.log("--- For-Of Loop (Strings/Arrays) ---");
for (const c of "Yash") {
    console.log(c);
}


// 4. WHILE LOOP 
// Checks condition BEFORE executing the block
console.log("--- While Loop ---");
let i = 0;
while (i < 6) {
    console.log(i);
    i++;
}

// 5. DO-WHILE LOOP 
// Executes the block ONCE before checking the condition

console.log("--- Do-While Loop ---");
let j = 10;
do {
    console.log(j);
    j++;
} while (j < 6); 
// Note: Even though 10 is not < 6, it prints 10 once.
