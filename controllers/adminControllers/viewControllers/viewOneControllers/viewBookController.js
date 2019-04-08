const { Book } = require('../../../../models'),
      { authorfy } = require('../../../../utils/formaters');

module.exports = {
    viewBook: (req, res) => {
        const { url_title } = req.params;
        Book.findOne({url_title})
        .populate('authors')
        .then(book => {
            const authorstring = authorfy( book.authors.map(author => author.name) );
            res.render('admin/viewers/viewOne/viewBook', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                authorstring,
                book
            })
        })
        .catch(err => console.log(err));
    }
}