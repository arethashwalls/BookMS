const { User } = require('../../models');

module.exports = {
    getAllStdalonePages: (req, res) => {
        User.findOne({})
        .populate('stdalone_pages')
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
}