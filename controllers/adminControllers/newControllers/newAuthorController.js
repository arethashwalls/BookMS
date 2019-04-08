const { User, Author } = require('../../../models');

module.exports = {
    getNewAuthor: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewAll/viewAuthors', {
                username: 'Areeeeth',
                inAdmin: true,
                num: 9,
                siteTitle,
                isNew: true,
                isAuthor: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    },
    postNewAuthor: (req, res) => {
        Author.create(req.body)
        .then(newAuthor => {
            console.log('\nAuthor created: ' + newAuthor.name + '\n');
            User.findOneAndUpdate({}, {
                $push: {authors: newAuthor._id}
            })
            .then(user => {
                res.redirect('../view/authors');
            })
        })
        .catch(err => console.log(err));
    }
}