

/*JSON DATA------------------------*/
var recipes = [
{
	"Title": "Tzatziki Chicken Salad",
	"Genre": "Lunch",
	"Key_Ing": ["Grilled Hallal Chicken Breast"],
	"Full": ["Grilled Hallal Chicken Breast","Greek Plain Yogurt","Cucumbers","Lemon Slice","Salt","Pepper"],
	"RecNum": 0,
	"Steps": ["1. Cut or shred the chicken into pieces", "2. Place the chicken and cucumbers into a bowl together", 
		"3. Add a few spoonful of yogurt and squeeze one or two lemon slices", "4. Stir everything and sprinkle with sald and pepper",
		"5. Enjoy by itself, on a sandwich, or throw in some pita chips."],
	"Image": "https://1.bp.blogspot.com/-RYdPsWQ5wV0/WmdcBQYkCRI/AAAAAAAAkYc/rK2SLB45J8YfiutiMrdbgoRy2HP4n4SMgCLcBGAs/s640/Tzatziki-Chicken-Salad-Image%2B1.JPG",
},
{
	"Title": "Pasta Primavera",
	"Genre": "Dinner",
	"Key_Ing": ["Broccoli"], 
	"Full": ["Broccoli","Noodles","Carrots","Cheese", "Tomatoes", "Red Peppers"],
	"RecNum": 0,
	"Steps": ["1. Grab some plain pasta and place in a bowl", "2. Add broccoli, carrots, tomatoes, peppers and your choice of cheese",
		"3. Drizzle with oil and some salt and pepper", "4. Mix and enjoy"],
	"Image": "https://life-in-the-lofthouse.com/wp-content/uploads/2017/09/Creamy-Pasta-Primavera2.jpg",
},
{
	"Title": "Fruity Quesadilla",
	"Genre": "Breakfast",
	"Key_Ing": ["Tortilla"],  //I think on dining API, it's called tortilla strips or flour tortillas??
	//Am worried it might only be in Carm
	"Full": ["Tortilla","Peanut Butter","Grapes","Banana"],
	"RecNum": 0,
	"Steps": ["1. Spread peanut butter on tortilla or flatbread", "2. Slice grapes and banana or use any other available fruits",
		"3. Fold the tortilla in half and enjoy"],
	"Image": "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/35/63/86/picbFwj98.jpg",
},
{
	"Title": "Omelet Bagel",
	"Genre": "Breakfast",
	"Key_Ing": ["Omelet"], 
	"Full": ["Omelet","Bagel","Spinach"],
	"RecNum": 0,
	"Steps": ["1. On one half of the bagel, place the omelet and a few pieces of spinach", "2. Sprinkle some salt and pepper",
		"3. Top with the other bagel half and enjoy"],
	"Image": "https://farm3.static.flickr.com/2517/4170920914_da3a5c17ba.jpg",
},
{
	"Title": "Sloppy Joe",
	"Genre": "Lunch",
	"Key_Ing": ["Meatballs"],
	"Full": ["Meatballs","Hamburger Bun", "Ketchup", "Sriracha", "Marinara Sauce"],
	"RecNum": 0,
	"Steps": ["1. In a bowl, mash 3-4 meatballs and a few spoonfuls of marinara sauce, ketchup, and sriracha with a fork",
		"2. Spoon the meat onto a hamburger bun and enjoy"],
	"Image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/4/7/0/NY0109_Spensers-Sloppy-Joes.jpg.rend.hgtvcom.826.620.suffix/1382538657743.jpeg",
},
{
	"Title": "Ice Cream Sandwich",
	"Genre": "Dessert",
	"Key_Ing": ["Cookies"],
	"Full": ["Cookies","Ice Cream"],
	"RecNum": 0,
	"Steps": ["1. Place ice cream onto one cookie and top with the second. You can use any kind of ice cream and any kind of cookie"],
	"Image": "https://www.sprinklesforbreakfast.com/images/ice-cream-sandwichs-1.jpeg",
},
{
	"Title": "Spinach Melt",
	"Genre": "Lunch",
	"Key_Ing": ["Spinach"],//or cream cheese?
	"Full": ["Spinach","Bread", "Cheese", "Salt", "Pepper"],
	"RecNum": 0,
	"Steps": ["1. Using 1-2 slices of cheese or cream cheese spread, cover one slice of bread", "2. Stack the spinach on top of the cheese", 
		"3. Add in other veggies like artichokes if you like", "4. Sprinkle some salt and pepper", 
		"5. Top with another slice of bread and press the sandwich in the panini press until the cheese has melted or black grill marks appear"],
	"Image": "http://4.bp.blogspot.com/-tmWGufNZts0/UWwYt2XZWhI/AAAAAAAABVo/ESR1rNa0DSk/s1600/SpinachArtichokeMelt1.jpg",
},
{
	"Title": "Salmon on Greens",
	"Genre": "Dinner",
	"Key_Ing": ["Salmon"],
	"Full": ["Salmon","Spinach", "Green & Red Peppers", "Tomatoes"],
	"RecNum": 0,
	"Steps": ["1. Plate the spinach, peppers, tomatoes and salmon in that order", 
		"2. For more flavor, you could incorporate a base of mashed sweet potatoes or subsitute spinach with arugula"],
	"Image": "https://www.everydayglutenfreegourmet.ca/wp-content/uploads/2018/04/Sesame-Salmon-on-Greens-1.jpg",
},
{
	//Wanted to put this as a test case. So this recipe can be made any time, any day because Dewick always has 
	//waffle mix, blueberry jam and they won't say whether they have bananas or not
	//In this case, since this can be made any day regardless of the menu, this should show up every day. 
	//So, maybe in filter @Janny, if " " is detected, print it always?
	//Let me know how this works out
	"Title": "Blueberry Banana Waffles",
	"Genre": "Breakfast",
	"Key_Ing": [" "],
	"Full": ["Waffle Mix", "Blueberry Jam", "Bananas"],
	"RecNum": 0,
	"Steps": ["1. Pour the waffle mix into the waffle machine.", "2. Place small spoonfuls of blueberry jam through out the batter",
		"3. Close the machine cover and follow the normal waffle-making instructions", 
		"4. When the waffle is finished, plate with banana slices. You could add nutella or any other topping of choice"],
	"Image": "http://4.bp.blogspot.com/-zXgpS1xa58g/T989UdCyaiI/AAAAAAAAAzw/2hOCQM9ET7w/s1600/blueberrybananawaffles0013.JPG",
},
{
	"Title": "Fried Rice",
	"Genre": "Dinner",
	"Key_Ing": ["Rice"],//So this can be anything from VG Steamed White Rice, Organic Brown Basmatic Rice, 
	//Chinese Sticky Rice or Jasmine Rice. Any of these 4
	"Full": ["Rice","Carrots", "Broccoli", "Ham", "Soy Sauce"],
	"RecNum": 0,
	"Steps": ["1. Cut the carrots, broccoli and ham into smaller pieces", "2. Combine with rice in a bowl", 
		"3. Drizzle some soy sauce and mix thoroughly together", "4. Additional toppings could be peas, eggs, mushrooms and more"],
	"Image": "https://worldofcooking.net/wp-content/uploads/2019/07/Broccoli-with-Shrimps-and-Ham-Fried-Rice.jpg",
},
];
/*LOOP TO DISPLAY IMAGE ELEMENTS*/
		$(document).ready(function(){
		for (i = 0; i<lineup.length;i++) {
		
		$("#c" + i).append(lineup[i].linked);
		$(lineup[i].linked).attr('id', 'f' + i);

			} 
		}); 

