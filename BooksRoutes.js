const { Router } = require("express");
const { getAllBooks, addBook, deleteBook, editBook } = require('./BooksController')

const router = Router();

router.get('/', getAllBooks);
router.post('/addBook', addBook);
router.post('/deleteBook', deleteBook); 
router.put('/editBook', editBook); 

module.exports = router;