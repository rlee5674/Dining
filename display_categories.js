var categories = new Set();

$(function() {
    $.each(recipes, function(i, recipe) {
        categories.add(recipe.Genre);
    });
});

$(document).ready(function() {
    /* Display categories on page */
    categories.forEach(function(i, cat) {
        console.log(cat);
        $("#categories").append('<li id="' + cat + '" class="category">' + cat + '</li>');
    });

    /* Display all recipes on page */
    $.each(recipes, function(i, recipe) {

    });
});