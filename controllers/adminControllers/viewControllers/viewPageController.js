const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getViewPages: (req, res) => {
        const url = setUrl('api/pages/all');
        axios.get(url)
        .then(response => {
            const { data: books } = response;
            res.render('admin/viewers/viewPages', {
                username: 'Arthur',
                num: 3, 
                title: 'alsdhjflsj',
                books
            });
        })
        .catch(err => console.log(err));
    }
}