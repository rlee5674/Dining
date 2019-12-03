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
        var c = $('<li id="' + cat + '" class="category">' + cat + '</li>');
        c.bind('click', function() {
            var f_recipes = filter_recipes(cat);
            display_recipes(f_recipes);
        });
        $("#categories").append(c);
    });

    /* Display all recipes on page */
    var f_recipes = filter_recipes("all");
    display_recipes(f_recipes);
    
});

function filter_recipes(genre) {
    var filter_fun = (x) => {return x.Genre == genre};
    if (genre == "all") {
        filter_fun = (x) => {return true};
    }
    return recipes.filter(filter_fun);
}

function display_recipes(rs) {
    $("#recipes").empty();
    $.each(rs, function(i, recipe) {
        var name = recipe.Title;
        var r = $('<li id="' + name + '" class="category">' + name + '</li>');
        $("#recipes").append(r);
    })
}