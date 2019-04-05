const { User } = require('../../../models');

module.exports = {
    getNewBook: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewBooks', {
                username: 'Areeeeth',
                num: 9,
                siteTitle,
                isNew: true,
                isBook: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    }
}