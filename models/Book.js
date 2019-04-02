const mongoose = require('mongoose'),
      {Schema} = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cover: String,
    authors: [{
        type: Schema.Types.ObjectId,
        ref: "Author"
    }],
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