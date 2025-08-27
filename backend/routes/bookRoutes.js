const express = require('express'); // Express -г импортлох
const router = express.Router();//Router үүсгэх
const { createBook, getAllBook, deleteBook, updateBook} = require('../controllers/bookController');
// энэ кодонд номын маршрутуудыг тодорхойлж байна.
router.post('/', createBook);
router.get('/', getAllBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;

