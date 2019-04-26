const { Book, Page } = require('../../../../models'),
     { truncate } = require('../../../../utils').formaters;

module.exports = {
    getPage: (req, res) => {
        const { p_alias } = req.params;
        Page.findOne({alias: p_alias})
        .then(page => {
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
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('stdalone_pages')
        .then(response => {
            const { stdalone_pages, site_title } = response;
            stdalone_pages.forEach(page => page.p_content = truncate(page.p_content));
            res.render('admin/viewers/all/bookSubViews/pages', {
                username: 'Arthur',
                inAdmin: true,
                siteTitle: site_title,
                stdalonePages: stdalone_pages
            });
        })
        .catch(err => console.log(err));
    }
}