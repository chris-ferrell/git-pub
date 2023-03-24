const express = require('express');
const app = express();
const PORT = 3000;
const drinks = require('./models/drinks.js')
const drinksRouter = require('./controller/drinks') // import router


// Middleware
app.use('/drinks', drinksRouter)
app.use('/drinks/:id', drinksRouter)

app.get('/', (req,res) => {
    res.send('Welcome to the Gitpub App!');
})

app.get('/drinks/:id', (req,res) => {
    // res.render('drinks_show.ejs', {
    //     allDrinks:drinks
    // })
    // res.send(req.params.id)
})

app.get('/drinks/', (req,res) => {
    res.render(
        'drinks_index.ejs', {
            allDrinks:drinks
        }
    );
});

app.listen(PORT, () => {
    console.log("listening.. ");
});