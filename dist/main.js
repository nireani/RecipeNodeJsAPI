

$(document).on('click', '.b', function () {
  const ingredient=   $('.input').val()
  $.get(`/recipes/${ingredient}`,function(recipeArr){
    $(".recipe").empty()
    const source = $("#recipe-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ recipe: recipeArr })
    $(".recipe").append(newHTML)

  })
})