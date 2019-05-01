const { Book } = require('../../../../models');

module.exports = {
    getChapter: (req, res) => {
        const { alias, ch_num } = req.params;
        Book.findOne({alias})
        .populate('chapters')
        .then(book => {
            chapter = book.chapters[ch_num - 1];
            res.render('admin/viewers/one/bookSubViews/chapter', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                chapter,
                book, 
                num: ch_num
            });
        });
    },
    getChapters: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('chapters')
        .then(book => {
            res.render('admin/viewers/all/bookSubViews/chapters', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                book
            });
        })
        .catch(err => console.log(err));
    }
}