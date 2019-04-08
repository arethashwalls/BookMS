const { Author } = require('../../../models');

module.exports = {
    deleteAuthor: (req, res) =>{
        const { deleteId } = req.body;
        console.log(req)
        Author.findByIdAndRemove(deleteId)
        .then(result => {
            console.log(result);
            res.sendStatus(200)
        })
        .catch(err => res.sendStatus(404))
    }
}