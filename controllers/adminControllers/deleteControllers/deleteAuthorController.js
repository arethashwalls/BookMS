const { Author } = require('../../../models');

module.exports = {
    deleteAuthor: (req, res) =>{
        const { deleteId } = req.body;
        Author.findByIdAndRemove(deleteId)
        .then(result => {
            res.sendStatus(200).send(`Author ${result._id} successfully deleted.`)
        })
        .catch(err => res.sendStatus(404)).send('Author not found.')
    }
}