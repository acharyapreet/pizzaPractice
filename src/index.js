const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRoute =require('./routes/userRoutes')
const cartRoute =require('./routes/cartRoute')
const authRouter = require('./routes/authRoute');

// making a app object of express
const app = express();

//these are deserilizers
//used to read/parse the incoming request
app.use(bodyParser.json());
//extended true means we can parse nested objects and it remove the warning
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

//routing the userRoute
app.use('/users',userRoute);
//routing the cartRoute
app.use('/cart',cartRoute);
//routing the authRoute
app.use('/auth', authRouter);
// app.post('/ping', (req, res) => {
//     console.log(req.body);
//     return res.json({message : "pong"})
// })

//starting the server
app.listen(serverConfig.PORT, async() => {
    await connectDB();
    console.log(`server is running on port ${serverConfig.PORT}`);

    // const newUser = await User.create({
    //     firstName : "johnathan",
    //     lastName : "desuza",
    //     mobile_number :1234567890,
    //     password : 'hello123',
    //     email : 'john@gmail.com'
    // })

    // console.log("Created new user");
    // console.log(newUser);
}) 