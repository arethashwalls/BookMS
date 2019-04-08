const { Page } = require('../../../../models');

module.exports = {
    viewPage: (req, res) => {
        const { alias } = req.params;
        Page.findOne({alias})
        .then(page => {
            res.json(page)
        })
        .catch(err => console.log(err));
    }
}