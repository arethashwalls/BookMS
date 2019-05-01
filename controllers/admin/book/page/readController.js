const { Book, Page } = require('../../../../models'),
     { truncate } = require('../../../../utils').formaters;

module.exports = {
    getPage: (req, res) => {
        const { alias, p_num } = req.params;
        Book.findOne({alias})
        .populate('stdalone_pages')
        .then(book => {
            page = book.stdalone_pages[p_num - 1];
            res.render('admin/viewers/one/bookSubViews/page', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                page,
                book, 
                num: p_num
            });
        });
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