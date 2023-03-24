const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('Welcome to the Gitpub App!');
})
app.get('/drinks', (req,res) => {
    res.render('drinks_index.ejs');
});

app.listen(PORT, () => {
    console.log("listening.. ");
});