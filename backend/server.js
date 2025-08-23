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
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB амжилттай холбогдлоо!');
}).catch((err) => {
    console.error('MongoDB холболтод алдаа гарлаа:', err);
});