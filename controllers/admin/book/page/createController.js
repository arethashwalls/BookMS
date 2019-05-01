const { Book, Page } = require('../../../../models');
const { urlify } = require('../../../../utils').formaters;

module.exports = {
    getNewPage: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('stdalone_pages')
        .then(book => {
            res.render('admin/viewers/all/bookSubViews/pages', {
                username: 'Areeeeth',
                inAdmin: true,
                num: 9,
                isNew: true,
                isBookPage: true,
                hasForm: true,
                siteTitle: 'aah',
                book
            });
        })
        .catch(err => console.log(err));
    },
    postNewPage: (req, res) => {
        const { alias } = req.params;
        const { p_title, p_content } = req.body;
        const p_alias = urlify(p_title);
        Page.create({p_title, alias: p_alias, p_content})
        .then(newPage => {
            console.log('\nPage created: ' + newPage.p_title + '\n');
            Book.findOneAndUpdate({alias}, {
                $push: {stdalone_pages: newPage._id}
            })
            .then(() => {
                res.redirect('../pages/all');
            })
        })
        .catch(err => console.log(err));
    }
}