const { Book } = require('../../../../../models');

module.exports = {
    getPages: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('stdalone_pages')
        .then(book => {
            res.render('admin/viewers/all/bookSubViews/pages', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                book
            });
        })
        .catch(err => console.log(err));
    }
}