const { Page, Book } = require('../../../../models');

module.exports = {
    updatePage: (req, res) => {
        const { alias, p_num } = req.params;
        const updateFields = req.body.data;
        Book.findOne({alias})
        .then(book => {
            const p_id = book.stdalone_pages[p_num - 1];
            Page.findOneAndUpdate({_id: p_id}, { $set: updateFields }, {new: true})
            .then(result => res.status(200).json({message: result}))
            .catch(err => res.status(404).json({message: err}));
        })
    }
}