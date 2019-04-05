const axios = require('axios'),
      { setUrl } = require('../../../utils/');

module.exports = {
    getNewAuthor: (req, res) => {
        const url = setUrl('api/user/title');
        axios.get(url)
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err));
    }
}

// const axios = require('axios'),
//       { setUrl } = require('../../../utils/');

// module.exports = {
//     getViewAuthors: (req, res) => {
//         const url = setUrl('api/authors/all');
//         axios.get(url)
//         .then(response => {
//             const { authors, siteTitle } = response.data;
//             res.render('admin/viewers/viewAuthors', {
//                 username: 'Arthur',
//                 num: 3,
//                 siteTitle,
//                 authors
//             });
//         })
//         .catch(err => console.log(err));
//     }
// }