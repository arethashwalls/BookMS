const { User } = require('../../models');

module.exports = {
    getAllBooks: (req, res) => {
        User.findOne({})
        .populate('books')
        .then(books => res.json(books))
        .catch(err => console.log(err));
    }
}