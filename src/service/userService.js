const { findUser, createUser } = require("../repository/userRepository");

//function to sign up a user
async function signUpUser(userDetails){
    //first check email and mobile number is unique or not
    const user = await findUser({
        email: userDetails.email,
        mobile_number: userDetails.mobile_number
    })
    if(user){
        throw{reason: "user already exists",statusCode : 400}
    }
    //if user does not exist then create a new user

    const newUser = await createUser({
        email : userDetails.email,
        mobile_number : userDetails.mobile_number,
        firstName : userDetails.firstName,
        lastName : userDetails.lastName,
        password : userDetails.password
    })
    if(!newUser){
        throw{reason : "user not created",statusCode : 500}
    };
    return newUser;

}

module.exports = {
    signUpUser
}