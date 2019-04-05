const { User, Page } = require('../../../models');

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
    },
    postNewPage: (req, res) => {
        Page.create(req.body)
        .then(newPage => {
            console.log('\nPage created: ' + newPage.p_title + '\n');
            User.findOneAndUpdate({}, {
                $push: {stdalone_pages: newPage._id}
            })
            .then(user => {
                res.redirect('../view/pages');
            })
        })
        .catch(err => console.log(err));
    }
}