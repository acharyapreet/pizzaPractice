const { signUpUser } = require("../service/userService");

async function userController(req,res){
    const userDetails = req.body;
    try {
        const response = await signUpUser(userDetails);
        return res.status(201).json({
            success : true,
            message : "User created successfully",
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}

module.exports = {
    userController
}