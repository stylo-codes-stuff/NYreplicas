/*all the shellgames but in js rather then python*/
const word = ["D","E","I","T","Y"]
const guess = ["D","E","I","Y","T"]
const array1 = [1,2,3]
const array2 = [3,4,5]
const test = [1,2,1,2,1,2,1,1]
const itemCounter = (array, index) => {
    return array.filter((x) => x == index).length;
};
console.log(guess.includes("Z"))