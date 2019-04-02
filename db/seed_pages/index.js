const fs = require('fs');
const path = require('path');

const readPages = (chapter) => {
    let chapterArr = [];
    fs.readdirSync(path.join(__dirname, chapter)).forEach(file => {
        if(file !== 'index.js') {
            const filename = file.replace('.html', '');
            chapterArr.push({
                title: filename,
                content: fs.readFileSync(path.join(__dirname, chapter, file), 'utf8')
            });
        }
    });
    return chapterArr;
}
module.exports = {
    c1: readPages('c1'),
    c2: readPages('c2')
}