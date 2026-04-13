let arr = [1, 2, 4, 5, 7];
// Index:  0, 1, 2, 3, 4

console.log(arr);
console.log(arr.length);

// Accessing elements
console.log(arr[0]); // 1
console.log(arr[2]); // 4
console.log(arr[4]); // 7

// Arrays are mutable
arr[0] = 566;
console.log(arr);

// Strings are immutable (Demonstration)
let a = "Harry";
a[0] = "K"; // This will not change 'Harry' to 'Karry'
console.log(a);

// Type of array
console.log(typeof arr); // Returns "object"

// --- Array Methods ---

// 1. toString()
console.log(arr.toString());

// 2. join()
console.log(arr.join(" and "));

// 3. pop() - removes last element
let popped = arr.pop();
console.log(arr, popped);

// 4. push() - adds to end, returns new length
arr.push(100);
arr.push("Harry");
console.log(arr);

// 5. shift() - removes first element
arr.shift();
console.log(arr);

// 6. unshift() - adds to beginning
arr.unshift("Jack");
console.log(arr);

// 7. delete operator
delete arr[6];
console.log(arr);
console.log(arr.length); // Length stays same, index becomes empty/undefined

// 8. concat()
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];
console.log(a1.concat(a2, a3)); // Returns a new merged array

// 9. sort() - modifies original array
let s = [7, 9, 1, 8];
s.sort();
console.log(s);

// 10. splice() - (start, count, addItems...)
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2); // Removes 2 and 3
console.log(numbers);

numbers.splice(1, 3, 222, 333); // Removes 3 items from index 1 and adds 222, 333
console.log(numbers);

// 11. slice() - returns a piece of array
console.log(numbers.slice(2));
console.log(numbers.slice(1, 3));

