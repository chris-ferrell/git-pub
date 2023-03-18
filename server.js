// 
const express = require('express');
const app = express();
const port  = 3000

app.get('/', (req,res) => {
    // .send kinda like a console.log() to the routes page?? 
    res.send("Welcome to Git Pub");
});
// having the app listen on the "port" 
app.listen(port, () => {
    // logging that the app is successfully listening to the set PORT
    console.log(`Listening👂 on port:${port}`);
});

