const db = require('../models');

module.exports = (req, res) => {
        const urlTitle = req.params.url_title;
        db.Book.findOne({url_title: urlTitle})
        .then(data => {
            res.render('index', {
                cover: data.cover
            })

        })
        .catch(err => console.log(err));
}