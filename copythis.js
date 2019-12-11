/*JSON DATA------------------------*/
var recipes;
var lineup;


	function Swan_Song() {
			console.log("swan_sing");
			request = new XMLHttpRequest();
			request.open("GET", "https://aqueous-castle-05363.herokuapp.com/getrecipes", true);
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			request.onreadystatechange = function() {
				if (request.readyState == 4 && request.status == 200) {
					result = request.responseText;
					recipes = JSON.parse(result);
					var parsemen = parseJSON(recipes);
						//ANY FUNCTIONS U WANT TO CALL SHOULD GO HERE
					lineup = chef_lineup(recipes);
					for (i = 0; i<lineup.length;i++) {
						$("#c" + i).append(lineup[i].linked);
						$(lineup[i].linked).attr('id', 'f' + i);
					}
				}
			};
		request.send();
	}	

/*LOOP TO DISPLAY IMAGE ELEMENTS*/
		$(document).ready(function(){
		Swan_Song();
 
		}); 



/*CREATE FOOD ELEMENT-------------------------------------------------*/
var Food = function(name, linked) {
	this.name = name;
	this.linked = make_pic(linked);
};




/*FUNCTIONS------------------------------------------------------------------------------------*/		
/*PARSING JONSET*/
function parseJSON (recipes) {
	var stringjon = new Array;
	var parsemen = new Array;
	stringjon = setstringer(recipes);
		for (i =0; i <stringjon.length; i++) {
			 parsemen[i] = JSON.parse(stringjon[i])
	}
	return parsemen;
}
/*CREATE FOOD ARRAY*/
function chef_lineup(recipes){
	var mlineup = new Array;
	console.log(recipes);
	for (i=0;i<recipes.length;i++){
			console.log(recipes[i].Title);
			mlineup[i] = chef(recipes[i]);
	}

	return mlineup;
}

/*CREATE FOOD OBJECTS FROM JSON Element*/
function chef (meal) {
			var meal = new Food(meal.Title, meal.Image);
			return meal;
			
}

/*STRINGING JSON DATA*/
function setstringer(jonset) {
    var strungarr = new Array
    for(i = 0; i < jonset.length; i++) {
    	strungarr[i] = JSON.stringify(jonset[i]);
 
	}
	return strungarr;
}

/*MAKE PICTURE FUNCTION*/
		function make_pic (linked) {
			var canvas = new Image();
			canvas.src = linked;
			return canvas;
		}
