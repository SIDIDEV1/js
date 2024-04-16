const students = [
    {
        name: "John",
        notes: [1, 20, 18, 19, 12],
    },
    {
        name: "Jane",
        notes: [17, 18, 20, 13, 15],
    },
    {
        name: "Sophie",
        notes: [17, 12, 14, 15, 13],
    },
    {
        name: "Marc",
        notes: [2, 3, 5, 8, 9],
    },
    {
        name: "Manon",
        notes: [18, 17, 18, 19, 12],
    },
];

const moyenne = (notes) => {
    let sum = 0;
    for (let note of notes) {
        sum = sum + note;
    }
    return sum / notes.length;
};

const range = (a, b) => {
    return b.moyenne - a.moyenne;
};

for (let student of students) {
    student.moyenne = moyenne(student.notes);
}

students.sort(range);

const formatStudents = (student) => {
    return `${student.name} a une moyen de ${student.moyenne}/20. La note max : ${Math.max(...student.notes)} et min : ${Math.min(...student.notes)}`;
};

console.log(students);

console.log(`Le top 3 de la classe sont : 
1 : ${formatStudents(students[0])}
2 : ${formatStudents(students[1])}
3 : ${formatStudents(students[2])}
`);
