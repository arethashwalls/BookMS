const { User } = require('../../../../models'),
      { formaters } = require('../../../../utils'),
      { authorfy } = formaters;

module.exports = {
    getBooks: (req, res) => {
        User.findOne({})
        .populate({
            path: 'books',
            populate: {
                path: 'authors'
            }
        })
        .then(response => {
            const { books, siteTitle } = response;
            res.render('admin/viewers/viewAll/viewBooks', {
                username: 'Arthur',
                inAdmin: true,
                num: books.length,
                siteTitle,
                books
            });
        })
        .catch(err => console.log(err));
    }
}