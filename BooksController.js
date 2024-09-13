const BooksModel = require('./BooksModel');

//Get

module.exports.getAllBooks = async(req, res) => {
    const myBooks = await BooksModel.find();
    res.send(myBooks)
}

//POST

module.exports.addBook = async(req, res) => {
    const { title } = req.body;
    BooksModel.create({ title })
    .then((data) => { console.log('Book added');
    res.send(data)
    })   
}

//DELETE

module.exports.deleteBook = async(req, res) => {
    const {_id} = req.body
    BooksModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a book'))
}

//EDIT

module.exports.editBook = async(req, res) => {
    const{_id, title} = req.body;
    BooksModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a book'))
}