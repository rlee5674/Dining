
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
					var all = JSON.parse(result);
            		var data = all["data"];
					recipes = JSON.parse(result);
					var parsemen = parseJSON(recipes);
						//printJSON(parsemen);
					HideHover();
					
					ShowHoversWhen();
					lineup = new Array;
					lineup = chef_lineup(recipes);
					for (i = 0; i<lineup.length;i++) {
						$("#c" + i).append(lineup[i].linked);
						$(lineup[i].linked).attr('id', 'f' + i);
					}
					reDirect(recipes);
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
function reDirect(rs){

	$("#c0").click(function(){
   article_recipe_display(0, rs);
});
	$("#c1").click(function(){
    article_recipe_display(1, rs);
});
	$("#c2").click(function(){
    article_recipe_display(2, rs);
});
	$("#c3").click(function(){
   article_recipe_display(3, rs);
});
	$("#c4").click(function(){
   article_recipe_display(4, rs);
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
}
