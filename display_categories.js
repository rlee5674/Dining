var categories = new Set();
var ingredients = new Array();
var todays_recipes = new Array();
var str = "goat cheese baked polenta w/ mushrooms &amp; ricotta (v)";

/* Create a set of all unique cateogories. */
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
            console.log(todays_recipes);
            var f_recipes = filter_recipes(cat);
            display_recipes(f_recipes);
        });
        $("#categories").append(c);
    });
    /* TODO: Filter throug recipes based off of what's avaiable. */
    /* Display all recipes on page */
    req();
    
});

/* For filtering through recipes by genre. */
function filter_recipes(genre) {
    var filter_fun = (x) => {return x.Genre == genre};
    if (genre == "all") {
        filter_fun = (x) => {return true};
    }
    return todays_recipes.filter(filter_fun);
}

/* Display recipes given an array. */
function display_recipes(rs) {
    $("#recipes").empty();
    $.each(rs, function(i, recipe) {
        var name = recipe.Title;
        // var r = $('<div id="' + name + '" class="recipe"><p>' + name + '</p></div>');
        var img = $('<img src="' + recipe.Image + '" class="recipe">');
        // r.append(img);
        // img.bind('mouseover', function() {
            
        // });
        img.bind('click', function() {
            
        });
        $("#recipes").append(img);
    })
}

function strip_recipes() {
    recipes.forEach(recipe => {
        var key_ing = recipe["Key_Ing"];
        if (key_ing.length == 0) {
            todays_recipes.push(recipe);
        }
        key_ing.forEach(i => {
            if (ingredients.includes(i.toLowerCase())) {
                todays_recipes.push(recipe);
            }
        });
    });
}

function req() {
    /* Retrieve current date.*/
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var dateStr = date + '/' + month + '/' + year;

    request = new XMLHttpRequest();

    request.open("GET", "https://tuftsdiningdata.herokuapp.com/menus/dewick/" + dateStr, true);

    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4 && request.status == 200) {
            var result = request.responseText;
            var all = JSON.parse(result);
            var data = all["data"];
            /* TODO DONE: Find a way to iterate through all of the keys of JSON.
             * TODO DONE: Store all of the food in a set.
             * TODO (time?): Find a way to filter through important food words.
             *               Ex: 'mini cheesecake' -> 'cheesecake'
             *               Ex: 'turkey breast' -> 'turkey'?
             * TODO: Filter recipes according to what's available. 
             */

            for (var meal in data) {
                for (var key in data[meal]) {
                    var ins = data[meal][key];
                    ins.forEach(ingredient => ingredients.push(ingredient.toLowerCase()));
                }
            }
            strip_recipes();
            var f_recipes = filter_recipes("all");
            display_recipes(f_recipes);
        }
    });
    request.send();
}