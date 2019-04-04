const axios = require('axios');
const { authorfy } = require('../../../utils/formaters');

module.exports = {
    getViewBooks: (req, res) => {
        axios.get('/api/books/all')
        .then(response => {
            const { data: books } = response;
            books.forEach(book => {
                book.authors = authorfy(book.authors.map(author => author.name));
            });
            res.render('admin/viewers/viewBooks', {
                username: 'Arthur',
                num: 3, 
                title: 'alsdhjflsj',
                books
            });
        })
        .catch(err => console.log(err));
    }
}