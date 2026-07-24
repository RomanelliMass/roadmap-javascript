function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead === true

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'is read' : 'not read yet'}`
    }
}

const Hobbit = new Book('Hobbit', 'J.R.R Tolkien', 295, true)
console.log(Hobbit)
console.log(Hobbit.info())