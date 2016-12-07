var Game={};

Game.Launch=function(){
	let cookies = 0;
	let gps = 0;
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
        	stat(data);
    	}
    });

	function stat(status){
		cookies = status.galletas_disponibles;
		gps = status.galletas_por_segundo;
		total = status.todas_las_galletas;
		time = status.tiempo_jugando;
		freezer = status.refrigeradora_lvl;
		stove = status.horno_lvl;
		cupboard = status.alacena_lvl;
		mixer = status.mescladora_lvl;
		blender = status.licuadora_lvl;
		microwave = status.microondas_lvl;
		dishwasher = status.lavaplatos_lvl;
		$("#stock").html(cookies);
		$("#gps").html(gps);
		$("#allcookies").html(total);
		$("#playtime").html(time);
		$("#status-freezer").html(freezer);
		$("#status-stove").html(stove);
		$("#status-cupboard").html(cupboard);
		$("#status-mixer").html(mixer);
		$("#status-blender").html(blender);
		$("#status-microwave").html(microwave);
		$("#status-dishwasher").html(dishwasher);
	}
};
Game.Launch();