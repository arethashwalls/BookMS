const axios = require('axios');

module.exports = {
    getViewBooks: (req, res) => {
        axios.get('http://localhost:3000/api/books/all')
        .then(response => {
            res.render('admin/viewers/viewBooks', {
                username: 'Arthur',
                num: 3, 
                title: 'alsdhjflsj',
                books: response.data
            });
        })
        .catch(err => console.log(err));
    }
}