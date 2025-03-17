const { authService } = require("../service/authService");

async function login(req, res) {
    try {
        const payLoad = req.body;

        const response = await authService(payLoad);

        res.cookie('authToken', response, {
            httpOnly : true, // only cookies can be accessed by the web server
            secure : false,
            maxAge : 7*24*60*60*1000 // 7 days
        })
        return res.status(200).json({
            success : true,
            data : {},
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