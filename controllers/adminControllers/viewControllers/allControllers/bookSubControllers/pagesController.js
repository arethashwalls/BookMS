const { Book } = require('../../../../../models');


module.exports = {
    viewBookPages: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('stdalone_pages')
        .then(book => {
            res.render('admin/viewers/viewOne/viewBookPages', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                book
            });
        })
        .catch(err => console.log(err));
    }
}