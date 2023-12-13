// Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.
const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(studentsArray) {
    const count = studentsArray.length;
    let sum = 0;

    for (let element of studentsArray) {
        sum += element.grade;
    }

    return (sum / count).toFixed(1);
}

console.log(calculateAverageGrade(students)); // 4.4