// JavaScript Strings 

console.log("This is Strings tutorial");

// 1. BASICS & CHARACTER ACCESS 
let a = "Rohit";
console.log(a[0]); // R
console.log(a[1]); // o
console.log(a[2]); // h
console.log(a[3]); // i
console.log(a[4]); // t
console.log(a[5]); // undefined (JavaScript is "forgiving")

// Property: Length
console.log(a.length); // 5



// 2. TEMPLATE LITERALS & INTERPOLATION 

let real_name = "Yash";
let friend = "Rohan";

// Old way (Concatenation)
console.log("His name is " + real_name + " and his friends name is " + friend);

// Modern way (Template Literals using Backticks)
console.log(`His name is ${real_name} and his friends name is ${friend}`);



// 3. ESCAPE SEQUENCE CHARACTERS 

let b = "Roha\"n";   // Using \" to include a double quote
let c = "Rohan\nKumar"; // \n for a New Line
let d = "Rohan\tKumar"; // \t for a Tab space


// 4. STRING METHODS 
// Note: Strings are IMMUTABLE. Methods return NEW strings.
let name = "Shivam";

// Case Conversion
console.log(name.toUpperCase()); // SHIVAM
console.log(name.toLowerCase()); // shivam

// Slice (Extracting a part)
console.log(name.slice(1, 5)); // hiva (Index 1 included, 5 excluded)
console.log(name.slice(1));    // hivam (From index 1 to the end)

// Replace
console.log(name.replace("S", "77")); // 77hivam (Replaces only first occurrence)

// Concatenate
let a1 = "Harry";
console.log(name.concat(a1, "Aishwarya", "Rahul", "Priya")); 

// Trim
let whiteSpaceStr = "   hello   ";
console.log(whiteSpaceStr.trim()); // "hello"



// 5. ADDITIONAL USEFUL METHODS 
let original = "Shivam";

console.log(original.charAt(0));      // S
console.log(original.indexOf("h"));   // 1
console.log(original.startsWith("Shi")); // true
console.log(original.endsWith("am"));   // true



// 6. IMMUTABILITY CHECK 

let immutCheck = "Prince";
immutCheck[0] = "K"; // This will NOT throw an error, but it won't work
console.log(immutCheck); // Still "Prince"
