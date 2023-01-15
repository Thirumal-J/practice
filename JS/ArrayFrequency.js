const inputArr = ["a", "b", "c", "b", "b", "c", "c", "c", "a", "c"];
const inputArr2 = [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 9, 6 , 6];


function findCharFrequency(inputArr) {
    const counter = {};

    inputArr.forEach(e => {
        counter[e] ? counter[e]++ : counter[e] = 1;
    })

    return counter;
}

console.log(findCharFrequency(inputArr));
console.log(findCharFrequency(inputArr2));