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
    }
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

userSchema.methods.isValidPassword = password =>  bcrypt.compare(password, this.password);
// userSchema.methods.isValidPassword = password => true


module.exports = mongoose.model('User', userSchema);