const inputArrString: string[] = ["a", "b", "c", "b", "b", "c", "c", "c", "a", "c"];
const inputArrNumber: number[] = [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 9, 6 , 6];


const findFrequency = (inputArr:string[]|number[]) : {} => {
    const counter = {};

    inputArr.forEach(e => {
        counter[e] ? counter[e]++ : counter[e] = 1;
    })

    return counter;
}

console.log(findFrequency(inputArrString));
console.log(findFrequency(inputArrNumber));