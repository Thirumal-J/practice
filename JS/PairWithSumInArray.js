const arr = [2, [5, 6], [7, 13], 14];
const updatedArr = arr.flat();
const sum = 14;

let isSumAvailable = (arr, sum) => {
  let result = false;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr.includes(sum - arr.pop())) {
      result = true;
      return result;
    }
  }
  return result;
}
console.log(isSumAvailable(updatedArr, sum));