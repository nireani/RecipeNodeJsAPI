const express = require('express')
const router = express()
const request = require("request");

router.get('/sanity', function(req,res){
    res.send('ok')
})


router.get('/recipes/:ingredient',function(req,resg){
    
    const ingredient = req.params.ingredient
    console.log(ingredient);
request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(req,res){
    let recipes = JSON.parse(res.body).results
    console.log(recipes);
    const filteredRecipesArr= recipes.map(r=>{ return {
        title: r.title,
        ingredients :r.ingredients,
        thumbnail:r.thumbnail,
        href:r.href}})
    resg.send(filteredRecipesArr)


})

})






module.exports = router