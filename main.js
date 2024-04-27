// Task 1: Advanced Array Filtering
function customFilterUnique(array, callback) {
    let uniqueSet = new Set();
    let result = [];

    for (let i = 0; i < array.length; ++i) {
        let key = callback(array[i]);

        if (!uniqueSet.has(key)) {
            uniqueSet.add(key);
            result.push(array[i]);
        } else {
            const index = result.findIndex(item => callback(item) === key);
            result.splice(index, 1);
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

let arrayToBeFiltered = [obj1, obj2, obj3, obj4, obj5];
console.log(customFilterUnique(arrayToBeFiltered, (value) => value.city));

// Task 2: Array Chunking
function chunkArray(array, chunkSize) {
    let result = [];

    for (let i = 0, j = 0; i < array.length; i += chunkSize, ++j) {
        for (let k = 0; k < chunkSize; ++k) {
            result[j] = [];
            result[j][k] = array[i + k];
        }
    }

    // Second variant, less performant
    // for (let i = 0, j = 0; i < array.length; i += chunkSize, ++j)
    //     result[j] = array.slice(i, i + chunkSize);

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

// Task 4: Array Intersection and Union
function getArrayIntersection(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; ++i) {
        if (array2.indexOf(array1[i]) !== -1)
            result.push(array1[i]);
    }

    return result;
}

function getArrayUnion(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; ++i) {
        if (array1.lastIndexOf(array1[i]) !== array1.indexOf(array1[i]))
            continue;

        if (array2.indexOf(array1[i]) === -1) {
            result.push(array1[i]);
            continue;
        }

        if (array2.indexOf[array1[i]] !== array2.lastIndexOf(array1[i]))
            continue;

        if (result.indexOf(array1[i]) !== -1)
            continue;

        result.push(array1[i]);
    }

    for (let i = 0; i < array2.length; ++i) {
        if (array2.lastIndexOf(array2[i]) !== array2.indexOf(array2[i]))
            continue;

        if (array1.indexOf(array2[i]) === -1) {
            result.push(array2[i]);
            continue;
        }

        if (array1.indexOf[array2[i]] !== array1.lastIndexOf(array2[i]))
            continue;

        if (result.indexOf(array2[i]) !== -1)
            continue;

        result.push(array2[i]);
    }

    return result;
}

// Task 5: Array Performance Analysis
function measureArrayPerformance(array, func) {
    console.time(`${func.name}`);
    func(array);
    console.timeEnd(`${func.name}`);
}

let testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
measureArrayPerformance(testArray1, chunkArray);
measureArrayPerformance(testArray1, customShuffle);
measureArrayPerformance(testArray1, arr => { arr.map(value => value * value)})
measureArrayPerformance(testArray1, arr => { arr.filter(value => value % 2 === 0)})
measureArrayPerformance(arrayToBeFiltered, arr => { customFilterUnique(arr, value => value.city)})
