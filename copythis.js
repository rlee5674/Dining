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
					//PARSE JSON DATA FOR U TO USE I DID THIS WITH CHEF LINEUP IN MY FILE, but u can do however
					//at this point all the json is stored in recipes
					}
				}
			};
		request.send();
	}	

/*CALL THE MAIN SWAN SONG FUNCTION WHEN THE DOC IS READY*/
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
	
	
	
