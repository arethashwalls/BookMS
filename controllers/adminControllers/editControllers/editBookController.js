const { Book } = require('../../../models');

module.exports = {
    updateBook: (req, res) => {
        const { alias } = req.params;
        const { title } = req.body.data;
        Book.findOneAndUpdate({alias}, { $set: { title }})
        .then(result => res.sendStatus(200))
        .catch(err => res.sendStatus(404));
    }
}