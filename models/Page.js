const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    p_title: {
        type: String,
        required: true
    },
    p_num: {
        type: Number,
        required: true
    },
    tags: [String],
    p_content: String
});

module.exports = mongoose.model('Page', pageSchema);