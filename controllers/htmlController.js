const db = require('../models');

module.exports = {
    getTitlePage: (req, res) => {
        const urlTitle = req.params.url_title;
        console.log('title: ' + urlTitle)
        // db.Book.find({url_title: urlTitle})
        // .then(data => res.render('index', {
        //     cover: data.cover
        // }))
        // .catch(err => console.log(err));
        res.render('index', {
            cover: '/images/bohemia-cover.jpg'
        })

    }
}