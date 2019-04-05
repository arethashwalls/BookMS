const mongoose = require('mongoose'),
      {Schema} = mongoose,
      bcrypt = require('bcrypt');

const userSchema = new Schema({
    email : {
        type : String,
        required : 'An email address is required.',
        unique : true,
        validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            'Please enter a valid email address.'
        ]
    },
    password : {
        type : String,
        required : true 
    },
    siteTitle: {
        type: String,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }],
    authors: [{
        type: Schema.Types.ObjectId,
        ref: "Author"
    }],
    stdalone_pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }]
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    bcrypt.genSalt(10)
    .then(salt => {
        bcrypt.hash(this.password, salt)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

userSchema.methods.isValidPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password)
        .then(matches => {
            if(matches) resolve(true);
            resolve(false);
        });
    });
}

module.exports = mongoose.model('User', userSchema);