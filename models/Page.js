const mongoose = require('mongoose'),
      {Schema} = mongoose;

const pageSchema = new Schema({
    p_title: {
        type: String,
        required: true
    },
    p_num: {
        type: Number
    },
    p_authors: [{
        type: Schema.Types.ObjectId,
        ref: "Author"
    }],
    tags: [String],
    p_content: String
});

module.exports = mongoose.model('Page', pageSchema);