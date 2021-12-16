let books = [];

module.exports = class Book {

    constructor( id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    saveBook() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    editBook() {
        const index = books.findIndex(b => b.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAllBooks() {
        return books;
    }

    static fetchBook(bid) {
        const index = books.findIndex(b => b.id === bid);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteBook(bid) {
        const index = books.findIndex(b => b.id === bid);
        if (index > -1) {
            books = books.filter(b => b.id !== bid);
        } else {
            throw new Error('NOT Found');
        }
    }

}