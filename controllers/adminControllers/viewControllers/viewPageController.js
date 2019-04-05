const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getViewPages: (req, res) => {
        const url = setUrl('api/pages/all');
        axios.get(url)
        .then(response => {
            const { books, siteTitle } = response.data;
            res.render('admin/viewers/viewPages', {
                username: 'Arthur',
                num: 3, 
                siteTitle,
                books
            });
        })
        .catch(err => console.log(err));
    }
}