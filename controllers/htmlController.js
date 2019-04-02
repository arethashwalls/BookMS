const db = require('../models');

module.exports = {
    getTitlePage: (req, res) => {
        const urlTitle = req.params.url_title;
        db.Book.find({url_title: urlTitle})
        .then(data => res.render('index', {
            cover: data.cover
        }))
        .catch(err => console.log(err));
    }
}