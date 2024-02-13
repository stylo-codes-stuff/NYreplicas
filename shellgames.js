/*all the shellgames but in js rather then python*/
const word = ["D","E","I","T","Y"]
const guess = ["D","E","I","Y","T"]
const array1 = [1,2,3]
const array2 = [3,4,5]
let good_letters = []
function correct_letters(guess,word){
    let i = 0;
        while (i < guess.length) {
            if (guess[i] == word[i]){
                good_letters.push(guess[i])
            }
            i++
        }
        return good_letters
}
function arrayIntersect (array1,array2){
    return array1.filter(value => array2.includes(value));
}
function arrayDiff(array1,array2){
    return array1.filter((element) => !array2.includes(element));

}
const text = "test"
console.log(text.split(""));