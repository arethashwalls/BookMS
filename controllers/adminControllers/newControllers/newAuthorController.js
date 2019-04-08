const { User, Author } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

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
        const { name, bio } = req.body;
        const alias = urlify(name);
        Author.create({name, alias, bio})
        .then(newAuthor => {
            console.log('\nAuthor created: ' + newAuthor.name + '\n');
            User.findOneAndUpdate({}, {
                $push: {authors: newAuthor._id}
            })
            .then(user => {
                res.redirect('../view/all/authors');
            })
        })
        .catch(err => console.log(err));
    }
}