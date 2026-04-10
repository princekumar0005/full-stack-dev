// PRACTICE QUESTION 1: MULTIPLE OF 5 --- [01:03:00]
let num = prompt("Enter a number:"); // User Input [01:04:20]

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5");
}

// ---. PRACTICE QUESTION 2: STUDENT GRADES --- [01:09:41]
let score = prompt("Enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else {
    grade = "F";
}

console.log("According to your scores, your grade was:", grade); 
