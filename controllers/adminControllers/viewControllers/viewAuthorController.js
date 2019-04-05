const { User } = require('../../../models');

module.exports = {
    getViewAuthors: (req, res) => {
        User.findOne({})
        .populate('authors')
        .then(response => {
            const { authors, siteTitle, books } = response;
            res.render('admin/viewers/viewAuthors', {
                username: 'Arthur',
                num: books.length,
                siteTitle,
                authors
            });
        })
        .catch(err => console.log(err));
    }
}