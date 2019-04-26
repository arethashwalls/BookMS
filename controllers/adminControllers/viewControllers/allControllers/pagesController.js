const { User } = require('../../../../models'),
     { truncate } = require('../../../../utils').formaters;

module.exports = {
    getPages: (req, res) => {
        User.findOne({})
        .populate('stdalone_pages')
        .then(response => {
            const { stdalone_pages, site_title, books } = response;
            stdalone_pages.forEach(page => page.p_content = truncate(page.p_content));
            res.render('admin/viewers/viewAll/viewPages', {
                username: 'Arthur',
                inAdmin: true,
                num: books.length,
                siteTitle: site_title,
                stdalonePages: stdalone_pages
            });
        })
        .catch(err => console.log(err));
    }
}