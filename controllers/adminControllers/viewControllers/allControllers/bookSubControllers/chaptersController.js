const { Book } = require('../../../../../models');

module.exports = {
    getChapters: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('chapters')
        .then(book => {
            console.log(book)
            res.render('admin/viewers/all/bookSubViews/chapters', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                book
            });
        })
        .catch(err => console.log(err));
    }
}