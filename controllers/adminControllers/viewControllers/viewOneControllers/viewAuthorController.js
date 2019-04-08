const { Author } = require('../../../../models');

module.exports = {
    viewAuthor: (req, res) => {
        const { alias } = req.params;
        Author.findOne({alias})
        .then(author => {
            res.json(author)
        })
        .catch(err => console.log(err));
    }
}