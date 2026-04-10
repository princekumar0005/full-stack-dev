

// 1. ARITHMETIC OPERATORS
// Used for mathematical calculations
let a = 10, b = 5;

console.log("Addition (a + b):", a + b);        // Adds values → 15
console.log("Subtraction (a - b):", a - b);     // Subtract → 5
console.log("Multiplication (a * b):", a * b);  // Multiply → 50
console.log("Division (a / b):", a / b);        // Divide → 2
console.log("Modulus (a % b):", a % b);         // Remainder → 0
console.log("Exponent (a ** b):", a ** b);      // Power → 10^5 = 100000



// 2. ASSIGNMENT OPERATORS
// Used to assign and update values
let x = 10;

x += 5;  // same as x = x + 5
console.log("x += 5:", x); // 15

x -= 3;  // x = x - 3
console.log("x -= 3:", x); // 12

x *= 2;  // x = x * 2
console.log("x *= 2:", x); // 24

x /= 4;  // x = x / 4
console.log("x /= 4:", x); // 6



// 3. COMPARISON OPERATORS
// Used to compare values → result is true or false
let p = 5;
let q = "5";

console.log("p == q:", p == q);   
// true → only checks value (type ignored)

console.log("p === q:", p === q); 
// false → checks value + type (strict comparison)

console.log("p != q:", p != q);   
// false → values are equal

console.log("p !== q:", p !== q); 
// true → type is different

console.log("p > 3:", p > 3);     
// true

console.log("p < 3:", p < 3);     
// false



// 4. LOGICAL OPERATORS
// Used to combine multiple conditions
let isTrue = true;
let isFalse = false;

console.log("AND (&&):", isTrue && isFalse); 
// true only if BOTH are true → false

console.log("OR (||):", isTrue || isFalse);  
// true if ANY one is true → true

console.log("NOT (!):", !isTrue);            
// reverses value → false



// 5. INCREMENT / DECREMENT
let num = 5;

console.log("num++:", num++); 
// Post-increment → first print, then increase → 5

console.log("After num++:", num); 
// now becomes 6

console.log("++num:", ++num); 
// Pre-increment → first increase, then print → 7

console.log("num--:", num--); 
// Post-decrement → print 7, then decrease

console.log("After num--:", num); 
// now becomes 6



// 6. STRING OPERATOR
// Used to join strings (concatenation)
let first = "Hello";
let second = "World";

console.log("Concatenation:", first + " " + second); 
// Output → Hello World



// 7. TYPE OPERATOR
// typeof tells the data type
console.log(typeof "Hello"); // string
console.log(typeof 123);     // number
console.log(typeof true);    // boolean



// 8. TERNARY OPERATOR
// Shortcut for if-else
let age = 18;

let result = (age >= 18) ? "Adult" : "Minor";
// If condition true → "Adult", else → "Minor"

console.log("Age Check:", result);



// 9. BITWISE OPERATORS
// Work on binary (0 and 1)
let m = 5; // 101
let n = 1; // 001

console.log("AND (&):", m & n); 
// 101 & 001 = 001 → 1

console.log("OR (|):", m | n);  
// 101 | 001 = 101 → 5

console.log("XOR (^):", m ^ n); 
// different bits → 100 → 4

console.log("NOT (~):", ~m);    
// flips bits → -6

console.log("Left Shift (<<):", m << 1); 
// shift left → multiply by 2 → 10

console.log("Right Shift (>>):", m >> 1); 
// shift right → divide by 2 → 2



// 10. NULLISH COALESCING (??)
// Returns right value if left is null or undefined
let val = null;

console.log(val ?? "Default Value"); 
// Output → Default Value



// 11. OPTIONAL CHAINING (?.)
// Prevents error if property doesn't exist
let user = {
    name: "John",
    address: {
        city: "Delhi"
    }
};

console.log(user?.address?.city); 
// Safe access → Delhi

console.log(user?.contact?.phone); 
// No error → undefined



// 12. SPREAD OPERATOR (...)
// Expands elements
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log("Spread:", arr2); 
// Output → [1,2,3,4,5]



// 13. REST OPERATOR (...)
// Collects multiple values into one array
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum:", sum(1, 2, 3, 4)); 
// Output → 10

