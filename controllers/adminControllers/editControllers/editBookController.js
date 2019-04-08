const { Book } = require('../../../models');

module.exports = {
    updateBook: (req, res) => {
        const { updateId } = req.body;
        res.send(updateId);
    }
}