const mongoose = require('mongoose');

// номын схемиийг тодорхойлох
const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: false
    },
},
    {
        timestamps: true,
    }
);

const Book = mongoose.model('Book', bookScheme);
module.exports = Book;
