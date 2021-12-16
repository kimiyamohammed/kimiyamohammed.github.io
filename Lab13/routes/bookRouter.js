const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.fetchAllBooks);

 router.get('/:bookId', bookController.fetchBook);

router.post('/', bookController.saveBook);

router.put('/:bookId', bookController.updateBook);

router.delete('/:bookId', bookController.deleteBook);

module.exports = router;