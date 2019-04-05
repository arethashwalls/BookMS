const { User, Book } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

module.exports = {
    getNewBook: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewBooks', {
                username: 'Areeeeth',
                num: 9,
                siteTitle,
                isNew: true,
                isBook: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    },
    postNewBook: (req, res) => {
        const { title, cover, synopsis } = req.body;
        const authors = [];
        const url_title = urlify(title);
        Book.create({title, url_title, authors, cover, synopsis})
        .then(newBook => {
            console.log('\nBook created: ' + newBook.title + '\n');
            User.findOneAndUpdate({}, {
                $push: {books: newBook._id}
            })
            .then(user => {
                res.redirect('../view/books');
            })
        })
        .catch(err => console.log(err));
    }
}