// Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

function reverseArray(numbersArray) {
    return [...numbersArray].reverse();
}

console.log(reversedArray); // [5, 4, 3, 2, 1]
