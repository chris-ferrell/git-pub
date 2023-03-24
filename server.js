// 
const express = require('express');
const app = express();
const port  = 3000
const drinks_model = require('./models/drinks');
const view_drinks = require('./views/drinks_index.ejs');


//Middleware
// This is a view engine that is looking for EJS files to be rendered.
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res) => {
    // .send kinda like a console.log() to the routes page?? 
    // res.send("Welcome to Git Pub");
    res.render('index.ejs')
    
});

// having the app listen on the "port" 
app.listen(port, () => {
    // logging that the app is successfully listening to the set PORT
    console.log(`Listening👂 on port:${port}`);
});

