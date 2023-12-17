const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

const calculateAverageGrade = studentsArray => ((studentsArray.reduce((acc, student) => acc + student.grade, 0)) / studentsArray.length).toFixed(1);

console.log(calculateAverageGrade(students)); // 4.4
