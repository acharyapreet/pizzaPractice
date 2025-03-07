const express = require('express');

// making a app object of express
const app = express();

//starting the server
app.listen(5500, () => {
    console.log('server is running on port 5500');
}) 