const { findUser } = require("../repository/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRE } = require("../config/serverConfig");


async function authService(authDetails) {
    const email = authDetails.email;
    const hashedPassword = authDetails.password;

    //1. Find the user with the email
    const user = await findUser({email})

    if(!user){
        throw {message : "user not found", statusCode : 404}
    }

    //2. compare password
    const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);

    if(!isPasswordValid){
        throw {message : "invalid password", statusCode :401}
    }

    const token = jwt.sign({email : user.email, id : user._id}, JWT_SECRET, {expiresIn : JWT_EXPIRE});
    return token;

}

module.exports = {
    authService
}