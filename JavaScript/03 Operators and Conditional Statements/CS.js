// . CONDITIONAL STATEMENTS --- 
let age = 25;

// If-Else Statement
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote"); 
}

// Else-If Statement (Multiple conditions) [00:51:03]
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else {
    color = "white";
}
console.log(color);

// --- . TERNARY OPERATOR --- 
// condition ? trueOutput : falseOutput
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// --- 9. PRACTICE QUESTION 1: MULTIPLE OF 5 --- [01:03:00]
let num = prompt("Enter a number:"); // User Input [01:04:20]

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5");
}
