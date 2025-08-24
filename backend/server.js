const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5005;

// Get routes

app.get('/', (req, res) => {
    res.send('Номын дэлгүүрийн API ажиллаж байна!');
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