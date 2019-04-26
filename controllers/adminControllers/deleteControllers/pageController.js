const { Page } = require('../../../models');

module.exports = {
    deletePage: (req, res) =>{
        const { deleteId } = req.body;
        Page.findByIdAndRemove(deleteId)
        .then(result => res.sendStatus(200))
        .catch(err => res.sendStatus(404));
    }
}