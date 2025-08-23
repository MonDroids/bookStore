const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get routes

app.get('/', (req, res) => {
    res.send('Номын дэлгүүрийн API ажиллаж байна!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB холболт амжилттай!');
        app.listen(PORT, () => {
            console.log(`Сервер ${PORT} порт дээр ажиллаж байна.`);
        });
    })
    .catch((err) => {
        console.error('MongoDB холболт алдаа:', err);
    });