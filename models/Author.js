const mongoose = require('mongoose'),
      {Schema} = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: String
});

module.exports =  mongoose.model('Author', authorSchema);