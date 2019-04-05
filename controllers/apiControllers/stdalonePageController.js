const { Book } = require('../../models');

module.exports = {
    getAllStdalonePages: (req, res) => {
        Book.find({}, 'title stdalone_pages')
        .populate('stdalone_pages')
        .then(books => res.json(books))
        .catch(err => console.log(err));
    }
}