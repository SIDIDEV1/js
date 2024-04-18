class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height

        if (width <= 0 || height <= 0) {
            throw new Error('Vous n\'avez pas le droit d\'avoir une ou des dimensions negatives')
        }
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

try {
    const width = parseInt(prompt('Tapez la largeur : '), 10)
    const height = parseInt(prompt('Tapez la hauter : '), 10)
    const r = new Rectangle(width, height)
} catch (error) {
    console.log(error);
}

