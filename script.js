class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get perimeter() {
        return (this.width + this.height) * 2
    }

    get isValid() {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan(c) {
        return this.perimeter > c.perimeter
    }
}


class Square extends Rectangle {
    constructor(width) {
        super(width, width)
    }

}


const r = new Rectangle(10, 20);
console.log(r.perimeter) // 60
console.log(r.isValid) // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid) // false
const c = new Square(10);
console.log(c.perimeter) // 40
console.log(r.isBiggerThan(c)) // true