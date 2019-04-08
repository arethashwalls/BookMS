const { Book } = require('../../../../models');

module.exports = {
    viewBook: (req, res) => {
        const { url_title } = req.params;
        Book.findOne({url_title})
        .then(book => {
            res.json(book)
        })
        .catch(err => console.log(err));
    }
}