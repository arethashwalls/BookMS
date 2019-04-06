const { User } = require('../../../models'),
      { formaters } = require('../../../utils/'),
      { authorfy } = formaters;

module.exports = {
    getViewBooks: (req, res) => {
        User.findOne({})
        .populate({
            path: 'books',
            populate: {
                path: 'authors'
            }
        })
        .then(response => {
            const { books, siteTitle } = response;
            res.render('admin/viewers/viewBooks', {
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