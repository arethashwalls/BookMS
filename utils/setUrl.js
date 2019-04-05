const path = require('path');

module.exports = urlPath => process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/${urlPath}`
    : 'blah'

// const url = process.env.NODE_ENV === 'development'
//         ? 'http://localhost:3000/api/books/all'
//         : '/api/books/all'