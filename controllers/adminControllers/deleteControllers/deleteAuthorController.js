const { Author } = require('../../../models');

module.exports = {
    deleteAuthor: (req, res) =>{
        const { deleteId } = req.body;
        Author.findByIdAndRemove(deleteId)
        .then(result => {
            console.log(result);
            res.redirect('/admin/view/authors');
        })
    }
}