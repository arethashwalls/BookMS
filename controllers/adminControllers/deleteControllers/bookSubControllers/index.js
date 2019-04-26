const fs = require('fs');

fs.readdirSync(__dirname).forEach(file => {
    if(file !== 'index.js') {
        const filename = file.replace('.js', '');
        module.exports[filename] = require('./' + file);
    }
});