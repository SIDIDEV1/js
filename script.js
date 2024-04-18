class Book {
    #page = 1

    constructor(title, pages) {
        this.title = title
        this.pages = pages
    }

    get page() {
        return this.#page
    }

    nextPage() {
        if (this.#page < this.pages) {
            this.#page++
        }
    }

    close() {
        this.#page = 1
    }
}


class Library {
    #books = []

    addBook(b) {
        this.#books.push(b)
    }

    addBooks(books) {
        for (let book of books) {
            this.addBook(book)
        }
    }

    findBooksByLetter(l) {
        console.log(l);
        find = []
        for (let book of this.#books) {
            if (book.title[0].toLowerCase() === l.toLowerCase()) {
                find.push(book)
            }
        }
        return find
    }
}



const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter(''))