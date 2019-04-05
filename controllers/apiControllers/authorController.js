const { Author } = require('../../models');

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err));
    }
}