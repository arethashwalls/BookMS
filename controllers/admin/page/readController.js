const { User, Page } = require('../../../models'),
     { truncate } = require('../../../utils').formaters;

module.exports = {
    getPage: (req, res) => {
        const { alias } = req.params;
        Page.findOne({alias})
        .then(page => {
            console.log(page)
            res.render('admin/viewers/one/page', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                page
            });
        })
        .catch(err => console.log(err));
    },
    getPages: (req, res) => {
        User.findOne({})
        .populate('stdalone_pages')
        .then(response => {
            const { stdalone_pages, site_title, books } = response;
            stdalone_pages.forEach(page => page.p_content = truncate(page.p_content));
            res.render('admin/viewers/all/pages', {
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