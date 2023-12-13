// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).
const array1 = [0, 1, 2, 3, 0, 4, 5];
const array2 = [3, 4, 5, 6, 7, 10, 1];
const uniqueValuesArray = uniqueValues(array1, array2);

function uniqueValues(array1, array2) {
    const mergedArray = array1.concat(array2);
    let uniqueArray = [];

    for (let element of mergedArray) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        };
    };

    return uniqueArray;
}

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
