const userSchema = require('../schema/userSchema');

//function to create a new user
async function createUser(userDetails){
    try {
        const response = await userSchema.create(userDetails);
        return response;
    } catch (error) {
        console.log(error);
    }
}

//function to find the user
async function findUser(parameters){
    try {
        const response = await userSchema.findOne({
            ...parameters
        });
        return response;
    } catch (error) {
        console.log('not able to find the user')
        console.log(error);
    }
}

module.exports = { 
    createUser,
    findUser
}