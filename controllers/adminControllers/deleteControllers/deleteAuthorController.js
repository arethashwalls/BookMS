const { Author } = require('../../../models');

module.exports = {
    deleteAuthor: (req, res) =>{
        const { deleteId } = req.body;
        Author.findByIdAndRemove(deleteId)
        .then(result => res.sendStatus(200))
        .catch(err => res.sendStatus(404));
    }
}