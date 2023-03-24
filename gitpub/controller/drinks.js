// requiring express
const express = require('express');
// requiring the exported drinks module
// const drinks = require('../models/drinks')
const drinks = require('../models/drinks.js')
// Create router Object

const router = express.Router() 

// register routes
router.get('/:id?', (req,res) => {
    console.log(req.params.id)
    if (req.params.id === undefined){
        res.render(
            'drinks_index.ejs', {
                allDrinks:drinks,
                oneDrink:drinks
            });
    } else {
        const index = req.params.id;
    
        res.render( 
        'drinks_show.ejs',
            {
            oneDrink:drinks,
            drinkIndex:index
            }
    )
    }
})
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