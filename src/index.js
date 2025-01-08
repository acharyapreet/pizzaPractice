const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}....`);

})