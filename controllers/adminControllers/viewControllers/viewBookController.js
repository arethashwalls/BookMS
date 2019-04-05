const axios = require('axios'),
      { authorfy } = require('../../../utils/formaters');

module.exports = {
    getViewBooks: (req, res) => {
        console.log(process.env.NODE_ENV)
        const url = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/books/all'
        : '/api/books/all'
        axios.get(url)
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