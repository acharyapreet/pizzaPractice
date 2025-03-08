const mongoose = require('mongoose')

//Defining the schema for the user
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "First Name is required"],
        minlength : [5,"First Name must be atleast 5 characters long"],
        trim : true,
        maxlength : [20,"First Name must be atmost 20 characters long"]
    },
    lastName : {
        type : String,
        required : [true, "Last Name is required"],
        minlength : [5,"Last Name must be atleast 5 characters long"],
        trim : true,
        maxlength : [20,"Last Name must be atmost 20 characters long"]    
    },
    mobile_number : {
        type : Number,
        required : [true, "Mobile is required"],
        unique : [true, "Mobile number already exists"],
        minlength : [10, "Mobile number must be atleast 10 characters Long"],
        maxlength : [10, "Mobile number must be atmost 10 characters Long"],
        trim : true
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        trim : true,
        minlength : [6,"Password must be atleast 6 characters long"]
    },
    email : {
        type : String,
        required : true,
        unique : true,
        min : [10, "Email must be atleast 10 characters long"],
        lowercase : true,
        trim : true,
        match : [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid Email"]
    }
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports = User;