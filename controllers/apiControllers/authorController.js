const { User } = require('../../models');

module.exports = {
    getAllAuthors: (req, res) => {
        User.findOne({})
        .populate('authors')
        .then(authors => res.json(authors))
        .catch(err => console.log(err));
    }
}