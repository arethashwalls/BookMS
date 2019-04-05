const db = require('./connection');
const models = require('../models');
const seedPages = require('./seed_pages');
const { Author, Book, Chapter, Page } = models;

console.log('\nSeeding the database.\n');

const getPageArray = chapter => {
    let pageCount = 1;
    let allPages = [];
    seedPages[chapter].forEach(page => {
        const newPage = new Page({
            p_num: pageCount,
            p_title: page.title,
            p_content: page.content
        });
        newPage.save();
        allPages.push(newPage);
        pageCount++;
    });
    return allPages;
}

db.once('open', function () {
    const doyle = new Author({
        name: 'Arthur Conan Doyle'
    });
    let c1pages = getPageArray('c1'), c2pages = getPageArray('c2');
    const chapter1 = new Chapter({
        ch_title: 'Chapter 1',
        ch_num: 1,
        pages: c1pages
    });
    const chapter2 = new Chapter({
        ch_title: 'Chapter 2',
        ch_num: 2,
        pages: c2pages
    })
    const scandalInBohemia = new Book({
        title: 'A Scandal in Bohemia',
        url_title: 'a-scandal-in-bohemia',
        cover: '/images/bohemia-cover.jpg',
        authors: [doyle],
        chapters: [chapter1, chapter2],
    });

    doyle.save();
    chapter1.save();
    chapter2.save();
    scandalInBohemia.save();
});