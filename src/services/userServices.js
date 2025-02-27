const { findUser, createUser } = require("../repository/userRepository");

async function registerUser(userDetails) {
    const User = await findUser({
        email : userDetails.email
    })
    if(User){
        throw{
            reason : "User with this email already exists", statusCode : 400
        }
    }
    const newUser = await createUser({
        name : userDetails.name,
        email : userDetails.email,
        password : userDetails.password
    })
    if(!newUser){
        throw{
            reason : "User not created" , statusCode : 500
        }
    }
    return newUser;
}

module.exports = {
    registerUser
}