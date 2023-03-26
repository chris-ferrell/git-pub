// requiring express
const express = require('express');
// requiring the exported drinks module
const drinksObj = require('../models/drinks.js')
const drinks = drinksObj.data;
// requiring exported food module
const foodObj = require('../models/food.js');
const food = foodObj.data;

const router = express.Router() 
console.log('reached router');
router.get('/', (req,res) => {
    res.render(
        'drinkfood.ejs', {
            allDrinks:drinks,
            allFoods:food,
            oneFood:food
        })
})
module.exports = router;