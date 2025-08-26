const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Book = require('./model/Book');

const app = express();
const PORT = process.env.PORT || 5005;

// Get routes

app.get('/', (req, res) => {
    res.send('Номын дэлгүүрийн API ажиллаж байна!');
    res.sendStatus(200);
    console.log(`http://localhost:${PORT} server ene port dr ajillaj bn!`);
});
// Tur zuuriin data
app.get('/test-add-book', async (req, res) => {
    try {
        const newBook = new Book({
            title: 'Тестийн ном',
            author: 'Тестийн зохиолч',
            year: 2023,
            price: 10000,
            description: 'Энэ бол тестийн номын тайлбар.',
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.error('Ном нэмэхэд алдаа гарлаа:', error);
        res.status(400).json({ error: 'Ном нэмэхэд алдаа гарлаа.' });
    } 
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB амжилттай холбогдлоо!');
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT} Сервер порт дээр ажиллаж байна!`);
    })
}).catch((err) => {
    console.error('MongoDB холболтод алдаа гарлаа:', err);
});