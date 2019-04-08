const mongoose = require('mongoose'),
      {Schema} = mongoose;

const pageSchema = new Schema({
    p_title: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    p_num: {
        type: Number
    },
    tags: [String],
    p_content: String
});

module.exports = mongoose.model('Page', pageSchema);