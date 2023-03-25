// requiring express
const express = require('express');
// requiring the exported drinks module
// const drinks = require('../models/drinks')
const drinksObj = require('../models/drinks.js')
const drinks = drinksObj.data;
// requiring exported food module
const foodObj = require('../models/food.js');
const food = foodObj.data;
// Create router Object

const router = express.Router() 

// register routes
router.get('/', (req,res) => {
    res.render('drinks_index', {
        allDrinks:drinks
    })
})



router.get('/:id', (req,res) => {
    // console.log(req.params.id)
    const index = req.params.id;
    res.render('drinks_show.ejs', {
        oneDrink:drinks[index]
    })
    }) 
    //else {
    //     const index = req.params.id;
    
    //     res.render( 
    //     'drinks_show.ejs',
    //         {
    //         oneDrink:drinks[index],
    //         drinkIndex:index
    //         }
    // )
    // } 
 

// router.get('/:id', (req,res) => {
//     const index = req.params.id;
    
//     res.render( 
//         'drinks_show.ejs', {
//             oneDrink:drinks,
//             drinkIndex:index
//         }
//     )
// })
//export router 
module.exports = router 