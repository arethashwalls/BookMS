module.exports = {
    authorfy: authorArr => {
        switch(authorArr.length) {
            case 1:
                return authorArr[0];
            case 2:
                return `${authorArr[0]} and ${authorArr[1]}`;
            default:
                const allButLast = authorArr.slice(0, authorArr.length - 2).join(', ');
                return `${allButLast} and ${authorArr[authorArr.length - 1]}`
        }
    },
    urlify: titleStr =>  titleStr.toLowerCase().split(' ').slice(0,5).join('-'),
    truncate: paragraph =>  paragraph.split(' ').length > 25
            ? paragraph.split(' ').slice(0, 25).join(' ') + '…'
            : paragraph
}