const express = require('express');
const serverConfig = require('./config/serverConfig');

// making a app object of express
const app = express();

//starting the server
app.listen(serverConfig.PORT, () => {
    console.log(`server is running on port ${serverConfig.PORT}` );
}) 