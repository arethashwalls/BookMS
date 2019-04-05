const { User } = require('../../../models'),
      { formaters } = require('../../../utils/'),
      { authorfy } = formaters;

module.exports = {
    getViewBooks: (req, res) => {
        User.findOne({})
        .populate('books')
        .then(response => {
            const { books, siteTitle } = response.data;
            books.forEach(book => {
                book.authors = authorfy(book.authors.map(author => author.name));
            });
            res.render('admin/viewers/viewBooks', {
                username: 'Arthur',
                num: 3,
                siteTitle,
                books
            });
        })
        .catch(err => console.log(err));
    }
}