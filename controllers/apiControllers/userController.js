const { User } = require('../../models');

module.exports = {
    getSiteTitle: (req, res) => {
        User.findOne({}, 'siteTitle')
        .then(user => res.json(user.siteTitle))
        .catch(err => console.log(err));
    }
}