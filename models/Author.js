const mongoose = require('mongoose'),
      {Schema} = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    bio: String,
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

module.exports =  mongoose.model('Author', authorSchema);