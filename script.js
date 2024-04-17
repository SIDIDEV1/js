
const moyenne = (notes) => {
    let sum = 0

    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

class Student {
    ecole = 'vinci'

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    setNotes(notes) {
        this.notes = notes
    }

    canPass() {
        return moyenne(this.notes) >= 10
    }
}


const jonh = new Student('sidi', 'mariko')
const jane = new Student('jane', 'mariko')
jonh.setNotes([19, 12, 18, 20])
jane.setNotes([10, 12, 12, 1])

console.log(jonh.canPass());
console.log(jane.canPass());
