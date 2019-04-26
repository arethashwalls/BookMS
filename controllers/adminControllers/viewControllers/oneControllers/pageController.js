const { Page } = require('../../../../models');

module.exports = {
    getPage: (req, res) => {
        const { alias } = req.params;
        Page.findOne({alias})
        .then(page => {
            console.log(page)
            res.render('admin/viewers/one/page', {
                username: 'aaah',
                siteTitle: 'aah',
                inAdmin: true,
                page
            });
        })
        .catch(err => console.log(err));
    }
}