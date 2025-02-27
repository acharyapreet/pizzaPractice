const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Enter valid email'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'password is required']
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

module.exports = User;