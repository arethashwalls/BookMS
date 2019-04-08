const { Author } = require('../../../../models');

module.exports = {
    viewAuthor: (req, res) => {
        const { id } = req.params;
        Author.findById(id)
        .then(author => {
            res.json(author)
        })
        .catch(err => console.log(err));
    }
}