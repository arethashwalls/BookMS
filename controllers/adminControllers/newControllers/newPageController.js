const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getNewPage: (req, res) => {
        const url = setUrl('api/user/title');
        axios.get(url)
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewPages', {
                username: 'Areeeeth',
                num: 9,
                siteTitle,
                isNew: true,
                isPage: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    }
}