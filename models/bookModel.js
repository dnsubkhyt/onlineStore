const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema({
    _id: {type: Number, unique: true, required: true},
    title: { type: String, required: true },
    author: { type: String, required: true},
    year: { type: Number, required:true},
    genre: { type: [String], required: true}
  }, { versionKey: false });

const Book = mongoose.model('library', librarySchema)

module.exports = Book