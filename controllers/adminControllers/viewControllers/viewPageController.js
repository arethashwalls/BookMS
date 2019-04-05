const { User } = require('../../../models');

module.exports = {
    getViewPages: (req, res) => {
        User.findOne({})
        .populate('stdalone_pages')
        .then(response => {
            const { stdalone_pages, site_title } = response;
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