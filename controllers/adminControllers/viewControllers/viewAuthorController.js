const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getViewAuthors: (req, res) => {
        const url = setUrl('api/authors/all');
        axios.get(url)
        .then(response => {
            const { data: authors } = response;
            res.render('admin/viewers/viewAuthors', {
                username: 'Arthur',
                num: 3, 
                title: 'alsdhjflsj',
                authors
            });
        })
        .catch(err => console.log(err));
    }
}