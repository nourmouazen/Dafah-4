const mongoose= require('mongoose');
const { schema } = require('./addItems.model');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    password : String
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
