var Game={};

Game.Launch=function(){
	let cookies = 0;
	let ratio = 0;
	let total = 0;
	let time = 0;
	let freezer = 0;
	let stove = 0;
	let cupboard = 0;
	let mixer = 0;
	let blender = 0;
	let microwave = 0;
	let dishwasher = 0;

	$.ajax({
	 	url: "json/data.json",
	 	dataType: "json",
	 	success: function(data){
        	cookies = data.galletas_disponibles;
    	}
    });


};
Game.Launch();