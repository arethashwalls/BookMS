const axios = require('axios'),
      { formaters, setUrl } = require('../../../utils/'),
      { authorfy } = formaters;

module.exports = {
    getViewBooks: (req, res) => {
        const url = setUrl('api/books/all');
        axios.get(url)
        .then(response => {
            console.log(response)
            const { books, siteTitle } = response.data;
            books.forEach(book => {
                book.authors = authorfy(book.authors.map(author => author.name));
            });
            res.render('admin/viewers/viewBooks', {
                username: 'Arthur',
                num: 3,
                siteTitle,
                books
            });
        })
        .catch(err => console.log(err));
    }
}