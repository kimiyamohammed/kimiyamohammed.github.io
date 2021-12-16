// let Book = require('../models/book');


// exports.save = function(req,res,next){
//     let obj = req.body;
//     let newBook = new Book(null, obj.title, obj.ISBN, obj.publishedDate, obj.author).saveBook();
//     res.status(200).json(newBook);
// };

// exports.fetchAll = function(req,res,next){
//     res.status(200).json(Book.fetchAllBooks());
// };
// exports.fetchBook = function(req,res,next){
//     let bid = req.params.id;
//     res.status(200).json(Book.fetchBook(bid));
// };
// exports.edit = function(req,res,next){
//     let bid = req.params.id;
//     let newObj = req.body;
//     let editedBook = new Book(bid, newObj.title,newObj.ISBN, newObj.publishedDate, newObj.author);
//     res.status(200).json(Book.editBook(bid));
// };


const Book = require('../models/book');

exports.fetchAllBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAllBooks());
}

exports.fetchBook = (req, res, next) => {
    res.status(200).json(Book.fetchBook(req.params.bookId));
}

exports.saveBook = (req, res, next) => {
    const book = req.body;
    const newBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).saveBook();
    res.status(201).json(newBook);
}

exports.updateBook = (req, res, next) => {
    const book = req.body;
    const updatedBook = new Book(req.params.bookId, book.title, book.ISBN, book.publishedDate, book.author).editBook();
    res.status(200).json(updatedBook);
}

exports.deleteBook = (req, res, next) => {
    Book.deleteBook(req.params.bookId);
    res.status(200).end();
}