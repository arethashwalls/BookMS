const { Chapter } = require('../../../../models');
const { urlify } = require('../../../../utils').formaters;

module.exports = {
    updateChapter: (req, res) => {
        const { alias, ch_num } = req.params;
        const updateFields = req.body.data;
        if(updateFields.alias) updateFields.alias = urlify(updateFields.alias);
        Book.findOne({alias})
        .then(book => {
            const ch_id = book.chapters[ch_num - 1];
            Chapter.findOneAndUpdate({_id: ch_id}, { $set: updateFields }, {new: true})
        })
        // Book.findOneAndUpdate({alias}, { $set: updateFields }, {new: true})
        .then(result => res.status(200).json({message: result}))
        .catch(err => res.status(404).json({message: err}));
    }
}