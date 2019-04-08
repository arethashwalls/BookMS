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
    bio: String
});

module.exports =  mongoose.model('Author', authorSchema);