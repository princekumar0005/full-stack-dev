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

