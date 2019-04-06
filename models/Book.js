const mongoose = require('mongoose'),
      { Schema } = mongoose,
      { authorfy } = require('../utils').formaters;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url_title: {
        type: String,
        required: true
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: "Author"
    }],
    cover: String,
    synopsis: String,
    tags: [String],
    chapters: [{
        type: Schema.Types.ObjectId,
        ref: "Chapter"
    }],
    stdalone_pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }],
});

bookSchema.pre('populate', function(next) {
    this.populate('authors');
    next();
})

bookSchema.virtual('author_string').get(function() {
    return authorfy(this.authors.map(author => author.name));
})

module.exports = mongoose.model('Book', bookSchema);