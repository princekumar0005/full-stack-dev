let arr = [1, 3, 5, 7, 11, 13];

// --- Map ---
// Creates a new array by applying a function to every element
let newArr = arr.map((e, index, array) => {
    return e ** 2; // Returns squared values
});
console.log(newArr);

// --- Filter ---
// Filters array based on a condition
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven));

// --- Reduce ---
// Reduces array to a single value
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(red)); // Sums up elements: 21

// --- Array.from ---
// Converts an object (like a string or HTML collection) to an array
console.log(Array.from("Harry")); 
// Result: ["H", "a", "r", "r", "y"]

