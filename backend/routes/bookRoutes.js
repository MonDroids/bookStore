const express = require('express');
const router = express.Router();
const { createBook, getAllBook } = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getAllBook);

module.exports = router;