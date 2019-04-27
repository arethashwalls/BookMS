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
        Book.findOne({alias}, 'stdalone_pages title alias')
        .populate('stdalone_pages')
        .then(book => {
            book.stdalone_pages.forEach(page => page.p_content = truncate(page.p_content));
            res.render('admin/viewers/all/bookSubViews/pages', {
                username: 'Arthur',
                inAdmin: true,
                siteTitle: 'Ah',
                book
            });
        })
        .catch(err => console.log(err));
    }
}