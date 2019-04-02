const mongoose = require('mongoose'),
      {Schema} = mongoose;

const chapterSchema = new Schema({
    ch_title: {
        type: String,
        required: true
    },
    ch_num: {
        type: Number,
        required: true
    },
    tags: [String],
    pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }],
});

module.exports = mongoose.model('Chapter', chapterSchema);