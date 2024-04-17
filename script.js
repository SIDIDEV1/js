
const moyenne = (notes) => {
    let sum = 0

    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

class Student {
    ecole = 'vinci'
    _notes = []

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    set notes(v) {
        if (Array.isArray(v)) {
            this._notes = v
        }
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    canPass() {
        return moyenne(this._notes) >= 10
    }
}


const jonh = new Student('sidi', 'mariko')
const jane = new Student('jane', 'mariko')
jonh.notes = [10]
jane.notes = [10, 12, 12, 1]

console.log(jonh.name);
console.log(jane.canPass());
