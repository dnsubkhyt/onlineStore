const Book = require('../models/bookModel')
const validateSchema = require('../config/joi')

exports.getBookbyId = async (req, res) => {
    try{
        const _id = req.params.id
        if(!_id) return res.status(404).json({message: 'Please specify the name of the book'})
        
        const book = await Book.findOne({_id})
        if (!book) return res.status(404).send({message: 'Such  book does not exist in our system'})
    
        res.send(book)
    } catch (err){
      res.status(500).send({message: 'Error fetching the book', err})
    }
  }


exports.getAllBooks = async (req, res)=>{
try {
    const books = await Book.find({})
    if (books.length === 0) return res.status(404).json({message: 'No Book Found!'})
    
    res.json(books)
    
    } catch(err){
    res.status(404).json({message: 'error: ', err})
}
}


exports.addBook = async (req, res) => {
    const { title, author, year, genre } = req.body;
    
    const {error} = validateSchema(req.body)
    if (error) return res.status(404).send({message: error.details[0].message})    
    
    try {
        const latestBook = await Book.findOne().sort({ _id: -1 }).limit(1)
        const customId = latestBook ? latestBook._id + 1 : 1
        
        const newBook = new Book({
        _id: customId,
        title,
        author,
        year,
        genre,
        });
        
        await newBook.save();
        console.log("✅ Book added successfully:", newBook);
        res.status(201).json({ message: 'Book added successfully!', book: newBook });

    } catch (err) {
        console.error("Error adding book:", err);  
        res.status(400).json({ message: 'Error adding book:', error: err });
    }
}
    
exports.updateBook = async (req, res) => {
    try {
    const bookId= req.params.id
    if(!bookId) return res.status(404).json({message: 'Provide the book ID'})
    
    const book = await Book.findOne({_id:bookId})
    if (!book) return res.status(404).send({message: 'Such  book does not exist in our system'})
    
    Object.assign(book, req.body)
    
    await book.save()
    res.status(200).send({message: 'Book updated successfully!'})
    } catch(error) {
        res.status(500).json({message: 'Error updating book: ', error: error})
    }
}
    
exports.deleteBook = async(req, res) => {
    try {
        const _id =  req.params.id
        if(!_id) return res.status(404).json({message: 'Please specify the name of the book'})
        
        const book = await Book.findOne({_id})
        if (!book) return res.status(404).send({message: 'Such  book does not exist in our system'})
    
        await Book.deleteOne({_id})
    
        res.json({message: 'Book deleted successfully'})
    } catch (err) {
        res.status(500).json({message: 'Server error', err})
    }
}
    