const { User, Page } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

module.exports = {
    getNewPage: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(response => {
            const siteTitle = response.data;
            res.render('admin/viewers/viewAll/viewPages', {
                username: 'Areeeeth',
                num: 9,
                inAdmin: true,
                siteTitle,
                isNew: true,
                isPage: true,
                hasForm: true
            })
        })
        .catch(err => console.log(err));
    },
    postNewPage: (req, res) => {
        const { p_title, p_num, p_content } = req.body;
        const alias = urlify(p_title);
        Page.create({p_title, alias, p_num, p_content})
        .then(newPage => {
            console.log('\nPage created: ' + newPage.p_title + '\n');
            User.findOneAndUpdate({}, {
                $push: {stdalone_pages: newPage._id}
            })
            .then(user => {
                res.redirect('../view/all/pages');
            })
        })
        .catch(err => console.log(err));
    }
}