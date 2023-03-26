// requiring express 
const express = require('express');

const foodObj = require('../models/food.js');
const food = foodObj.data;
// create the router object
const router = express.Router();


// register routes 
router.get('/:id?', (req,res) => {
    console.log(req.params.id)
    if (req.params.id === undefined){
        res.render(
            'food_index.ejs', {
                allFoods:food,
                oneFood:food
            });
    } else {
        const index = req.params.id;
    
        res.render( 
        'food_show.ejs',
            {
            oneFood:food,
            foodIndex:index
            }
    )
    }
})
module.exports = router;


