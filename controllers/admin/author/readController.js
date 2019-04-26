const { Author } = require('../../../../models'),
      { User } = require('../../../../models'),
      { truncate } = require('../../../../utils').formaters;

module.exports = {
    getAuthor: (req, res) => {
        const { alias } = req.params;
        Author.findOne({alias})
        .then(author => {
            res.render('admin/viewers/one/author', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                author
            })
        })
        .catch(err => console.log(err));
    },
    getAuthors: (req, res) => {
        User.findOne({})
        .populate('authors')
        .then(response => {
            const { authors, siteTitle, books } = response;
            authors.forEach(author => author.bio = truncate(author.bio));
            res.render('admin/viewers/all/authors', {
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