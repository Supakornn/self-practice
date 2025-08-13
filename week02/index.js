// Object comparison in JavaScript

// 1. Shadiow Equality
let book1 = {
    isbn: 123456789,
    title: "JavaScript"
};

let book2 = {
    isbn: 123456789,
    title: "JavaScript"
};

function shadowEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log(shadowEquality(book1, book2));

// 2. Deep Equality

let book3 = {
    isbn: 123456789,
    title: "JavaScript",
    author: {
        name: "John Doe",
        age: 30
    }
};

let book4 = {
    isbn: 123456789,
    title: "JavaScript",
    author: {
        name: "John Doe",
        age: 30
    }
};

function deepEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (typeof object1[key] === "object" && typeof object2[key] === "object") {
            if (!deepEquality(object1[key], object2[key])) {
                return false;
            }
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

console.log(deepEquality(book3, book4));

// 3. JSON.stringify

let book5 = {
    isbn: 123456789,
    title: "JavaScript",
    author: {
        name: "John Doe",
        age: 30
    }
};

let book6 = {
    isbn: 123456789,
    title: "JavaScript",
    author: {
        name: "John Doe",
        age: 30
    }
};

console.log(JSON.stringify(book5) === JSON.stringify(book6));
