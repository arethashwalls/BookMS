const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getViewPages: (req, res) => {
        const url = setUrl('api/pages/all');
        axios.get(url)
        .then(response => {
            console.log(response)
            const { data: books } = response;
            res.render('admin/viewers/viewPages', {
                username: 'Arthur',
                num: 3, 
                siteTitle: 'alsdhjflsj',
                bookTitle: 'blah',
                
                books
            });
        })
        .catch(err => console.log(err));
    }
}