const { User } = require('../../../models');

module.exports = {
    getNewPage: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewPages', {
                username: 'Areeeeth',
                num: 9,
                siteTitle,
                isNew: true,
                isPage: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    }
}