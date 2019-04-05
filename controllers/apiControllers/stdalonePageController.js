const { User, Book } = require('../../models');

module.exports = {
    getAllStdalonePages: (req, res) => {
        User.findOne({})
        .populate('books')
        .then(user => {
           if(user.books.length > 0) user.books.forEach(book => book.populate('stdalone_pages'));
           res.json(user);
        })
        .catch(err => console.log(err))
    }
}