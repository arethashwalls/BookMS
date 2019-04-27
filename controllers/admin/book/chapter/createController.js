const { Book, Chapter } = require('../../../../models');
const { urlify } = require('../../../../utils').formaters;

module.exports = {
    getNewChapter: (req, res) => {
        const { alias } = req.params;
        Book.findOne({alias})
        .populate('chapters')
        .then(book => {
            res.render('admin/viewers/all/bookSubViews/chapters', {
                username: 'Areeeeth',
                inAdmin: true,
                num: 9,
                isNew: true,
                isBookChapter: true,
                hasForm: true,
                siteTitle: 'aah',
                book
            });
        })
        .catch(err => console.log(err));
    },
    postNewChapter: (req, res) => {
        const { ch_title } = req.body;
        const bookAlias = req.params.alias;
        const alias = urlify(ch_title);
        Chapter.create({ch_title, alias})
        .then(newChapter => {
            console.log('\nChapter created: ' + newChapter.title + '\n');
            Book.findOneAndUpdate({alias: bookAlias}, {$push: {chapters: newChapter._id}})
            .then(() => res.redirect(`/admin/books/${bookAlias}/chapters/all`));
        })
        .catch(err => console.log(err));
    }
}