books=[];
module.exports = class Book{
    constructor( id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }
    saveBook(){}
    fetchAllBooks(){}
    removeBook(){}
    editBook(){}
}