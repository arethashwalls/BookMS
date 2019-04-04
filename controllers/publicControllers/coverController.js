const { Book } = require('../../models');
const { authorfy } = require('../../utils/formaters');

module.exports = (req, res) => {
        const urlTitle = req.params.url_title;
        Book.findOne({url_title: urlTitle})
        .populate('authors')
        .then(data => {
            res.render('index', {
                title: data.title,
                author: authorfy(data.authors.map(author => author.name)),
                cover: data.cover,
            });
        })
        .catch(err => console.log(err));
}