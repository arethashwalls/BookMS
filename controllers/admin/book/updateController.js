const { Book } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

module.exports = {
    updateBook: (req, res) => {
        const { alias } = req.params;
        const updateFields = req.body.data;
        if(updateFields.alias) updateFields.alias = urlify(updateFields.alias);
        Book.findOneAndUpdate({alias}, { $set: updateFields }, {new: true})
        .then(result => res.status(200).json({message: result}))
        .catch(err => res.status(404).json({message: err}));
    }
}