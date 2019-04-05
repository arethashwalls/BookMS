const { User } = require('../../../models');
const { truncate } = require('../../../utils').formaters;

module.exports = {
    getViewPages: (req, res) => {
        User.findOne({})
        .populate('stdalone_pages')
        .then(response => {
            const { stdalone_pages, site_title } = response;
            stdalone_pages.forEach(page => page.p_content = truncate(page.p_content));
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