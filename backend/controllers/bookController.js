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

// Ном засах
const updateBook = async (req, res) => {
    try {
        const { id } = req.params; // URL-аас номын ID-г авна
        const { title, author, publishedDate, genre, price, year, description, image } = req.body; //Хүсэлтийн body -оос өгөдөл авах
        const updatedBook = await Book.findByIdAndUpdate(id, {
            title,
            author,
            publishedDate,
            genre,
            price,
            year,
            description,
            image
        }, //шинэ өгөгдлийг буцааж авах
        { new: true }); //шинэчилсэн номыг буцааж авах
        if (!updatedBook) {
            return res.status(404).json({ error: 'Ном олдсонгүй' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error('Ном засахад алдаа гарлаа:', error);
        res.status(500).json({ message: 'Ном засахад дотоод серверийн алдаа гарлаа' });
    }
};

// Ном устгах deleteBook controller функц

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params; // URL-аас номын ID-г авна
        const deletedBook = await Book.findByIdAndDelete(id); // ID-ээр номыг устгана
        if (!deletedBook) {
            return res.status(404).json({ error: 'Ном олдсонгүй' });
        }
        res.status(200).json({ message: 'Ном амжилттай устгагдлаа' });
    } catch (error) {
        console.error('Ном устгахад алдаа гарлаа:', error);
        res.status(500).json({ message: 'Ном устгахад дотоод серверийн алдаа гарлаа' });
    }
};

module.exports = { createBook, getAllBook, updateBook, deleteBook };