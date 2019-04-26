const { Book } = require('../../../../models'),
      { authorfy } = require('../../../../utils/formaters');


module.exports = {
    getBook: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('authors')
        .then(book => {
            const authorstring = authorfy( book.authors.map(author => author.name) );
            res.render('admin/viewers/one/book', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                authorstring,
                book
            });
        })
        .catch(err => console.log(err));
    }
}