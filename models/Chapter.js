const mongoose = require('mongoose'),
      {Schema} = mongoose;

const chapterSchema = new Schema({
    ch_title: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    tags: [String],
    pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }],
});

module.exports = mongoose.model('Chapter', chapterSchema);