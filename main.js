// Task 1: Advanced Array Filtering
function customFilterUnique(array, callback) {
    let result = [];
    let existsInArray = false;

    for (let i = 0; i < array.length; ++i) {
        let key = callback(array[i]);
        existsInArray = false;

        if (!key) continue;

        if (typeof key === "object") {
            for (let item of result) {
                if (compareObjects(item, array[i])) {
                    existsInArray = true;
                }
            }

            if (!existsInArray) {
                result.push(array[i]);
            }
            continue;
        }

        if (result.indexOf(key) === -1) {
            result.push(array[i]);
        }
    }

    return result;
}

function compareObjects(obj1, obj2) {
    if (typeof obj1 !== "object" && typeof obj2 !== "object")
        throw new Error("Pass objects as parameters");

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            if (!compareObjects(obj1[key], obj2[key])) return false;
        } else {
            if (obj1[key] !== obj2[key]) return false;
        }
    }

    return true;
}

let arrayOfObjects = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { a: 5, b: 6 },
    { e: 7, f: 8 },
    { g: 9, h: 0 }
];
const filterByPropertyA = (obj) => {
    if (!obj || typeof obj !== "object") throw new Error("pass an object as parameter")
    return Object.keys(obj).includes("a") ? obj : undefined
}
console.log(customFilterUnique(arrayOfObjects, filterByPropertyA));

// Task 2: Array Chunking
function chunkArray(array, chunkSize) {
    let result = [];
    let index = 0

    while (index < array.length) {
        result.push(array.slice(index, index + chunkSize));
        index += chunkSize;
    }

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
measureArrayPerformance(arrayOfObjects, arr => { customFilterUnique(arr, obj => filterByPropertyA(obj))})
