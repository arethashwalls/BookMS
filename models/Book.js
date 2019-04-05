const mongoose = require('mongoose'),
      {Schema} = mongoose;

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

module.exports = mongoose.model('Book', bookSchema);