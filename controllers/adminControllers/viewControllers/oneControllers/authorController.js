const { Author } = require('../../../../models');

module.exports = {
    getAuthor: (req, res) => {
        const { alias } = req.params;
        Author.findOne({alias})
        .then(author => {
            res.render('admin/viewers/viewOne/viewAuthor', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                author
            })
        })
        .catch(err => console.log(err));
    }
}