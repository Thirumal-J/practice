var arr = [2, [5, 6], [7, 13], 14];
var updatedArr = arr.flat();
var sum = 14;
var isSumAvailable = function (arr, sum) {
    var result = false;
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr.includes(sum - arr.pop())) {
            result = true;
            return result;
        }
    }
    return result;
};
console.log(isSumAvailable(updatedArr, sum));
