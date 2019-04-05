const { User, Book } = require('../../models');

module.exports = {
    getAllStdalonePages: (req, res) => {
        User.findOne({})
        .populate('books')
        .then(books => {
           if(books.length > 0) books.forEach(book => book.populate('stdalone_pages'));
        })
        .then(books => res.json(books))
        .catch(err => console.log(err))
    }
}