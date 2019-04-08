const { Page } = require('../../../../models');

module.exports = {
    viewPage: (req, res) => {
        const { id } = req.params;
        Page.findById(id)
        .then(page => {
            res.json(page)
        })
        .catch(err => console.log(err));
    }
}