/*CREATE FOOD ELEMENT-------------------------------------------------*/
	var Food = function(name, linked) {
		this.name = name;
		this.linked = make_pic(linked);
		}



/*FUNCTION CALLS______________________________________________________________________________*/
/*COVERT JSON DATA TO A STRING*/
var parsemen = parseJSON(recipes);
printJSON(parsemen);
var lineup = new Array;
lineup = chef_lineup(recipes);



/*HOVER COMMANDS-------------*/
/*HIDE HOVER COMMANDS AT START*/
		$(document).ready(function() {
		for (i =0; i<5;i++) {
  		  			$("#over" + i).hide();
		}
		});
/*CLICK COMMANDS FOR REDIRECTING TO NEW PAGE*/
$(document).ready(function() {
$("img").click(function(){
   window.location.replace("https://cponline.pw/");
})
});
/*HOVER COMMMANDS*/
		$(document).ready(function(){
		
			$("#c0").mouseenter(function(){
   						 $("#over"+0).show();
						$("#over"+0).html("Name: " + lineup[0].name);
						setTimeout(function(){
 							 $("#over"+0).hide();
 							}, 2000);
						});

			$("#c1").mouseenter(function(){
   						 $("#over"+1).show();
						$("#over"+1).html("Name: " + lineup[1].name);
						setTimeout(function(){
 							 $("#over"+1).hide();
 							}, 2000);
						});
			$("#c2").mouseenter(function(){
   						 $("#over"+2).show();
						$("#over"+2).html("Name: " + lineup[2].name);
						setTimeout(function(){
 							 $("#over"+2).hide();
 							}, 2000);
						});
			$("#c3").mouseenter(function(){
   						 $("#over"+3).show();
						$("#over"+3).html("Name: " + lineup[3].name);
						setTimeout(function(){
 							 $("#over"+3).hide();
 							}, 2000);
						});
			$("#c4").mouseenter(function(){
   						 $("#over"+4).show();
						$("#over"+4).html("Name: " + lineup[4].name);
						setTimeout(function(){
 							 $("#over"+4).hide();
 							}, 2000);
						});

			

		});

		



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
	for (i=0;i<recipes.length;i++){
			mlineup[i] = chef(recipes[i]);
	}

	return mlineup;
}

/*CREATE FOOD OBJECTS FROM JSON Element*/
function chef (meal) {
			var meal = new Food(meal.Title, meal.Image);
			return meal;
			
}

/*PRINT OUT IMAGES OF PARSED JSON ON PAGE*/
function printJSON (recipes) {
		for (i =0; i <parsemen.length; i++) {
			 document.getElementById('top5').innerHTML +=   parsemen[i].Title;
			
	}
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
