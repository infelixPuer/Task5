// Task 1: Advanced Array Filtering
function customFilterUnique(array, callback) {
    let uniqueSet = new Set();
    let result = [];

    for (let item of array) {
        let key = callback(item);

        if (!uniqueSet.has(key)) {
            uniqueSet.add(key);
            result.push(item);
        }
    }

    return result;
}

let obj1 = {
    name: "John",
    email: "john@example.com",
    city: "New York",
}
let obj2 = {
    name: "Jane",
    email: "jane@example.com",
    city: "Boston",
}
let obj3 = {
    name: "Adam",
    email: "adam@example.com",
    city: "Los Angeles",
}
let obj4 = {
    name: "Mike",
    email: "mike@example.com",
    city: "Boston",
}
let obj5 = {
    name: "Bob",
    email: "bob@example.com",
    city: "Seattle",
}

let array = [obj1, obj2, obj3, obj4, obj5];
console.log(customFilterUnique(array, (value) => value.city));
