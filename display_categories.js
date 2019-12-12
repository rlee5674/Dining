var categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
var ingredients = new Array();
var todays_recipes = new Array();
var recipes = new Array();

$(document).ready(function() {
    get_all_recipes();

    /* Display categories on page */
    categories.forEach(function(i, cat) {
        console.log(i);
        var c = $('<li id="' + i + '" class="category">' + i + '</li>');
        c.bind('click', function() {
            var f_recipes = filter_recipes(i);
            display_recipes(f_recipes);
        });
        $("#categories").append(c);
    });

    req();
    
});

function get_all_recipes() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://aqueous-castle-05363.herokuapp.com/getrecipes", false);
    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4 && request.status == 200) {
            var result = request.responseText;
            recipes = JSON.parse(result);
            // recipes.forEach(recipe => {
            //     if (recipe.hasOwnProperty("Genre")) {
            //         categories.add(recipe["Genre"]);
            //     }
            // });
        }
    });
    request.send();
}

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
        img.bind('click', function() {
            article_recipe_display(i, rs);
        });
        $("#recipes").append(img);
    })
}

function strip_recipes() {
    for (let r = 0; r < recipes.length; r++) {
        var recipe = recipes[r];
        console.log(r + " " + recipe['Key_Ing']);
        if(!recipe.hasOwnProperty('Key_Ing')) {
            continue;
        }
        var key_ing = recipe["Key_Ing"];

        if (key_ing.length == 0) {
            todays_recipes.push(recipe);
            continue;
        }
        var key_ing_bool = new Array(key_ing.length).fill(0);

        for (let key = 0; key < key_ing.length; key++) {
            for (let ing = 0; ing < ingredients.length; ing++) {
                if (ingredients[ing].includes(key_ing[key].toLowerCase()) || ingredients[ing] == key_ing[key].toLowerCase()) {
                    key_ing_bool[key] = 1;
                    break;
                }
            }
        }
        if (key_ing_bool.every(i => {return i == 1})) {
            todays_recipes.push(recipe);
        }
    };
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

function article_recipe_display(i, data) {
    // clear space first!!!
    $("#Goback").show();
    $("#container").empty();
    $("#container").show();
    $("#prev_container").hide();
    var container = document.getElementById("container");
    console.log(data[i].Title);
    var top_info = document.createElement("DIV");
    top_info.innerHTML = "<h1>"+data[i].Title+"</h1>";
    top_info.innerHTML += "<img src="+data[i].Image+ ">";

    var bottom = document.createElement("DIV");
    bottom.innerHTML = "<h2>Ingredients</h2>";
    var ingred = document.createElement("ul");
    // console.log(data[i].Full.length);
    for (j=0; j<data[i].Full.length; j++) {
        var li = document.createElement('li');
        li.innerHTML = data[i].Full[j];
        ingred.appendChild(li);
    }
    bottom.appendChild(ingred);
    bottom.innerHTML += "<h2>Directions</h2>";
    var dirs = document.createElement("ol");
    dirs.setAttribute("id", "direct");
    // modify CSS direct id
    for (j=0; j<data[i].Steps.length; j++) {
        var li = document.createElement('li');
        li.innerHTML = data[i].Steps[j];
        dirs.appendChild(li);
    }
    bottom.appendChild(dirs);
    container.appendChild(top_info);
    container.appendChild(bottom);
}
function gobackpage() {
    $("#container").hide();
    $("#prev_container").show();
    $("#Goback").hide();
};