const { User } = require('../../../../models'),
      { truncate } = require('../../../../utils').formaters;

module.exports = {
    getAuthors: (req, res) => {
        User.findOne({})
        .populate('authors')
        .then(response => {
            const { authors, siteTitle, books } = response;
            authors.forEach(author => author.bio = truncate(author.bio));
            res.render('admin/viewers/viewAll/viewAuthors', {
                username: 'Arthur',
                inAdmin: true,
                num: books.length,
                siteTitle,
                authors
            });
        })
        .catch(err => console.log(err));
    }
}