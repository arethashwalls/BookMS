const { Author, Book, User } = require('../../../models');
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
            return new Promise((resolve, reject) => {
                console.log('\nBook created: ' + newBook.title + '\n');
                User.findOneAndUpdate({}, {
                    $push: {books: newBook._id}
                })
                .then(newUser => resolve(newBook))
                .catch(err => reject(err));
            })
        })
        .then(newBook => {
            return new Promise((resolve, reject) => {
                newBook.authors.forEach(author => {
                    Author.findOneAndUpdate({_id: author._id}, {
                        $push: {books: newBook._id}
                    })
                    .catch(err => reject(err))
                });
                resolve(newBook);
            })            
        })
        .then(() => res.redirect('../view/all/books'))
        .catch(err => console.log(err));
    }
}