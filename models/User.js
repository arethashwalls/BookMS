const mongoose = require('mongoose'),
      {Schema} = mongoose,
      bcrypt = require('bcrypt');

const userSchema = new Schema({
    email : {
        type : String,
        required : 'An email address is required.',
        unique : true,
        validate: [
            (email) => email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            'Please enter a valid email address.'
        ]
    },
    password : {
        type : String,
        required : true 
    }
});

userSchema.pre('save', next => {
    if (!user.isModified('password')) return next();
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

UserSchema.methods.isValidPassword = password =>  bcrypt.compare(password, this.password);

module.exports = mongoose.model('User', userSchema);