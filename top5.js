
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
						//printJSON(parsemen);
					HideHover();
					reDirect();
					ShowHoversWhen();
					lineup = new Array;
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



/*FUNCTION CALLS______________________________________________________________________________*/
/*COVERT JSON DATA TO A STRING*/





/*HOVER COMMANDS-------------*/
/*HIDE HOVER COMMANDS AT START*/
		function HideHover() {
		for (i =0; i<5;i++) {
  		  			$("#over" + i).hide();
		}
		}
/*CLICK COMMANDS FOR REDIRECTING TO NEW PAGE*/
function reDirect(){
$("img").click(function(){
   window.location.replace("https://cponline.pw/");
})
}

/*HOVER COMMMANDS*/
		function ShowHoversWhen(){
				$( "#c0" ).hover(
					  function() {
					   $("#over"+0).show();
						$("#over"+0).html(lineup[0].name);
					  }, function() {
							$("#over"+0).hide();
					  }
				);
				$( "#c1" ).hover(
					  function() {
					   $("#over"+1).show();
						$("#over"+1).html(lineup[1].name);
					  }, function() {
							$("#over"+1).hide();
					  }
				);
				$( "#c2" ).hover(
					  function() {
					   $("#over"+2).show();
						$("#over"+2).html(lineup[2].name);
					  }, function() {
							$("#over"+2).hide();
					  }
				);
				$( "#c3" ).hover(
					  function() {
					   $("#over"+3).show();
						$("#over"+3).html(lineup[3].name);
					  }, function() {
							$("#over"+3).hide();
					  }
				);
				$( "#c4" ).hover(
					  function() {
					   $("#over"+4).show();
						$("#over"+4).html(lineup[4].name);
					  }, function() {
							$("#over"+4).hide();
					  }
				);

			

		}

		



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
