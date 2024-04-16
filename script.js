const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

const moyenne = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

const range = (a, b) => {
    return b.moyenne - a.moyenne
}

for (let student of students) {
    student.moyenne = moyenne(student.notes)
}

console.log(students.sort(range))

