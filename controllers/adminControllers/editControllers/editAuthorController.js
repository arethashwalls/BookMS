const { Author } = require('../../../models');
const { urlify } = require('../../../utils').formaters;

module.exports = {
    updateAuthor: (req, res) => {
        const { alias } = req.params;
        const updateFields = req.body.data;
        if(updateFields.alias) updateFields.alias = urlify(updateFields.alias);
        Author.findOneAndUpdate({alias}, { $set: updateFields }, {new: true})
        .then(result => res.status(200).json({message: result}))
        .catch(err => res.status(404).json({message: err}));
    }
}