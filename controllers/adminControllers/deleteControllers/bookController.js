const { Book } = require('../../../models');

module.exports = {
    deleteBook: (req, res) =>{
        const { deleteId } = req.body;
        Book.findByIdAndRemove(deleteId)
        .then(result => res.sendStatus(200))
        .catch(err => res.sendStatus(404));
    }
}