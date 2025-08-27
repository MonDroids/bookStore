const Book = require('../model/Book');

const createBook = async (req, res) => {
    try{
        const {title, author, publishedDate, genre, price, year, description, image} = req.body;
        const newBook = new Book({
            title,
            author,
            publishedDate,
            genre,
            price,
            year,
            description,
            image
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.error('Ном нэмэхэд алдаа гарлаа:', error);
        res.status(400).json({ error: error.message });
    }
};

const getAllBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error('Номыг авахад алдаа гарлаа:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createBook, getAllBook };