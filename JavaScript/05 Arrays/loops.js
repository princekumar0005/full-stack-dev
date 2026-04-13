let a = [1, 93, 5, 6, 88];

// 1. Classical For Loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

// 2. forEach Loop
a.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// 3. for...in Loop (Used for objects)
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// 4. for...of Loop (Directly for arrays)
for (const value of a) {
    console.log(value);
}

