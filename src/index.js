const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

// making a app object of express
const app = express();

//these are deserilizers
//used to read/parse the incoming request
app.use(bodyParser.json());
//extended true means we can parse nested objects and it remove the warning
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message : "pong"})
})

//starting the server
app.listen(serverConfig.PORT, async() => {
    await connectDB();
    console.log(`server is running on port ${serverConfig.PORT}`);
}) 