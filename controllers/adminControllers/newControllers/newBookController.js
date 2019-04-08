const { User, Book } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

module.exports = {
    getNewBook: (req, res) => {
        User.findOne({}, 'siteTitle')
        .populate('authors', ['name', '_id'])
        .then(response => {
            const { siteTitle, authors } = response;
            res.render('admin/viewers/viewAll/viewBooks', {
                username: 'Areeeeth',
                num: 9,
                inAdmin: true,
                siteTitle,
                authors,
                isNew: true,
                isBook: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    },
    postNewBook: (req, res) => {
        const { title, authors, cover, synopsis } = req.body;
        const alias = urlify(title);
        Book.create({title, alias, authors, cover, synopsis})
        .then(newBook => {
            console.log('\nBook created: ' + newBook.title + '\n');
            User.findOneAndUpdate({}, {
                $push: {books: newBook._id}
            })
            .then(user => {
                res.redirect('../view/all/books');
            })
        })
        .catch(err => console.log(err));
    }
}