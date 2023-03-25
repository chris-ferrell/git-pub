// requiring express 
const express = require('express');

const foodObj = require('../models/food.js');
const food = foodObj.data;
// create the router object
const router = express.Router();


// register routes 
router.get('/', (req,res) => {
    res.render('food_index', {
        allFoods:food
    })
})



router.get('/:id', (req,res) => {
    // console.log(req.params.id)
    const index = req.params.id;
    res.render('food_show.ejs', {
        oneFood:food[index]
    })
    }) 
module.exports = router;


