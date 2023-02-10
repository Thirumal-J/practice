const arr: (number | number[])[] = [2, [5, 6], [7, 13], 14];
const updatedArr: number[] = arr.flat();
const sum: number = 14;

let isSumAvailable = (arr: number[], sum: number): boolean => {
  let result: boolean = false;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr.includes(sum - arr.pop())) {
      result = true;
      return result;
    }
  }
  return result;
};
console.log(isSumAvailable(updatedArr, sum));
