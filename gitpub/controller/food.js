// requiring express 
const express = require('express');

const foodObj = require('../models/food.js');
const food = foodObj.data;
// create the router object
const router = express.Router();


// register routes 
router.get('/:id?', (req,res) => {
    if(req.params.id === undefined) {
        // food index goes here
        res.render(
            'food_index.ejs', {
             allFoods:food,
             oneFood:food
        })
    } else { 
        // food show goes here
        const index = req.params.id;
        res.render(
            'food_show.ejs',{
                oneFood:food[index],
                foodIndex:index
            })
    }
})
module.exports = router;