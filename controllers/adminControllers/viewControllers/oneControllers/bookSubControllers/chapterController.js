const { Book, Chapter } = require('../../../../../models');

module.exports = {
    viewChapter: (req, res) => {
        const { bookAlias, ch_num } = req.params;
        Book.findOne({alias: bookAlias})
        .populate('chapters')
        .then(chapters => {
            chapter = chapters.filter(chapter => chapter.ch_num === ch_num)[0];
            res.render('admin/viewers/viewOne/viewChapter', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                chapter
            });
        });
    }
}