const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getViewPages: (req, res) => {
        const url = setUrl('api/pages/all');
        axios.get(url)
        .then(response => {
            const { stdalone_pages, site_title } = response.data;
            res.render('admin/viewers/viewPages', {
                username: 'Arthur',
                num: 3, 
                siteTitle: site_title,
                stdalonePages: stdalone_pages
            });
        })
        .catch(err => console.log(err));
    }
}