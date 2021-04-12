const express = require('express')
const router = express()
const request = require("request");

router.get('/sanity', function(req,res){
    res.send('ok')
})


router.get('/recipes/:ingredient',function(req,resg){
    
    const ingredient = req.params.ingredient
request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(req,res){
    let data = JSON.parse(res.body).results
    console.log(data);
    resg.send(data)


})

})






module.exports = router