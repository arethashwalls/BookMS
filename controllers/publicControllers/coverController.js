const { Book } = require('../../models');
const { authorfy } = require('../../utils/formaters');

module.exports = (req, res) => {
        const {alias} = req.params;
        Book.findOne({alias})
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