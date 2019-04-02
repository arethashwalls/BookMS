const mongoose = require('mongoose'),
      {Schema} = mongoose;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('Author', authorSchema);