const { User } = require('../../../models');

module.exports = {
    getViewAuthors: (req, res) => {
        User.findOne({})
        .populate('authors')
        .then(response => {
            const { authors, siteTitle } = response.data;
            res.render('admin/viewers/viewAuthors', {
                username: 'Arthur',
                num: 3,
                siteTitle,
                authors
            });
        })
        .catch(err => console.log(err));
    }
}