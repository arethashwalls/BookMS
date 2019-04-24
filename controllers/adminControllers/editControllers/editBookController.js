const { Book } = require('../../../models');

module.exports = {
    updateBook: (req, res) => {
        const { alias } = req.params;
        const updateFields = req.body.data;
        Book.findOneAndUpdate({alias}, { $set: updateFields })
        .then(result => res.sendStatus(200))
        .catch(err => res.status(404).send({message: err}));
    }
}