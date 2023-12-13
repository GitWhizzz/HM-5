// Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

function reverseArray(numbersArray) {
    for (let i = 0, j = numbersArray.length - 1; i < j; i++, j--) {
        let temp;
        temp = numbersArray[i];
        numbersArray[i] = numbersArray[j];
        numbersArray[j] = temp;
    }
    return numbersArray;
}

console.log(reversedArray); // [5, 4, 3, 2, 1]