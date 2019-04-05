const { User, Book } = require('../../../models');

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
        Book.create(req.body)
        .then(newBook => {
            console.log('\nBook created: ' + book.title + '\n');
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