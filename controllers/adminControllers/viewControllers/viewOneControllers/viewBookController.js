const { Book } = require('../../../../models'),
      { authorfy } = require('../../../../utils/formaters');

module.exports = {
    viewBook: (req, res) => {
        const { url_title } = req.params;
        Book.findOne({url_title})
        .then(book => {
            res.render('admin/viewers/viewOne/viewBook', {
                username: 'aaah',
                authorstring: authorfy(book.authors),
                book
            })
        })
        .catch(err => console.log(err));
    }
}