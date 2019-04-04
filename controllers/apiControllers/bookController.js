const { Book } = require('../../models');

module.exports = {
    getAllBooks: (req, res) => {
        Book.find({})
        .populate('authors')
        .then(books => res.json(books))
        .catch(err => console.log(err));
    }
}