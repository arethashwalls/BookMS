const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    ch_title: {
        type: String,
        required: true
    },
    ch_num: {
        type: SVGAnimatedNumberList,
        required: true
    },
    tags: [String],
    pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }],
});

module.exports = mongoose.model('Chapter', chapterSchema);