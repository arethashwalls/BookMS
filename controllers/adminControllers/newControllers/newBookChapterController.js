const { Book } = require('../../../models');

module.exports = {
    getNewBookChapter: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('chapters')
        .then(book => {
            res.render('admin/viewers/viewOne/viewBookChapters', {
                username: 'Areeeeth',
                inAdmin: true,
                num: 9,
                isNew: true,
                isBookChapter: true,
                hasForm: true,
                siteTitle: 'aah',
                book
            });
        })
        .catch(err => console.log(err));
    }
}