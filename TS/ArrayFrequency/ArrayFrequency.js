var inputArrString = ["a", "b", "c", "b", "b", "c", "c", "c", "a", "c"];
var inputArrNumber = [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 9, 6, 6];
var findFrequency = function (inputArr) {
    var counter = {};
    inputArr.forEach(function (e) {
        counter[e] ? counter[e]++ : counter[e] = 1;
    });
    return counter;
};
console.log(findFrequency(inputArrString));
console.log(findFrequency(inputArrNumber));
