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

// Task 2: Array Chunking
function chunkArray(array, chunkSize) {
    let result = [];
    let i, j = 0;

    for (i = 0, j = 0; i < array.length; i += chunkSize, ++j)
        result[j] = array.slice(i, i + chunkSize);

    return result;
}

let arrayToBeChunked= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunkArray(arrayToBeChunked, 3));

// Task 3: Array Shuffling
function customShuffle(array) {
    let result = [];

    for (let i = array.length; i > 0; --i) {
        let randNum = Math.floor(Math.random() * (array.length));

        result.push(array[randNum]);
        array.splice(randNum, 1);
    }

    return result;
}

let arrayToBeShuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(customShuffle(arrayToBeShuffled));