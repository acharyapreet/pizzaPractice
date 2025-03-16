const { authService } = require("../service/authService");

async function login(req, res) {
    try {
        const payLoad = req.body;

        const response = await authService(payLoad);
        return res.status(200).json({
            success : true,
            data : response,
            message : "user Logged in successfully",
            error : {}
        })
    } catch (error) {
        console.log("error in authController : ", error)
        return res.status(error.statusCode).json({
            success : false,
            data : {},
            message : error.reason,
            error : error
        })
    }    
}

module.exports = {
    login
}