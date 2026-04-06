//Question 1: Create a Product Object (Amazon Style)
const product = {
    name: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);

//Question 2: Create a Profile Object (Instagram Style)

const profile = {
    username: "@princeshah",
    isFollow: false,
    followers: 123,
    following: 123
};

console.log(profile);
console.log(typeof profile["username"]); // "string"

//Question 3 :Displaying Variables on a Webpage

let fullName = "Distro";
let age = 21;
let isStudent = false;

document.getElementById("P1").textContent = `Your name is ${fullName}`;
document.getElementById("P2").textContent = `You are ${age} years old`;
document.getElementById("P3").textContent = `Enrolled: ${isStudent}`;

